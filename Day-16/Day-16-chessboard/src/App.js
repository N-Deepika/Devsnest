import "./styles.css";
import Row1 from "./Row1"
import Row2 from "./Row2"

function App() {
  return (
    <div className="board">
     <Row1 />
     <Row2 />
     <Row1 />
     <Row2 />
     <Row1 />
     <Row2 />
     <Row1 />
     <Row2 />
    </div>

  );
}

export default App;
