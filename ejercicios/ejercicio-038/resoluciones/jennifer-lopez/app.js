import express from 'express';

export function createApp() {
  const app = express();
  app.use(express.json());

  const items = [
    { id: 1, name: 'alpha', score: 10 },
    { id: 2, name: 'beta', score: 20 }
  ];

  app.get('/health', (req, res) => {
    res.status(200).json({ ok: true });
  });

  app.get('/items/:id', (req, res) => {
    const idParam = Number(req.params.id);
    const item = items.find(current => current.id === idParam);
    if (!item) return res.status(404).json({ error: 'not found' });
    return res.json(item);
  });

  app.post('/items', (req, res) => {
    const { id, name, score } = req.body || {};

    if (!name || score === undefined) {
      return res.status(400).json({ error: 'invalid payload' });
    }

    if (id !== undefined) {
      const exists = items.some(current => current.id === Number(id));
      if (exists) {
        return res.status(409).json({ error: 'conflict' });
      }
    }

    const newItemId = id !== undefined ? Number(id) : items.length + 1;
    const item = { id: newItemId, name, score };
    items.push(item);
    return res.status(201).json(item);
  });

  app.patch('/items/:id', (req, res) => {
    const idParam = Number(req.params.id);
    const item = items.find(current => current.id === idParam);

    if (!item) {
      return res.status(404).json({ error: 'not found' });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'invalid payload' });
    }

    Object.assign(item, req.body);
    return res.status(200).json(item);
  });

  return app;
}