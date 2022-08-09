import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    price,
    image,
    name,
    id,
    // quantity,
  } = props;
  return (
    <div>
      <h1
        data-testid={ `customer_products__element-card-price-${id}` }

      >
        {price}

      </h1>

      <img
        src={ image }
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
      >
        -

      </button>
      <i
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        10

      </i>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +

      </button>
    </div>
  );
}
export default Card;

Card.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.number.isRequired,
};
