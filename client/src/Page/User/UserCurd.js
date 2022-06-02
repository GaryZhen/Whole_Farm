import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import "../User/UserCurd.css";

function UserCurd() {
  localStorage.setItem("lastname", "Gary");
  console.log(localStorage.getItem("lastname"));

  // const [productID, setProductID] = useState(0);
  const [productName, setProductName] = useState("");
  // const [prices, setPrices] = useState(0);
  // const [quantity, setQuantity] = useState("");
  // const [descript, setDescript] = useState("");
  // const [organic, setOrganic] = useState("");
  // const [nutrients, setNutrients] = useState("");
  // const [supplierID, setSupplierID] = useState("");

  //  Value need to be update!

  //const [newQuantity, setNewQuantity] = useState(0);
  const [review, setReview] = useState("");

  //The value need to be showed!
  const [productList, setProductList] = useState([]);
  const [searchProductList, setSearchProductList] = useState([]);
  const [searchValid, setSearchValid] = useState([false]);

  //check all the information
  const getProduct = () => {
    Axios.get("http://localhost:3001/user/product/checkAll").then(
      (response) => {
        setProductList(response.data); // The result it read result so it can give
        console.log(productList);
      }
    );
  };

  //search all the infomation
  const searchProduct = () => {
    //console.log(`productName is ${productName}`);
    Axios.post("http://localhost:3001/user/product/searchProduct", {
      productName: productName,
    }).then((response) => {
      if (response.data.length > 0) {
        setSearchValid(true);
        setSearchProductList(response.data);
      } else {
        setSearchValid(false);
      }
    });
  };

  const insertReview = (productID) => {
    Axios.post("http://localhost:3001/user/product/insertReview", {
      review: review,
      userID: 1,
      productID: productID,
    }).then((response) => {
      console.log("successfully insert!");
      alert("review sucessfully given!");
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
          <Link to="/Register">Register </Link>
        </li>
        <li>
          <Link to="/Login">Login </Link>
        </li>
        <li>
          <Link to="/UserCurd">UserCurd </Link>
        </li>
        <li>
          <Link to="/Login" onChange={removeSession}>
            Logout
          </Link>
        </li>
      </ul>
      <div className="Content">
        <h1>Welcome Dear User</h1>
        <label>Item you want:</label>
        <input
          type="text"
          placeholder="Search the product Name"
          onChange={(event) => {
            setProductName(event.target.value);
          }}
        ></input>
        <button onClick={searchProduct}>🧐Search Product</button>
        {searchValid &&
          searchProductList.map((val, key) => {
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
                    placeholder="Please give your review!"
                    onChange={(event) => {
                      setReview(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      insertReview(val.productID);
                    }}
                  >
                    Review
                  </button>
                </div>
              </div>
            );
          })}
        {!searchValid && <h3>Please input exists productName</h3>}
        ----------------------------------------------------------------------
        <div className="bigShowProduct">
          <button onClick={getProduct}>🥗Show All the Product </button>

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
                    placeholder="Please give your review!"
                    onChange={(event) => {
                      setReview(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      insertReview(val.productID);
                    }}
                  >
                    😘 Review
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

export default UserCurd;
