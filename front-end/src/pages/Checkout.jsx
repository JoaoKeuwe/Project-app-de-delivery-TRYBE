import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';

function Checkout() {
  const productsMock = [
    {
      id: 1,
      item: 1,
      descrição: 'Brahma 600ml',
      quantidade: 2,
      valorUnitário: '7,50',
      subTotal: 15.00,
    },
    {
      id: 2,
      item: 2,
      descrição: 'Skol 269ml',
      quantidade: 2,
      valorUnitário: '2,19',
      subTotal: 4.38,
    },
    {
      id: 3,
      item: 3,
      descrição: 'Skol Beats Senses 313ml',
      quantidade: 2,
      valorUnitário: '4,49',
      subTotal: 8.98,
    },
    // {
    //   item: 4,
    //   descrição: 'Becks 330ml',
    //   quantidade: 2,
    //   valorUnitário: '4,99',
    //   subTotal: 9.98,
    // },
    // {
    //   item: 5,
    //   descrição: 'Becks 600ml',
    //   quantidade: 3,
    //   valorUnitário: '8,89',
    //   subTotal: 26.67,
    // },
    // {
    //   item: 6,
    //   descrição: 'Skol Beats Senses 269ml',
    //   quantidade: 1,
    //   valorUnitário: '3,57',
    //   subTotal: 3.57,
    // },
  ];
  const [fakeCar, setFakeCar] = useState(productsMock);
  const [filteredCar, setFilteredCar] = useState();
  console.log(setFakeCar);
  useEffect(() => {
    // SUBSTITUIR ESSA PARTE PELO LOCALSTORAGE QUE FOI CRIADO NA PAGINA DE PRODUTOS
    // TROCAR O SETITEM POR GETITEM
    localStorage.setItem('carrinhofake', JSON.stringify(fakeCar));
    console.log(fakeCar);
  }, []);

  // IMPLEMENTAR A LÓGICA DE REMOVER O PRODUTO
  const handleRemoveButton = ({ target }) => {
    const filteredProducts = fakeCar.filter((item) => item.id !== target.id);
    setFilteredCar(filteredProducts);
    console.log(filteredCar);
  };

  // LÓGICA DE CALCULAR O VALOR TOTAL DA COMPRA IMPLEMENTADA
  // FAZER AJUSTE DEPENDENDO DO RETORNO DO LOCALSTORAGE
  const totalPrice = fakeCar.reduce((prev, curr) => prev + curr.subTotal, 0);
  console.log(totalPrice);
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
            fakeCar.map((product, index) => (
              <tr key={ index } id={ index + 1 }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {product.item}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {product.descrição}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {product.quantidade}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {product.valorUnitário}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {product.subTotal}
                </td>
                <td>
                  <button
                    type="submit"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ handleRemoveButton }
                    id={ index + 1 }
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
          `Total: ${totalPrice} R$`
        }

      </h3>
    </section>
  );
}

export default Checkout;
