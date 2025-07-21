let portfolio = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(portfolio);
  }

  if (req.method === 'POST') {
    const { asset, amount, buyPrice, targetROI } = req.body;
    const existing = portfolio.find(p => p.asset === asset);
    if (existing) {
      existing.amount = amount;
      existing.buyPrice = buyPrice;
      existing.targetROI = targetROI;
    } else {
      portfolio.push({ asset, amount, buyPrice, targetROI });
    }
    return res.status(200).json({ message: 'Portfolio updated', portfolio });
  }

  res.status(405).json({ error: 'Method not allowed' });
}

export default function handler(req, res) {
  res.status(200).send("Crypto Coach API is running!");
}
