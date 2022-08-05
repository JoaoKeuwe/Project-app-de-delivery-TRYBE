const loginRouter = require('./login.route');

const routes = (app) => {
  app.use('/login', loginRouter);
};

module.exports = routes;
