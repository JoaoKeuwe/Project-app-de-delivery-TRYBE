import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
