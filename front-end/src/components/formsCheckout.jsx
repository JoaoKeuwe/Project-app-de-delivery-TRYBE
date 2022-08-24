import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createSale } from '../utils/requests';
// import MyContext from '../context/Context';

function Forms(props) {
  const { total, cart } = props;
  const navigate = useNavigate();
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState('');
  const [sellerId, setSeller] = useState('');

  const user = JSON.parse(localStorage.getItem('user'));
  const handleSubmit = async () => {
    const data = {
      userId: user.id,
      sellerId: Number(sellerId),
      totalPrice: total,
      deliveryAddress: adress,
      deliveryNumber: number,
    };
    console.log(user.token);
    const sale = await createSale('/sales', data, user.token);

    cart.forEach((e) => {
      e.saleId = sale.id;
    });
    console.log(cart);

    await createSale('/sales/products', cart, user.token);

    console.log(sale);
    navigate(`/customer/orders/${sale.id}`);
  };
  return (
    <div>
      <div>
        <label htmlFor="vendedor">
          P.Vendedora Responsável
          <select
            name="vendedor"
            id="vendedor"
            data-testid="customer_checkout__select-seller"
            onClick={ (e) => setSeller(e.target.value) }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <label htmlFor="endereço">
          Endereço
          <input
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ (e) => setAdress(e.target.value) }
          />
        </label>
        <label htmlFor="endereço">
          Número
          <input
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ (e) => setNumber(e.target.value) }
          />
        </label>
        <button
          type="submit"
          onClick={ handleSubmit }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar pedido
        </button>
      </div>
    </div>
  );
}

Forms.propTypes = {
  total: PropTypes.string.isRequired,
  cart: PropTypesshape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    qtd: PropTypes.number,
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default Forms;
