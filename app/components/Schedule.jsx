"use client";

import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Section } from "@radix-ui/themes";

// const InitialRowData = [
//   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
//   { make: "Ford", model: "F-Series", price: 33850, electric: false },
//   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
// ];

function Schedule() {
	// Row Data: The data to be displayed.
	const [rowData, setRowData] = useState();

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState([
		{ field: "Date" },
		{ field: "#" },
		{ field: "A" },
		{ field: "Score" },
		{ field: "B" },
	]);

	const autoWidth = { flex: 1 };

	useEffect(() => {
		fetch(
			"https://ofvxc14vdkffrabh.public.blob.vercel-storage.com/schedule.json"
		)
			.then((result) => result.json())
			.then((rowData) => setRowData(rowData));
	}, []);

	return (
		<Section id="standings">
			<h1 className="bg-zinc-700 m-auto text-center align-middle p-4 w-full rounded-xl">
				Schedule / 日程表・試合結果
			</h1>
			<div
				className="ag-theme-quartz max-w-screen-md m-auto align-middle items-center"
				style={{ height: 500 }}
			>
				<AgGridReact
					rowData={rowData}
					columnDefs={colDefs}
					defaultColDef={autoWidth}
				/>
			</div>
		</Section>
	);
}

export default Schedule;
