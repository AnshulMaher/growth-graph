import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import "./growth-graph.styles.css";

const GrowthGraph = ({ data }) => {
  return (
    <div className="growthGraph">
      <BarChart width={800} height={400} data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar
          dataKey="amount"
          fill="#8884d8"
          barSize={30}
          label={{ position: "top" }}
        />
      </BarChart>
    </div>
  );
};

export default GrowthGraph;
