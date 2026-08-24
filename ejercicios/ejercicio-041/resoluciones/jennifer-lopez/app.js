import express from 'express';
import { randomUUID } from 'node:crypto';

export function createApp() {
  const app = express();

  // Middleware para asignar/propagar X-Request-Id y adjuntarlo a req.requestId
  app.use((req, res, next) => {
    const requestId = req.headers['x-request-id'] || randomUUID();
    req.requestId = requestId;
    res.setHeader('X-Request-Id', requestId);
    next();
  });

  app.use(express.json());

  const items = [
    { id: 1, name: 'alpha', score: 10 },
    { id: 2, name: 'beta', score: 20 }
  ];

  app.get('/health', (req, res) => {
    res.status(200).json({ ok: true, requestId: req.requestId });
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

    return res.json(result);
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
    const { id, name, score } = req.body || {};

    if (!name || score === undefined) {
      return res.status(400).json({ error: 'invalid payload', requestId: req.requestId });
    }

    if (id !== undefined) {
      const exists = items.some(current => current.id === Number(id));
      if (exists) {
        return res.status(409).json({ error: 'conflict', requestId: req.requestId });
      }
    }

    const newItemId = id !== undefined ? Number(id) : items.length + 1;
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

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'invalid payload', requestId: req.requestId });
    }

    Object.assign(item, req.body);
    return res.status(200).json(item);
  });

  // Middleware de manejo global de errores que asegura la inclusión de requestId
  app.use((err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    return res.status(status).json({
      error: err.message || 'internal server error',
      requestId: req.requestId
    });
  });

  return app;
}