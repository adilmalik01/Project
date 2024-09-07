import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AboutUs from './components/about';
import Navbar from './components/Navbar';
import Home from './pages/home/home';
import Service from './pages/service/service';
import OrderNow from './pages/orderNow/orderNow';
import Contact from "./pages/contact/contact"



function App() {








  return (
    <div className="App">
      <Navbar />

      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-now" element={<OrderNow />} />
      </Routes>
      {/* </Router> */}

    </div>
  );
}

export default App;
