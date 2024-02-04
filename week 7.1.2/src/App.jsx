import { useState, useContext} from "react";
import { CountContext } from "./context";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

//component 0
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
}

//component 1
function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

//component 2
function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase the count</button>
      <button onClick={() => setCount(count - 1)}>Decrease the count</button>
    </div>
  );
}

export default App;
