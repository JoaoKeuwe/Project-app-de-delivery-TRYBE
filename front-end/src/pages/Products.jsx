import React, { useEffect } from 'react';
import Card from '../components/card';
import { requestProducts } from '../utils/requests';

function Products() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isDisable, setDisable] = useState(true);
//   const [loginFailed, setLoginFailed] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    requestProducts('/products').then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products && products.map((product, index) => (
        <Card
          key={ index }
          name={ product.name }
          image={ product.image }
          price={ product.price }
        />
      ))}

    </div>
  );
}

export default Products;
