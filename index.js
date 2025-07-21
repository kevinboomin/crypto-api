const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let portfolio = [];

app.get('/', (req, res) => res.send('Crypto Coach API is running!'));

app.get('/portfolio', (req, res) => res.json(portfolio));

app.post('/portfolio', (req, res) => {
  const { asset, amount, buyPrice, targetROI } = req.body;
  const existing = portfolio.find(p => p.asset === asset);
  if (existing) Object.assign(existing, { amount, buyPrice, targetROI });
  else portfolio.push({ asset, amount, buyPrice, targetROI });
  res.json({ message: 'Portfolio updated', portfolio });
});

module.exports = app;