const express = require('express');
const cors = require('cors');

const routes = require('../routes/index');

const app = express();

app.use(cors());

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
routes(app);

module.exports = app;
