import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Product from "./Product"

function App() {
  const [amount, setAmount] = useState(0)

  return (
    <div className="App">
      <Product />
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
