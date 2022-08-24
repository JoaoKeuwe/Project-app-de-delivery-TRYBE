import React, { useEffect, useContext } from 'react';
import NavBar from '../components/navBar';
import Forms from '../components/formsCheckout';

import MyContext from '../context/Context';

function Checkout() {
  const { cart, setCart } = useContext(MyContext);
  // const totalPrice = 10;
  useEffect(() => {
    // SUBSTITUIR ESSA PARTE PELO LOCALSTORAGE QUE FOI CRIADO NA PAGINA DE PRODUTOS
    // TROCAR O SETITEM POR GETITEM
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (cartProducts) {
      setCart(cartProducts);
    }
  }, []);

  // IMPLEMENTAR A LÓGICA DE REMOVER O PRODUTO
  const handleRemoveButton = ({ target }) => {
    setCart((prevState) => prevState
      .filter((item) => item.name !== cart[target.id].name));
  };

  // LÓGICA DE CALCULAR O VALOR TOTAL DA COMPRA IMPLEMENTADA
  // FAZER AJUSTE DEPENDENDO DO RETORNO DO LOCALSTORAGE
  const totalPrice = cart.reduce((prev, curr) => prev + curr.totalPrice, 0);
  // console.log(totalPrice);
  return (

    <section>
      <NavBar />
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidadade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((product, index) => (
              <tr key={ product.id } id={ product.id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {product.qtd}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {product.price.replace('.', ',')}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { Math.abs(product.totalPrice).toFixed(2).toString().replace('.', ',')}
                </td>
                <td>
                  <button
                    type="submit"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ handleRemoveButton }
                    id={ index }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h3
        data-testid="customer_checkout__element-order-total-price"
      >
        {
          `Total: ${Math.abs(totalPrice).toFixed(2).toString().replace('.', ',')} R$`
        }

      </h3>
      <Forms total={ totalPrice } cart={ cart } />
    </section>
  );
}

export default Checkout;
