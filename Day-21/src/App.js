import "./styles.css";
import React, { useState } from "react";

function Food({ food, cal, HandleDelete, id }) {
  return (
    <div>
      <h1>{food}</h1>
      <h2>You have consumed {cal} calories</h2>
      <button
        onClick={(e) => {
          HandleDelete(id);
        }}
      >
        delete
      </button>
      <button onClick={(e) => {}}>edit</button>
    </div>
  );
}

function App() {
  const [foods, setFoods] = useState([]);
  const [cal, setCal] = useState([]);
  const [value, setValue] = useState(" ");
  const [value1, setValue1] = useState(" ");
  let Newfoods = [...foods];
  const HandleDelete = (id) => {
    Newfoods = foods.filter((food, i) => i !== id);
    setFoods(Newfoods);
    setCal([...cal, value1]);
    setValue(" ");
    setValue1(" ");
  };

  return (
    <div className="App">
      <input
        type="text"
        required
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Item name"
        value={value}
      ></input>
      <input
        type="number"
        onChange={(e) => {
          // e.preventDefault();
          setValue1(e.target.value);
        }}
        placeholder="Calorie amount"
        value1={value1}
      ></input>
      <button
        className="add"
        onClick={() => {
          setFoods([...foods, value]);
          setCal([...cal, value1]);
          setValue(" ");
          setValue1();
        }}
      >
        ADD ITEM
      </button>
      {foods.map((food, index) => (
        <Food
          key={index}
          food={food}
          cal={cal[index]}
          HandleDelete={HandleDelete}
          id={index}
        />
      ))}
    </div>
  );
}

export default App;
