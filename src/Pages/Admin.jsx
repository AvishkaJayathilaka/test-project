// Admin.js
import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../Components/AddProduct/AddProduct';
import ListProduct from '../Components/ListProduct/ListProduct';

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/Admin/AddProduct" element={<AddProduct />} />
        <Route path="/Admin/ListProduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
