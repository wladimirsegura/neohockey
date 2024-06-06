"use client";

import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "./styles/ag-grid.css";
import "./styles/ag-theme-balham.css";
import { Section } from "@radix-ui/themes";

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

	const autoWidth = { flex: 1 };

	useEffect(() => {
		fetch(
			"https://ofvxc14vdkffrabh.public.blob.vercel-storage.com/kannami.json"
		)
			.then((result) => result.json())
			.then((rowData) => setRowData(rowData));
	}, []);

	return (
		<Section id="standings" className="bg-slate-300 w-full">
			<h1 className="bg-zinc-700 m-auto text-center align-middle p-4 w-full rounded-xl">
				Standings / 順位表
			</h1>
			<div
				className="ag-theme-balham max-w-screen-md m-auto align-middle items-center"
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

export default Standings;
