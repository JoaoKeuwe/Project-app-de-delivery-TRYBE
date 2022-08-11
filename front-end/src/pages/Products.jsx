import React, { useEffect, useState, useContext } from 'react';
import Card from '../components/card';
import { requestProducts } from '../utils/requests';
import NavBar from '../components/navBar';
import MyContext from '../context/Context';

function Products() {
  const [products, setProducts] = useState();
  const { user } = useContext(MyContext);
  console.log(user);
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
          id={ index + 1 }
          name={ product.name }
          image={ product.image }
          price={ product.price }
        />
      ))}

    </div>
  );
}

export default Products;
