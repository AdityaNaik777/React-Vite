import { X } from "lucide-react";
import React, { useState } from "react";
const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  const [task, setTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setdetails("");
    settitle("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  };
  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="items-start flex flex-col gap-5 p-10 lg:w-1/2"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        {/* first input */}
        <input
          type="text"
          placeholder="Enter Notes heading"
          className="px-5 w-full py-2 border-2 rounded outline-none font-medium"
          value={title}
          onChange={(e) => {
            // console.log(e.target.value);
            settitle(e.target.value);
          }}
        />
        {/* Detailed input */}
        <textarea
          type="text"
          placeholder="Enter Notes details"
          className="h-32 w-full px-5 py-2 border-2 rounded outline-none flex items-start"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />
        {/* Add button */}
        <button className="w-full bg-white text-black px-5 py-2 rounded outline-none font-medium active:bg-gray-400">
          Add Notes
        </button>
      </form>
      <div className="p-10 bg-gray-900 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 rounded-2xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZiRIBKbZmja-YbH5swhNMf-WcFTpOS4zSQ&s')] bg-cover px-5 py-2 text-black"
              >
                <h2
                  className="absolute top-7 right-5 bg-red-600 rounded-full active:scale-80"
                  onClick={() => {
                    deleteNote(idx);
                  }}
                >
                  {" "}
                  <X size={16} color="#ffffff" strokeWidth={1.75} />
                </h2>
                <h3 className="leading-snug text-xl font-bold py-5">
                  {elem.title}
                </h3>
                <p className="mt-2 leading-tight font-semibold text-gray-800 text-xs ">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
