import { useState } from "react";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
