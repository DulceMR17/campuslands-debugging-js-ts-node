import express from 'express';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

// Esquemas de validación Zod
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

  const items = [
    { id: 1, name: 'alpha', score: 10 },
    { id: 2, name: 'beta', score: 20 }
  ];

  app.get('/health', (req, res) => {
    return res.status(200).json({ ok: true });
  });

  app.get('/items', (req, res) => {
    let result = [...items];

    if (req.query.name) {
      const nameFilter = String(req.query.name).toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(nameFilter)
      );
    }

    if (req.query.minScore !== undefined) {
      const minScore = Number(req.query.minScore);
      if (!isNaN(minScore)) {
        result = result.filter(item => item.score >= minScore);
      }
    }

    const total = result.length;
    const limitQuery = req.query.limit !== undefined ? Number(req.query.limit) : total;
    const offsetQuery = req.query.offset !== undefined ? Number(req.query.offset) : 0;

    const limit = !isNaN(limitQuery) && limitQuery > 0 ? limitQuery : total;
    const offset = !isNaN(offsetQuery) && offsetQuery >= 0 ? offsetQuery : 0;

    const paginatedItems = result.slice(offset, offset + limit);

    if (req.query.limit !== undefined || req.query.offset !== undefined) {
      return res.json({
        data: paginatedItems,
        total,
        limit,
        offset
      });
    }

    return res.json(paginatedItems);
  });

  app.get('/items/:id', (req, res) => {
    const idParam = Number(req.params.id);
    if (isNaN(idParam)) {
      return res.status(422).json({ error: 'unprocessable entity', requestId: req.requestId });
    }

    const item = items.find(current => current.id === idParam);
    if (!item) {
      return res.status(404).json({ error: 'not found', requestId: req.requestId });
    }
    return res.json(item);
  });

  app.post('/items', (req, res) => {
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

    const { id, name, score } = validation.data;

    if (id !== undefined) {
      const exists = items.some(current => current.id === id);
      if (exists) {
        return res.status(409).json({ error: 'conflict', requestId: req.requestId });
      }
    }

    const newItemId = id !== undefined ? id : items.length + 1;
    const item = { id: newItemId, name, score };
    items.push(item);
    return res.status(201).json(item);
  });

  app.patch('/items/:id', (req, res) => {
    const idParam = Number(req.params.id);
    if (isNaN(idParam)) {
      return res.status(422).json({ error: 'unprocessable entity', requestId: req.requestId });
    }

    const item = items.find(current => current.id === idParam);
    if (!item) {
      return res.status(404).json({ error: 'not found', requestId: req.requestId });
    }

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

    Object.assign(item, validation.data);
    return res.status(200).json(item);
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