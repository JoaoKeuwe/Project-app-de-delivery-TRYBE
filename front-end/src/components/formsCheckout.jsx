import React, { } from 'react';
import { useNavigate } from 'react-router-dom';
// import MyContext from '../context/Context';

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
          <select
            name="vendedor"
            id="vendedor"
            data-testid="customer_checkout__select-seller"
          >
            <option>Victor</option>
            <option>João</option>
            <option>Itaji</option>
          </select>
        </label>
        <label htmlFor="endereço">
          Endereço
          <input type="text" data-testid="customer_checkout__input-address" />
        </label>
        <label htmlFor="endereço">
          Número
          <input type="text" data-testid="customer_checkout__input-addressNumber" />
        </label>
        <button
          type="submit"
          onClick={ handleSubmit }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar pedido
        </button>
      </form>
    </fieldset>
  );
}
export default Forms;
