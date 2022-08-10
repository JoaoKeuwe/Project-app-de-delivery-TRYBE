import React from 'react';
// import MyContext from '../context/Context';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
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
          data-testid="customer_products__element-navbar-user-full-user"
        >
          { user.name }
        </h3>
      ) : (
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Nome do Usuário
        </h3>
      )}
      {/* <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Nome do Usuário
      </h3> */}
      <button
        type="submit"
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </nav>
  );
}
export default NavBar;
