import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
function MyApp() {
  return (
    <div>
      <h1>Hello Myself Aditya Naik</h1>
    </div>
  );
}
/*
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google website",
};
*/

//corrected way
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google"
);
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
    {/* Function defined within this main.jsx and tried and it worked */}
    <MyApp />
    reactElement;
    {/* i am now trying to render the object reactElement which was firstly written in customRender..But it is not working as per chai aur code*/}
    {/* But if we wrap it using {} then it works! */}
    {/* Instead of custome lets see if i write a simple tag and see if it renders? */}
    {anotherElement}
    {/* Now i understood that from above it is rendering then whats the fault with customrender...*/}
    {/* It is the syntax issue */}
    {reactElement}
  </StrictMode>
);
