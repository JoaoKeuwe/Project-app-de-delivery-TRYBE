const loginRouter = require('./login.route');
const registerRouter = require('./register.route');

const routes = (app) => {
  app.use('/login', loginRouter);
  app.use('/register', registerRouter);
};

module.exports = routes;
