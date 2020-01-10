import React from "react";
import "./styles.css";

const App = () => {
  var name = "Sri";
  return (
    <div className="App">
      <h1 className="hding">TODO Task For {`${name}`}</h1>
      <label className="cbox">
        <input type="checkbox" /> TODO Task <br />
        <input type="checkbox" /> TODO Task <br />
        <input type="checkbox" /> TODO Task <br />
        <input type="checkbox" /> TODO Task <br />
      </label>
    </div>
  );
};


export default App;
