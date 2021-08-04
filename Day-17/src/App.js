import "./styles.css";
import Instruction from "./Instruction";
import Card from "./Card";

const Mains = () => {
  return (
    <div className="main">
      <h2>Calorie Read Only</h2>
      <div className="container">
        <Card title="Pizza 🍕" Calorie="100" />
        <Card title="Butter 🧈" Calorie="613" />
        <Card title="Burger 🍔" Calorie="123" />
        <Card title="French Fries 🍟" Calorie="103" />
        <Card title="Doughnut 🍩" Calorie="125" />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Instruction />
      <Mains />
    </div>
  );
}
