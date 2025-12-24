import React,{useState} from "react";

const App = () => {
  const [first, setfirst] = useState(0)
  function increment(){
    setfirst(first+1);
  }

  function decrement(){
    setfirst(first-1);
  }
  function jumpby5(){
    setfirst(first+5);
  }
  return (
    <div className="h-60 w-150 border ml-10 mt-10">
      <div className="flex items-center h-40 justify-center bg-red-200 text-[50px] font-bold ">{first}</div>
      <div class="flex justify-between p-3">
        <button class="px-3 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-400" onClick={increment}>
          Increment
        </button>
        <button class="px-3 py-3 ml-5 bg-blue-600 text-white rounded-md hover:bg-blue-400" onClick={jumpby5}>
          Increase by five
        </button>
        <button class="px-3 py-3 ml-5 bg-blue-600 text-white rounded-md hover:bg-blue-400" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
