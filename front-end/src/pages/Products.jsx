import React, { useEffect } from 'react';
import { requestProducts } from '../utils/requests';

function Products() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isDisable, setDisable] = useState(true);
//   const [loginFailed, setLoginFailed] = useState(false);

  useEffect(() => {
    requestProducts('/products').then((data) => console.log(data));
  }, []);

  return (
    <div>
      Ola
    </div>
  );
}

export default Products;
