import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setDisable] = useState(true);
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
          data-testid="1"
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
          data-testid="2"
          type="password"
          placeholder="Senha"
          name="password"
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button type="submit" data-testid="3" disabled={ isDisable }> LOGIN </button>
      <button type="submit" data-testid="4"> REGISTER </button>
      <h6 data-testid="5">sla oq é isso</h6>
    </section>
  );
}

export default Login;
