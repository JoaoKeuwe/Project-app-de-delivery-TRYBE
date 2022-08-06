import React, { useState, useEffect } from 'react';
import { requestLogin } from '../utils/requests';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidProperties, setInvalidProperties] = useState(false);
  const [isDisable, setDisable] = useState(false);
  const PASSWORD_MIN_LENGTH = 6;
  const NAME_MIN_LENGTH = 12;
  const emailRegex = /\S+@\S+\.\S+/;
  const emailValidate = emailRegex.test(email);
  const validateName = name.length >= NAME_MIN_LENGTH;
  const passwordValidate = password.length >= PASSWORD_MIN_LENGTH;

  const disabled = () => {
    if (emailValidate && passwordValidate && validateName) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const register = await requestLogin('/register', { name, email, password });

      localStorage.setItem('user', JSON.stringify(register));
      setInvalidProperties(false);

      window.location.href = '/customer/products';
    } catch (error) {
      console.log(error);
      setInvalidProperties(true);
    }
  };

  useEffect(() => {
    disabled();
  }, [email, password]);

  return (

    <div>
      <header>
        <h2>Cadastro</h2>
      </header>
      <div>
        <form>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              data-testid="common_register__input-name"
              className="input-name"
              placeholder="Seu nome"
              onChange={ (e) => setName(e.target.value) }
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="text"
              data-testid="common_register__input-email"
              className="input-email"
              placeholder="Digite seu email"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>

          <label htmlFor="senha">
            Senha
            <input
              type="password"
              data-testid="common_register__input-password"
              className="input-password"
              placeholder="Digite sua senha"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>

          { invalidProperties ? (
            <p data-testid="common_register__element-invalid_register">
              revise dados e tente novamente
            </p>
          ) : null }

          <button
            type="button"
            data-testid="common_register__button-register"
            disabled={ isDisable }
            onClick={ (e) => handleClick(e) }
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
