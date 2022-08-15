import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestLogin, setToken } from '../utils/requests';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setDisable] = useState(true);
  const [loginFailed, setLoginFailed] = useState(false);
  const PASSWORD_MIN_LENGTH = 6;
  const emailRegex = /\S+@\S+\.\S+/;
  const emailValidate = emailRegex.test(email);
  const passwordValidate = password.length >= PASSWORD_MIN_LENGTH;

  const disabled = () => {
    if (emailValidate && passwordValidate) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const { user, token } = await requestLogin('/login', { email, password });
      setToken(token);
      user.token = token;

      localStorage.setItem('user', JSON.stringify(user));

      setLoginFailed(false);

      window.location.href = '/customer/products';
    } catch (error) {
      setLoginFailed(true);
    }
  };

  useEffect(() => {
    disabled();
  }, [email, password]);

  return (
    <section>
      <h1>`NOME DO APP`</h1>
      <label htmlFor="login">
        Login
        <input
          id="login"
          data-testid="common_login__input-email"
          type="text"
          placeholder="Email..."
          name="Name"
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          id="password"
          data-testid="common_login__input-password"
          type="password"
          placeholder="Senha"
          name="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      { loginFailed ? (
        <p data-testid="common_login__element-invalid-email">
          email ou senha incorretos, tente novamente
        </p>
      ) : null }
      <button
        type="submit"
        data-testid="common_login__button-login"
        disabled={ isDisable }
        onClick={ (event) => handleClick(event) }
      >
        LOGIN
      </button>
      <Link to="/register">
        <button
          type="submit"
          data-testid="common_login__button-register"
        >
          REGISTER
        </button>
      </Link>
    </section>
  );
}

export default Login;
