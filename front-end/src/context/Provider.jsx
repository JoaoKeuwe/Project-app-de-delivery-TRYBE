import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');

  const context = useMemo(() => ({
    name,
    setName,
    user,
    setUser,
  }), [name, setName, user, setUser]);
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
