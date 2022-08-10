import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import { requestProducts } from '../utils/requests';
import NavBar from '../components/navBar';

function Products() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isDisable, setDisable] = useState(true);
//   const [loginFailed, setLoginFailed] = useState(false);
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const productsData = await requestProducts('/products');
    setProducts(productsData);
    console.log(productsData);
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
          id={ index }
          name={ product.name }
          image={ product.image }
          price={ product.price }
        />
      ))}

    </div>
  );
}

export default Products;
