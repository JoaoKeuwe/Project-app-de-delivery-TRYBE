import React from 'react';
// import MyContext from '../Context/context';
function NavBar() {
  // const { name } = useContext(MyContext);
  // console.log(name);
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
      {/* {name ? (
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </h3>
      ) : (
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Nome do Usuário
        </h3>
      )} */}
      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        Nome do Usuário
      </h3>
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
