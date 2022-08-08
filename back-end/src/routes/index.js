const loginRouter = require('./login.route');
const registerRouter = require('./register.route');
const productsRouter = require('./products.route');

const routes = (app) => {
  app.use('/login', loginRouter);
  app.use('/register', registerRouter);
  app.use('/products', productsRouter);
};

module.exports = routes;
