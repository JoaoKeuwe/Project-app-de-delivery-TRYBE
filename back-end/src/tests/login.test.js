const chai = require('chai');

const chaiHttp = require('chai-http');

const app = require('../api/app');
chai.use(chaiHttp);

const { expect } = chai;

describe('login', () => {
  it('login feito com dados corretos', async () => {
    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        email: 'zebirita@email.com',
        password: '$#zebirita#$',
      });

    expect(chaiHttpResponse).to.have.status(200);
    expect(typeof chaiHttpResponse.body.token).to.be.equal('string');
  });

  it('login feito com dados errados', async () => {
    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        email: 'invalid@false.com',
        password: 'senha_invalida',
      });

    expect(chaiHttpResponse).to.have.status(404);
  });

  it('login feito com email inválido', async () => {
    const chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        "email": "invalid@false",
        "password": "stringfasy"
      });

    expect(chaiHttpResponse).to.have.status(400);
  });
});
