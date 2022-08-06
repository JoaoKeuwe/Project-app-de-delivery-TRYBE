import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
// import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />

        <Route path="/" element={ <Navigate to="/login" /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
