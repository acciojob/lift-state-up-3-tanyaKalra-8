import React, {useState} from "react";
import "./../styles/App.css";

const App = () => {
  const [text, setText] = useState("");

  function clicked(event){
    setText("Option 1");
  }
  function clicked1(event){
    setText("Option 2");
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="parent">
        <h1>Parent Component</h1>

        <div className="child1">
          <h1>Child Component 1</h1>
          <button onClick={clicked}>Option 1</button>
        </div>
        <div className="child2">
          <h1>Child Component 2</h1>
          <button onClick={clicked1}>Option 2</button>
        </div>
        <p>{"Selected Option: " + text}</p>
      </div>
    </div>
  );
};

export default App;
