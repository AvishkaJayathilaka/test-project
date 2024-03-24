import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    brand: "",
    contact: "+94 ",
    year: 2024,
    model: "",
    old_price: "",
    description: "",
  });

  const AddProduct = async () => {
    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        dataObj = data;
      });

    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Part title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={(e) => {
            changeHandler(e);
          }}
          placeholder="Type here"
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Brand Name</p>

          <select
            className="brandselection"
            name="brand"
            value={productDetails.brand}
            onChange={(e) => {
              changeHandler(e);
            }}
            placeholder="Type here"
          >
            <option value="Toyota">Toyota</option>
            <option value="Nissan">Nissan</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Honda">Honda</option>
            <option value="Suzuki">Suzuki</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <p>Model Name</p>

          <input
            type="text"
            name="model"
            value={productDetails.model}
            onChange={(e) => {
              changeHandler(e);
            }}
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Year</p>

          <select
            className="brandselection"
            name="year"
            value={productDetails.year}
            onChange={(e) => {
              changeHandler(e);
            }}
            placeholder="Type here"
          >
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Part category</p>
        <select
          value={productDetails.category}
          name="category"
          className=" add-product-part-selector"
          onChange={changeHandler}
        >
          <option style={{ fontWeight: "bold", fontSize: "18px" }}>
            Internal Parts
          </option>
          <option value="Clutch">1. Clutch</option>
          <option value="Console">2. Console</option>
          <option value="Dashboard">3. Dashboard</option>
          <option value="Gear Stick">4. Gear Stick</option>
          <option value="Steering Wheel">5. Steering Wheel</option>
          <option style={{ fontWeight: "bold", fontSize: "18px" }}>
            External Parts
          </option>
          <option value="Air Intake">1. Air Intake</option>
          <option value="Fog Light">2. Fog Light</option>
          <option value="Headlight">3. Headlight</option>
          <option value="Shocks">4. Shocks</option>
          <option value="Silencer">5. Silencer</option>
          <option value="Tail Light">6. Tail Light</option>
          <option value="Wheel">7. Wheel</option>
          <option style={{ fontWeight: "bold", fontSize: "18px" }}>
            Hardware
          </option>
          <option value="Bearing">1. Bearing</option>
          <option value="Bevel Gear">2. Bevel Gear</option>
          <option value="Filter">3. Filter</option>
          <option value="Fule Tank">4. Fule Tank</option>
          <option value="Helical Gear">5. Helical Gear</option>
          <option value="Piston">6. Piston</option>
          <option value="Rack Pinion">7. Rack Pinion</option>
          <option value="Spark Plug">8. Spark Plug</option>
          <option value="Spur Gear">9. Spur Gear</option>
          <option value="Valve">10. Valve</option>
        </select>
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={(e) => {
              changeHandler(e);
            }}
            placeholder="Type here"
          />
        </div>

        <div className="addproduct-itemfield">
          <p>Contact</p>
          <input
            type="text"
            name="contact"
            value={productDetails.contact}
            onChange={(e) => {
              changeHandler(e);
            }}
            placeholder="Type here"
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Part Image</p>
        <label for="file-input">
          <img
            className="addproduct-thumbnail-img"
            src={!image ? upload_area : URL.createObjectURL(image)}
            alt=""
          />
        </label>
        <input
          onChange={(e) => {
            imageHandler(e);
          }}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea
          value={productDetails.description}
          name="description"
          cols="50"
          rows="20"
          onChange={(e) => {
            changeHandler(e);
          }}
        ></textarea>
      </div>
      <button
        className="addproduct-btn"
        onClick={() => {
          AddProduct();
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
