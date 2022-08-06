import React, { useState, useEffect } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setDisable] = useState(true);
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

          <button
            type="button"
            data-testid="common_register__button-register"
            disable={ isDisable }
          >
            Cadastrar
          </button>
          <h6
            data-testid="common_register__element-invalid_register"
          >
            a mensagem de erro vai aqui

          </h6>
        </form>
      </div>
    </div>
  );
}
export default Register;
