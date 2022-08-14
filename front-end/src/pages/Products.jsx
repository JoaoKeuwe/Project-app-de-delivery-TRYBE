import React, { useEffect, useContext } from 'react';
import Card from '../components/card';
import { requestProducts } from '../utils/requests';
import NavBar from '../components/navBar';
import MyContext from '../context/Context';

function Products() {
  const { products, setProducts } = useContext(MyContext);

  const fetchProducts = async () => {
    const productsData = await requestProducts('/products');
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      {products && products.map((product, index) => (
        <Card
          key={ product.name }
          id={ index + 1 }
          name={ product.name }
          image={ product.urlImage }
          price={ product.price }
          quantity={ product.quantity ? product.quantity : 0 }
        />
      ))}

    </div>
  );
}

export default Products;
