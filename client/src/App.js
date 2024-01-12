import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import CreateOrder from './components/CreateOrder';
import UserOrder from './components/UserOrder';
import Payment from './components/Payment';
import ProtectedRoutes from './components/ProtectedRoutes';
import ProtectedRoutesBook from './components/ProtectedRoutesBook';
import ProtectedRoutesOrder from './components/ProtectedRoutesOrder';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
           <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-order" element={<ProtectedRoutes><ProtectedRoutesBook><CreateOrder /></ProtectedRoutesBook></ProtectedRoutes>} />
          <Route path="/orders" element={<ProtectedRoutes><UserOrder /></ProtectedRoutes>} />
          <Route path='/payment' element={<ProtectedRoutes><ProtectedRoutesOrder><Payment/></ProtectedRoutesOrder></ProtectedRoutes>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
