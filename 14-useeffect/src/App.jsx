import { useEffect, useState } from "react";

function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  function num1Change() {
    setnum1(num1 + 1);
  }

  function num2Change() {
    setnum2(num2 - 1);
  }

  useEffect(
    function num1Changing() {
      console.log("Num1 is changing");
    },
    [num1]
  );

  useEffect(
    function num2Changing() {
      console.log("Num2 is changing");
    },
    [num2]
  );
  return (
    <div>
      <h1 class="text-5xl ml-36">USE EFFECT</h1>
      <div class="flex flex-cols m-5">
        <h1 class="w-60 h-20 mt-5 bg-amber-200 flex items-center justify-center font-bold text-lg">
          {num1}
        </h1>
        <h1 class="w-60 h-20 mt-5 bg-amber-300 ml-3 text-center flex items-center justify-center font-bold text-lg">
          {num2}
        </h1>
      </div>
      <div>
        <button
          onClick={num1Change}
          class="ml-25 border-2 bg-green-950 text-white rounded p-2 m-5 active:scale-110 rounded-2xl"
        >
          Increase
        </button>
        <button
          onClick={num2Change}
          class="ml-38 border-2 bg-green-950 text-white rounded p-2 m-5 active:scale-90 rounded-2xl"
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
