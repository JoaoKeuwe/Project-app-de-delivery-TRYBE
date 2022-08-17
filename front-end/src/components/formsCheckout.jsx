import React, { } from 'react';
import { useNavigate } from 'react-router-dom';

function Forms() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/customer/orders/1');
  };
  return (
    <fieldset>
      <form action="">
        <label htmlFor="vendedor">
          P.Vendedora Responsável
          <select name="vendedor" id="vendedor">
            <option>Victor</option>
            <option>João</option>
            <option>Itaji</option>
          </select>
        </label>
        <label htmlFor="endereço">
          Endereço
          <input type="text" />
        </label>
        <label htmlFor="endereço">
          Número
          <input type="text" />
        </label>
        <button type="submit" onClick={ handleSubmit }>Finalizar pedido</button>
      </form>
    </fieldset>
  );
}
export default Forms;
