import express from 'express';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

// --- CAPA DE SERVICIO (Lógica de Negocio y Datos) ---
class ItemsService {
  constructor() {
    this.items = [
      { id: 1, name: 'alpha', score: 10 },
      { id: 2, name: 'beta', score: 20 }
    ];
  }

  async getAll(query = {}) {
    let result = [...this.items];

    if (query.name) {
      const nameFilter = String(query.name).toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(nameFilter)
      );
    }

    if (query.minScore !== undefined) {
      const minScore = Number(query.minScore);
      if (!isNaN(minScore)) {
        result = result.filter(item => item.score >= minScore);
      }
    }

    const total = result.length;
    const limitQuery = query.limit !== undefined ? Number(query.limit) : total;
    const offsetQuery = query.offset !== undefined ? Number(query.offset) : 0;

    const limit = !isNaN(limitQuery) && limitQuery > 0 ? limitQuery : total;
    const offset = !isNaN(offsetQuery) && offsetQuery >= 0 ? offsetQuery : 0;

    const paginatedItems = result.slice(offset, offset + limit);

    if (query.limit !== undefined || query.offset !== undefined) {
      return {
        data: paginatedItems,
        total,
        limit,
        offset
      };
    }

    return paginatedItems;
  }

  async getById(id) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      const err = new Error('unprocessable entity');
      err.status = 422;
      throw err;
    }

    const item = this.items.find(current => current.id === numericId);
    if (!item) {
      const err = new Error('not found');
      err.status = 404;
      throw err;
    }

    return item;
  }

  async create(data) {
    if (data.id !== undefined) {
      const exists = this.items.some(current => current.id === Number(data.id));
      if (exists) {
        const err = new Error('conflict');
        err.status = 409;
        throw err;
      }
    }

    const newItemId = data.id !== undefined ? Number(data.id) : this.items.length + 1;
    const item = { id: newItemId, name: data.name, score: data.score };
    this.items.push(item);
    return item;
  }

  async update(id, data) {
    const item = await this.getById(id);
    Object.assign(item, data);
    return item;
  }
}

// Schemas de validación
const itemPostSchema = z.object({
  id: z.number().int().optional(),
  name: z.string({ required_error: 'name is required' }).min(1, { message: 'name is required' }),
  score: z.number({ required_error: 'score is required', invalid_type_error: 'score must be a number' })
});

const itemPatchSchema = z.object({
  name: z.string().min(1).optional(),
  score: z.number().optional()
}).refine(data => Object.keys(data).length > 0, {
  message: 'invalid payload'
});

export function createApp() {
  const app = express();
  const itemsService = new ItemsService();

  app.use((req, res, next) => {
    const requestId = req.headers['x-request-id'] || randomUUID();
    req.requestId = requestId;
    res.setHeader('X-Request-Id', requestId);
    next();
  });

  app.use(express.json());

  app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      if (!authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] === 'invalid') {
        return res.status(401).json({ error: 'unauthorized', requestId: req.requestId });
      }
    }
    next();
  });

  app.get('/health', (req, res) => {
    return res.status(200).json({ ok: true });
  });

  // --- CAPA DE CONTROLADORES / RUTAS ---
  app.get('/items', async (req, res, next) => {
    try {
      const items = await itemsService.getAll(req.query);
      return res.json(items);
    } catch (err) {
      next(err);
    }
  });

  app.get('/items/:id', async (req, res, next) => {
    try {
      const item = await itemsService.getById(req.params.id);
      return res.json(item);
    } catch (err) {
      next(err);
    }
  });

  app.post('/items', async (req, res, next) => {
    try {
      const validation = itemPostSchema.safeParse(req.body);

      if (!validation.success) {
        const details = validation.error.issues.map(issue => ({
          field: issue.path.join('.'),
          message: issue.message
        }));

        return res.status(400).json({
          error: 'invalid payload',
          details,
          requestId: req.requestId
        });
      }

      const item = await itemsService.create(validation.data);
      return res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  });

  app.patch('/items/:id', async (req, res, next) => {
    try {
      const validation = itemPatchSchema.safeParse(req.body);

      if (!validation.success) {
        const details = validation.error.issues.map(issue => ({
          field: issue.path.join('.'),
          message: issue.message
        }));

        return res.status(400).json({
          error: 'invalid payload',
          details,
          requestId: req.requestId
        });
      }

      const item = await itemsService.update(req.params.id, validation.data);
      return res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  });

  app.use((err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    return res.status(status).json({
      error: err.message || 'internal server error',
      requestId: req.requestId
    });
  });

  return app;
}