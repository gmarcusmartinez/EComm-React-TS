const { Router } = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = new Router();

router.post('/', (req, res) => {
  const { token, amount } = req.body;
  const body = {
    amount,
    source: token.id,
    currency: usd,
  };
  stripe.charges.create(body, (err, res) => {
    if (err) res.status(500).send({ error: err });
    else res.status(200).send({ success: res });
  });
});

module.exports = router;
