"use client";

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// const InitialRowData = [
//   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//   { make: "Ford", model: "F-Series", price: 33850, electric: false },
//   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
// ];

function Standings() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState();

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "名前" },
    { field: "チーム" },
    { field: "試合数" },
    { field: "ゴール数" },
  ]);

  React.useEffect(() => {
    fetch("https://gallery96.vercel.app/kannami.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <div className="ag-theme-quartz w-2/3 m-auto" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default Standings;
