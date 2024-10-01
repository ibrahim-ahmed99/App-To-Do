import React, { useState } from "react";
import styles from "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import controllr from "../Layout/Controllr";



const AddUser=()=>{
  const[input,setInput]=useState({
    name:'',
    age:'',
    address:'',
    phone:'',
  })
}
const inputHandler=(e)=>{
  const key =e.target.id;
  const value= e.target.value;
}
const Backdrop = ({ close }) => {
  return (
    <div className="backDrop" onClick={close}>
    
    </div>
  );
};

const Overlay = ({children,show}) => {
  return <div className="overlay">
    {children}
  </div>;
};
const Modal = ({children, show, closeModel }) => {
  return (
    show && (
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <Backdrop close={closeModel} />
            <Overlay show={show}> {children} </Overlay>
          </Fragment>,
          document.getElementById("modal")
        )}
      </Fragment>
    )
  );
};

export default Modal;
