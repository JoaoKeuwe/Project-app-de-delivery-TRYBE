import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';
import { requestProducts } from '../utils/requests';
import NavBar from '../components/navBar';
import MyContext from '../context/Context';

function Products() {
  const { products, setProducts, cart } = useContext(MyContext);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const productsData = await requestProducts('/products');
    setProducts(productsData);
  };

  const handleCheckout = () => {
    navigate('/customer/checkout');
  };

  const handleTotal = () => {
    const subtotal = cart.reduce((acc, curr) => (acc + curr.totalPrice), 0).toFixed(2);
    const comma = subtotal.toString().replace('.', ',');
    return comma;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      {products && products.map((product) => (
        <Card key={ product.id } product={ product } />
      ))}
      <button
        type="button"
        onClick={ handleCheckout }
        data-testid="customer_products__button-cart"
        disabled={ cart.length === 0 }
      >
        Ver carrinho
        { cart.length > 0 && ': R$ ' }
        <span data-testid="customer_products__checkout-bottom-value">
          { cart.length > 0 && handleTotal() }
        </span>
      </button>

    </div>
  );
}

export default Products;
