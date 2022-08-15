import React, { useContext, useEffect } from 'react';
import MyContext from '../context/Context';

const handleClick = () => {
  localStorage.removeItem('user');

  window.location.href = '/login';
};

function NavBar() {
  const { user, setUser } = useContext(MyContext);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  return (
    <nav>
      <button
        type="submit"
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      <button
        type="submit"
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus pedidos
      </button>
      {user ? (
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { user.name }
        </h3>
      ) : (
        null
      )}
      <button
        type="submit"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ handleClick }
      >
        Sair
      </button>
    </nav>
  );
}
export default NavBar;
