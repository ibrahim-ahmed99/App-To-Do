import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Counter from "./components/counter";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/card/card";
import Modal from "./components/modal/Modal";
import AddUser from "./components/AddUser/AddUser";
import FilterInput from "./components/filter/FilterInput";
const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [Filtering, setFiltering] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [boys, setBoys] = useState([
    {
      id:1000,
      name: "ibrahim",
      age: 25,
      address: "fayesl street",
      phone: "0123456789",
    },
    {
      id:2000,
      name: "ahmed",
      age: 31,
      address: "haram street",
      phone: "01150542797",
    },
    {
      id:3000,
      name: "ali",
      age: 19,
      address: "hadyk el aharm",
      phone: "9876543210",
    },
  ]);
  const [girls, setGirls] = useState([
    {
      id:4000,
      name: "layla",
      age: 25,
      address: "fayesl street",
      phone: "0123456789",
    },
    {
      id:5000,
      name: "doaa",
      age: 31,
      address: "haram street",
      phone: "01150542797",
    },
    {
      id:6000,
      name: "menna",
      age: 19,
      address: "hadyk el aharm",
      phone: "9876543210",
    },
  ]);

  const deleteHandler = (e, clickedIdx) => {
    const deleteOberation = girls.filter((el, idx) => idx !== clickedIdx);
    setGirls(deleteOberation);
  };
  const toggleHandler = () => {
    setCardToggle(!cardToggle);
  };
  const filterNames = (name) => {
    setFiltering(name);
  };
  const addNewUserHandler = (data) => {
    data.type ==='boy' ? setBoys((prevState) => [...prevState, {...data}]) : setGirls((prevState) => [...prevState, {...data}]);
  };
  
  const nameHandler = () => {
    console.log(Filtering);
    if (Filtering.length !== 0) {
      return girls.filter((el) => el.name.includes(Filtering));
    }
    return girls;
  };
  return (
    <Fragment>
      <div className="mainContainer">
        <div className={cardToggle ? "div-show" : "div-hide"}>
          <button
            className={"btn-style"}
            style={{
              transform: cardToggle ? "translateY(40px)" : "translateY(0px)",
            }}
            onClick={toggleHandler}
          >
            {cardToggle ? "Hide boys Names" : "Show boys Names"}
            {cardToggle ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                style={{ marginRight: "5px", color: "red" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                style={{ marginRight: "5px", color: "red" }}
              />
            )}
          </button>

          <h1 className="text-center bg-gradient-to-r from-black to-blue-500 text-white  w-24 p-2 mx-auto mb-2 rounded-md">
            Boys data
          </h1>
          <div className={cardToggle ? "show" : "hide"}>
            <Card namesList={boys} type="men" />
          </div>
        </div>
        <button
          className={
            "button text-center bg-gradient-to-r from-black to-green-500 text-white p-2 rounded-md"
          }
          onClick={() => setShowModel(true)}
        >
          add new data
        </button>
        <div>
          <div className="girls-filter">
            <h1 className="text-center bg-gradient-to-r from-black to-pink-500 text-white  w-24 p-2  mb-2 rounded-md">
              Girls data
            </h1>
            <FilterInput filteration={filterNames} />
          </div>
          <Card
            namesList={nameHandler()}
            type="girl"
            deletefunc={deleteHandler}
          />
        </div>
      </div>
      <Modal show={showModel} closeModel={() => setShowModel(false)}>
        <AddUser addNewUserHandler={addNewUserHandler} closeModel={() => setShowModel(false)} />
      </Modal>
    </Fragment>
  );
};
export default App;
