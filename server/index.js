const cors = require('cors');
const express = require('express');
const path = require('path');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const payments = require('./routes/payments');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/payments', payments);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  );
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App listening on port 5000'));
