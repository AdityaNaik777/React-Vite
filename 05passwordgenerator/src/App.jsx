import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);

  const [numberallowed, setnumberallowed] = useState(false);

  const [characterallowed, setcharacterallowed] = useState(false);

  const [password, setpassword] = useState("");

  //useref hook
  const passwordref = useRef(null);
  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) str += "0123456789";
    if (characterallowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallowed, characterallowed, setpassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordgenerator();
  }, [length, numberallowed, characterallowed, passwordgenerator]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center">
      <h1 className="text-white text-center">Password</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordref}
        />

        <button
          onClick={copyPasswordtoClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberallowed}
            id="numberinput"
            onChange={() => {
              setnumberallowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberinput"> Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterallowed}
            id="characterinput"
            onChange={() => {
              setcharacterallowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterinput"> Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
