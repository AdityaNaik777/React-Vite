import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* this className is provided by tailwind jss with autosuggestions with the use of Tailwind CSS Intellisense plugin(extension) */}
      {/* A component has been created which is stored in components folder which is actually created explicitly by me only */}
      {/* Within that a cards.jsx file has been created and the same code is been copied from tailwind css and pasted in return section under a div tag */}
      {/* And been imported here */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind css</h1>
      <Cards classname="chaiaurcode" />
      <Cards></Cards>
    </>
  );
}

export default App;
