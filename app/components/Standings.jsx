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
		{ field: "-", width: 31 },
		{ field: "TEAM", width: 109 },
		{ field: "GP", width: 32 },
		{ field: "P", width: 32 },
		{ field: "W", width: 35 },
		{ field: "L", width: 32 },
		{ field: "T", width: 32 },
		{ field: "GF", width: 41 },
		{ field: "GA", width: 41 },
		{ field: "+/-", width: 47 },
	]);

	const autoWidth = { flex: 1 };
	const url = `https://ofvxc14vdkffrabh.public.blob.vercel-storage.com/standings.json`;

	useEffect(() => {
		fetch(url)
			.then((result) => result.json())
			.then((rowData) => setRowData(rowData));
	}, []);

	return (
		<Section id="standings" className=" m-auto max-w-screen-md">
			<div className="bg-zinc-700 m-auto text-center p-4 rounded-sm">
				<p className="text-3xl">Standings / 順位表</p>
				<p className="text-sm">
					G:ゲーム数 P:ポイント W:勝 L:負 T:引 GF:得点 GA:失点
				</p>
			</div>
			<div className=" bg-zinc-700 ">
				<div
					className="ag-theme-balham-dark max-w-[420px] mx-auto mt-4"
					style={{ height: 250 }}
				>
					<AgGridReact
						rowData={rowData}
						columnDefs={colDefs}
						// defaultColDef={autoWidth}
					/>
				</div>
			</div>
		</Section>
	);
}

export default Standings;
