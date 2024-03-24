// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import AddProduct from './Components/AddProduct/AddProduct';
import ListProduct from './Components/ListProduct/ListProduct';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <SidebarConditional />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/Admin/*" element={<AdminRoutes />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/AddProduct" element={<AddProduct />} />
      <Route path="/ListProduct" element={<ListProduct />} />
    </Routes>
  );
}

function SidebarConditional() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null; // Render nothing if on login screen
  }
  return <Sidebar />;
}

export default App;
