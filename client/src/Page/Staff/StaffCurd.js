import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "../Staff/StaffCurd.css";

function StaffCurd() {
  localStorage.setItem("lastname", "Smith");

  const [productID, setProductID] = useState(0);
  const [productName, setProductName] = useState("");
  const [prices, setPrices] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [descript, setDescript] = useState("");
  const [organic, setOrganic] = useState("");
  const [nutrients, setNutrients] = useState("");
  const [supplierID, setSupplierID] = useState(0);
  const [supplierName, setSupplierName] = useState("");
  const [address, setAddress] = useState("");
  const [originName, setOriginNameD] = useState(0);
  const [phone, setPhone] = useState("");
  const [continent, setContinent] = useState("");
  const [weather, setWeather] = useState("");

  //  Value need to be update!
  //const [quantity, setWage] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

  //The value need to be showed!
  const [productList, setProductList] = useState([]);

  const addProduct = () => {
    // second one is body object
    //所以我很好奇这里的body是body dom 还是说data的body
    Axios.post("http://localhost:3001/staff/product/insertProduct", {
      productID: productID,
      productName: productName,
      prices: prices,
      quantity: quantity,
      descript: descript,
      organic: organic,
      nutrients: nutrients,
      supplierID: supplierID,
      //quantity: quantity,
    }).then((response) => {
      if (response.data.message === "Wrong") {
        alert("Add product failed! Please Check your productID！");
      } else {
        alert("Add product successful!");
      }
    });
  };

  const getProduct = () => {
    Axios.get("http://localhost:3001/staff/product/checkProduct").then(
      (response) => {
        //the whole function will hold until the then post finished
        setProductList(response.data); // The result it read result so it can give
        console.log(productList);
      }
    );
  };

  const updateProduct = (productID) => {
    Axios.put("http://localhost:3001/staff/product/updateProduct", {
      quantity: newQuantity,
      productID: productID,
    }).then((response) => {
      setProductList(
        productList.map((val) => {
          return val.productID === productID
            ? {
                productID: productID,
                productName: val.productName,
                prices: val.prices,
                organic: val.organic,
                descript: val.descript,
                nutrients: val.nutrients,
                supplierID: val.supplierID,
                quantity: newQuantity,
                supplierName: val.supplierName,
                address: val.address,
                originName: val.originName,
                phone: val.phone,
                continent: val.continent,
                weather: val.weather,
              }
            : val;
        })
      );
    });
  };

  const deleteProduct = (productID) => {
    // `http://localhost:3001/staff/product/delete/${productID}`
    Axios.delete(
      `http://localhost:3001/staff/product/deleteProduct/${productID}`
    ).then((response) => {
      setProductList(
        productList.filter((val) => {
          return val.productID !== productID;
        }) // 妙啊，返回不等于这个id的所有id，那么看来这个val是包含了所有的内容了。
      );
    });
  };

  const removeSession = () => {
    localStorage.removeItem("ID");
    localStorage.removeItem("staffID");
  };
  //个人建议 把onchange 函数写在上面。这样的代码可读性不高
  return (
    <div className="Page">
      <ul>
        <li
          className="active
        "
        >
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/Staffs">Staffs </Link>
        </li>
        <li>
          <Link to="/StaffCurd">StaffCurd </Link>
        </li>

        <li>
          <Link to="/" onChange={removeSession}>
            Logout
          </Link>
        </li>
      </ul>
      <div className="Content">
        <h1>Welcome Dear Staffs!</h1>
        <label>productID:</label>
        <input
          type="number"
          onChange={(event) => {
            setProductID(event.target.value);
          }}
        ></input>
        <label>productName:</label>
        <input
          type="text"
          onChange={(event) => {
            setProductName(event.target.value);
          }}
        ></input>
        <label>prices:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrices(event.target.value);
          }}
        ></input>
        <label>quantity:</label>
        <input
          type="number"
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        ></input>
        <label>descript:</label>
        <input
          type="text"
          onChange={(event) => {
            setDescript(event.target.value);
          }}
        ></input>
        <label>organic:</label>
        <select
          onChange={(event) => {
            setOrganic(event.target.value);
          }}
        >
          <option value="0">Non-Organic</option>
          <option value="1">Organic</option>
        </select>
        <label>nutrients:</label>
        <input
          type="text"
          onChange={(event) => {
            setNutrients(event.target.value);
          }}
        ></input>
        <label>supplierID:</label>
        <select
          onChange={(event) => {
            setSupplierID(event.target.value);
          }}
        >
          <option value="1">Peter Farm</option>
          <option value="2">Robin Ranch</option>
          <option value="3">Jason Prairie</option>
          <option value="4">North Aquarium</option>
          <option value="5">West Center</option>
        </select>
        <button onClick={addProduct}>😀 Add Product</button>
        -------------------------------------------------------------------------
        <div className="bigShowProduct">
          <button onClick={getProduct}>🤲show Product</button>

          {productList.map((val, key) => {
            return (
              <div className="smallShowProduct">
                <div>
                  <table>
                    <tr>
                      <td>productID</td>
                      <td>{val.productID}</td>
                    </tr>
                    <tr>
                      <td>productName</td>
                      <td>{val.productName}</td>
                    </tr>
                    <tr>
                      <td>prices</td>
                      <td>{val.prices}</td>
                    </tr>
                    <tr>
                      <td>quantity</td>
                      <td>{val.quantity}</td>
                    </tr>
                    <tr>
                      <td>descript</td>
                      <td>{val.descript}</td>
                    </tr>
                    <tr>
                      <td>organic</td>
                      <td>{val.organic}</td>
                    </tr>
                    <tr>
                      <td>nutrients</td>
                      <td>{val.nutrients}</td>
                    </tr>
                    <tr>
                      <td>supplierID</td>
                      <td>{val.supplierID}</td>
                    </tr>
                    <tr>
                      <td>supplierName</td>
                      <td>{val.supplierName}</td>
                    </tr>
                    <tr>
                      <td>address</td>
                      <td>{val.address}</td>
                    </tr>
                    <tr>
                      <td>originName</td>
                      <td>{val.originName}</td>
                    </tr>
                    <tr>
                      <td>phone</td>
                      <td>{val.phone}</td>
                    </tr>
                    <tr>
                      <td>continent</td>
                      <td>{val.continent}</td>
                    </tr>
                    <tr>
                      <td>weather</td>
                      <td>{val.weather}</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="new quantity"
                    onChange={(event) => {
                      setNewQuantity(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateProduct(val.productID);
                    }}
                  >
                    😎Update
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(val.productID);
                    }}
                  >
                    👆delete👆
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StaffCurd;
