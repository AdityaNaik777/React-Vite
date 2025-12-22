import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//let counter = 0; commented because not updating value in UI

//the problem is that the value of counter is changing but not reflecting in UI.

//we implement hooks using usestate
//usestate function returns a value & a function(function returned: it is used to update the value)

function App() {
  let [counter, setcounter] = useState(0);
  const addcounter = () => {
    //counter++; no update so no use
    //instead use setcounter which updates the value of counter variable
    setcounter(counter + 1);
    console.log("Value of counter after clicking: ", counter);
  };

  const reducecounter = () => {
    setcounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur Reactjs</h1>
      <button onClick={addcounter}>Click me to increase</button>
      <button onClick={reducecounter}>Click me to decrease</button>
      <p>Value of Button {counter}</p>
      {/* above the value of counter is not changing after clicking the button */}
      {/* Solution is to use HOOKS */}
    </>
  );
}

export default App;
