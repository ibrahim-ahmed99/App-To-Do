import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

const AddUser = ({ addNewUserHandler , closeModel }) => {
  // const [input, setInput] = useState({
  //   name: "",
  //   age: "",
  //   address: "",
  //   phone: "",
  // });

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");


  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addNewUserHandler({
        id: Math.round(Math.round *100),
        name,
        age,
        address,
        phone,
        type,
    });
    setName('');
    setAge('');
    setPhone('');
    setAddress('');
    setType('');
    closeModel();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control">
        <label>Name</label>
        <input
          id="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        ></input>
      </div>
      <div className="control">
        <label>Age</label>
        <input
          id="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
        ></input>
      </div>
      <div className="control">
        <label>Address</label>
        <input
          id="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        ></input>
      </div>
      <div className="control">
        <label>Phone</label>
        <input
          id="number"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        ></input>
      </div>
      <div className="control">
        <label>type</label>
        <input
          id="type"
          placeholder="Enter type"
          value={type}
          onChange={(e)=>setType(e.target.value)}
        ></input>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="save">Save</button>
      </div>
    </form>
  );
};
export default AddUser;
