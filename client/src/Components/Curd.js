import React, { useState } from "react";
import Axios from "axios";

import "../Components/Curd.css";
import Entering from "../Components/Entering";

function Curd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const displayInfo = () => {
    console.log(name + age + country + position + wage);
  };

  const addEmployee = () => {
    // second one is body object
    //所以我很好奇这里的body是body dom 还是说data的body
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      //the whole function will hold until the then post finished
      console.log("success!");
    });
  };

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employee").then((response) => {
      //the whole function will hold until the then post finished
      setEmployeeList(response.data);
    });
  };

  const updateEmployee = (id) => {
    Axios.put("http://localhost:3001/update", {
      wage: newWage,
      id: id,
    }).then((response) => {
      setEmployeeList(
        employeeList.map((val) => {
          return val.id === id
            ? {
                id: val.id,
                name: val.name,
                country: val.country,
                age: val.age,
                position: val.position,
                wage: newWage,
              }
            : val;
        })
      );
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        }) // 妙啊，返回不等于这个id的所有id，那么看来这个val是包含了所有的内容了。
      );
    });
  };
  //个人建议 把onchange 函数写在上面。这样的代码可读性不高
  return (
    <div className="App">
      <div className="information">
        <h1>Please Do what you like!</h1>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        ></input>
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        ></input>
        <label>Wage(year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        ></input>
        <button onClick={addEmployee}>Add Employee</button>

        <div className="employees">
          <button onClick={getEmployee}>show Employee</button>

          {employeeList.map((val, key) => {
            return (
              <div className="employee">
                <div>
                  <h3>Name: {val.name}</h3>
                  <h3>Age: {val.age}</h3>
                  <h3>Country: {val.country}</h3>
                  <h3>Position: {val.position}</h3>
                  <h3>Wage: {val.wage}</h3>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="2000..."
                    onChange={(event) => {
                      setNewWage(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateEmployee(val.id);
                    }}
                  >
                    {" "}
                    Update
                  </button>
                  <button
                    onClick={() => {
                      deleteEmployee(val.id);
                    }}
                  >
                    delete
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

export default Curd;
