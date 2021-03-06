import "./styles.css";
import Head from "./header";
import { useState } from "react";
import CalorieBox from "./caloriebox";

function App() {
  const data = [
    { name: "Pizza π", cal: 100 },
    {
      name: "Butter π§",
      cal: 80
    },
    {
      name: "Burger π",
      cal: 40
    },
    {
      name: "French Fries π",
      cal: 30
    },
    {
      name: "Doughnut π©",
      cal: 40
    },
    {
      name: "Ice Creamπ¨",
      cal: 50
    }
  ];
  const [Foods, SetFood] = useState(data);
  let NewFoods = [...Foods];
  const HandleDelete = (id) => {
    NewFoods = Foods.filter((Food) => Food !== Foods[id]);
    SetFood(NewFoods);
  };

  const empty = () => {
    if (NewFoods.length === 0) {
      return <h1>Empty Item</h1>;
    }
  };

  return (
    <div className="App">
      <Head />
      <div className="container">
        {NewFoods.map((item, id) => {
          return (
            <CalorieBox
              key={id}
              id={id}
              item={item}
              HandleDelete={HandleDelete}
            ></CalorieBox>
          );
        })}
        {empty()}
      </div>
    </div>
  );
}

export default App;
