import express from 'express';

export function createApp() {
  const app = express();
  app.use(express.json());

  const items = [
    { id: 1, name: 'alpha', score: 10 },
    { id: 2, name: 'beta', score: 20 }
  ];

  app.get('/health', (req, res) => {
    return res.status(200).json({ ok: true });
  });

  app.get('/items', (req, res) => {
    return res.json(items);
  });

  app.get('/items/:id', (req, res) => {
    const idParam = Number(req.params.id);
    if (isNaN(idParam)) {
      return res.status(422).json({ error: 'unprocessable entity' });
    }

    const item = items.find(current => current.id === idParam);
    if (!item) {
      return res.status(404).json({ error: 'not found' });
    }

    return res.json(item);
  });

  app.post('/items', (req, res) => {
    const { name, score } = req.body || {};

    if (!name || typeof score !== 'number') {
      return res.status(400).json({ error: 'invalid payload' });
    }

    const newItem = {
      id: items.length + 1,
      name,
      score
    };

    items.push(newItem);
    return res.status(201).json(newItem);
  });

  app.delete('/items/:id', (req, res) => {
    const idParam = Number(req.params.id);
    if (isNaN(idParam)) {
      return res.status(422).json({ error: 'unprocessable entity' });
    }

    const index = items.findIndex(current => current.id === idParam);
    if (index === -1) {
      return res.status(404).json({ error: 'not found' });
    }

    items.splice(index, 1);
    return res.status(204).send();
  });

  return app;
}