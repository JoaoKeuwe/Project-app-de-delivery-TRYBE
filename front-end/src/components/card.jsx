import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/Context';

function Card({ product: { name, price, id, urlImage } }) {
  const { cart, setCart } = useContext(MyContext);
  const [qty, setQuantity] = useState(0);
  const [product, setProduct] = useState(0);

  useEffect(() => {
    const cartProd = cart.find((item) => item.id === id);
    setProduct(cartProd);
    if (cartProd) {
      setQuantity(cartProd.qtd);
    }
  }, [cart]);

  console.log(cart);
  const handleAdd = () => {
    if (!product) {
      setCart((prevState) => [...prevState, {
        name,
        price,
        id,
        qtd: 1,
        totalPrice: Number(price),
      }]);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qtd: product.qtd + 1,
            totalPrice: item.totalPrice + Number(price),
          };
        }
        return item;
      });
      setCart(newCart);
    }
    setQuantity((prevState) => prevState + 1);
    // console.log(cart);
  };

  const handleRemove = () => {
    if (product && product.qtd === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qtd: product.qtd - 1,
            totalPrice: item.totalPrice - Number(price),
          };
        }
        return item;
      });
      setCart(newCart);
    }
    if (qty > 0) setQuantity((prevState) => prevState - 1);
    // console.log(cart);
  };

  const handleQuantity = ({ target: { value } }) => {
    if (Number(value) >= 0) setQuantity(Number(value));
    if (!product && Number(value) !== 0) {
      setCart((prevState) => [...prevState, {
        name,
        price,
        id,
        qtd: Number(value),
        totalPrice: Number(value) * Number(price),
      }]);
    }
  };

  return (
    <div>
      <h1
        data-testid={ `customer_products__element-card-price-${id}` }

      >
        {price.replace('.', ',')}

      </h1>

      <img
        src={ urlImage }
        alt="imagem"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />

      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}

      </p>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ handleRemove }
      >
        -

      </button>
      <input
        type="text"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ handleQuantity }
        value={ qty }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ handleAdd }
      >
        +

      </button>
    </div>
  );
}
export default Card;

Card.propTypes = {
  product: PropTypes.obj,
}.isRequired;
