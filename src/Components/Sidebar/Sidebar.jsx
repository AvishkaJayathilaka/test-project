// Sidebar.js
import React from 'react';
import './Sidebar.css';
import add_product_icon from '../Assets/500px-Plus_symbol.svg.png';
import list_product_icon from '../Assets/product_management.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/Admin/AddProduct" style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/Admin/ListProduct" style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
