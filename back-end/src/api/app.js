const express = require('express');
const cors = require('cors');

const routes = require('../routes/index');

const app = express();

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(express.json());
routes(app);

module.exports = app;
