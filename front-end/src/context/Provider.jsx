import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  const context = useMemo(() => ({
    name,
    setName,
    user,
    setUser,
    products,
    setProducts,
    cart,
    setCart,
  }), [name, user, products, cart]);
  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
