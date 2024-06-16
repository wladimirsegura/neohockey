"use client";

import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "./styles/ag-grid.css";
import "./styles/ag-theme-balham.css";
import { Section } from "@radix-ui/themes";

function Ranking() {
	// Row Data: The data to be displayed.
	const [rowData, setRowData] = useState();

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState([
		{ field: "-", width: 42 },
		{ field: "#NAME", width: 60 },
		{ field: "TEAM", width: 110 },
		{ field: "GP", width: 32 },
		{ field: "G", width: 32 },
		{ field: "A", width: 32 },
		{ field: "P", width: 32 },
	]);

	const autoWidth = { flex: 1 };
	const url = `https://ofvxc14vdkffrabh.public.blob.vercel-storage.com/ranking.json`;

	useEffect(() => {
		fetch(url)
			.then((result) => result.json())
			.then((rowData) => setRowData(rowData));
	}, []);

	return (
		<Section id="standings" className=" m-auto max-w-screen-md">
			<div className="bg-zinc-700 m-auto text-center p-4 rounded-sm">
				<p className="text-3xl">Ranking / 個人成績</p>
				<p className="text-sm mt-2">GP:ゲーム数 G:得点 A:アシスト P:ポイント</p>
			</div>
			<div className="bg-zinc-700">
				<div
					className="ag-theme-balham-dark max-w-[420px] mx-auto mt-4"
					style={{ height: 400 }}
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

export default Ranking;
