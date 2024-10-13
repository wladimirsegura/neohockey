"use client";

import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "./styles/ag-grid.css";
import "./styles/ag-theme-balham.min.css";
import { Section } from "@radix-ui/themes";

function Schedule() {
  // Row Data: The data to be displayed.
  const [rowData2, setRowData2] = useState();

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "日付" },
    { field: "ホーム" },
    { field: "スコア" },
    { field: "アウェイ" },
  ]);

  const autoWidth = { flex: 1 };

  useEffect(() => {
    fetch(
      "https://ofvxc14vdkffrabh.public.blob.vercel-storage.com/schedule.json",
    )
      .then((result) => result.json())
      .then((rowData2) => setRowData2(rowData2));
  }, []);

  return (
    <Section id="schedule" className=" m-auto max-w-screen-md">
      <div className="bg-zinc-700 m-auto text-center p-4 rounded-sm text-3xl">
        Schedule / 日程表・試合結果
      </div>
      <div
        className="ag-theme-balham-dark max-w-screen-md mx-auto mt-4 align-middle items-center"
        style={{ height: 650 }}
      >
        <AgGridReact
          rowData={rowData2}
          columnDefs={colDefs}
          defaultColDef={autoWidth}
        />
      </div>
    </Section>
  );
}

export default Schedule;
