import React, { useState } from "react";
import GrowthGraph from "./components/growth-graph/growth-graph.component";

import { calculateGrowth } from "./utils";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [startYear, setStartYear] = useState(0);
  const [initInv, setInitInv] = useState(0);
  const [rate, setRate] = useState(0);
  const [years, setYears] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    switch (e.target.name) {
      case "startYear":
        setStartYear(value);
        break;
      case "initInv":
        setInitInv(value);
        break;
      case "rate":
        setRate(value);
        break;
      case "years":
        setYears(value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    const result = calculateGrowth(startYear, initInv, rate, years);
    setData(result);
  };

  return (
    <div className="App">
      <div className="inputs">
        <div className="inputField">
          <label htmlFor="startYear">Starting Year</label>
          <input
            type="number"
            name="startYear"
            id="startYear"
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="initInv">Initial Investment</label>
          <input
            type="number"
            name="initInv"
            id="initInv"
            onChange={handleChange}
          />
        </div>
        <div className="inputField">
          <label htmlFor="rate">Growth % per year</label>
          <input type="number" name="rate" id="rate" onChange={handleChange} />
        </div>
        <div className="inputField">
          <label htmlFor="years">Plot Graph (For Years)</label>
          <input
            type="number"
            name="years"
            id="years"
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={handleClick}>Show Data</button>
      {data.length ? <GrowthGraph data={data} /> : null}
    </div>
  );
}

export default App;
