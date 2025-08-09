import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'maestro-api', time: new Date().toISOString() });
});

// Exemple d'endpoint (à étendre)
app.get('/api/teachers', (req, res) => {
  res.json([{ id: 't1', name: 'Mme Dupont' }, { id: 't2', name: 'M. Martin' }]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on :${PORT}`));
