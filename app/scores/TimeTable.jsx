import { scoreData } from "./scoreData";

function TimeTable({ id, team }) {
	// const getScore = scoreData.find(e => e.event === eventDate && e.game === gameNumber)?.score || [];
	const getScore = scoreData.find((e) => e.gameid === id)?.score || [];

	const nameStyle =
		"grid grid-cols-6 items-center justify-center m-1 bg-gray-900";

	return (
		<section className="flex-col  bg-slate-700">
			<div className={`${nameStyle}`}>
				<p>P</p>
				<p className="col-span-2">Time</p>
				<p className="text-xs">G</p>
				<p className="text-xs">A1</p>
				<p className="text-xs">A2</p>
			</div>
			{getScore.map((item, i) =>
				item.team === team ? (
					<div key={i} className={`${nameStyle}`}>
						<p>{item.period}</p>
						<p
							className="col-span-2
          "
						>
							{item.time}
						</p>
						<p className="text-xs">{item.gaa[0]}</p>
						<p className="text-xs">{item.gaa[1]}</p>
						<p className="text-xs">{item.gaa[2]}</p>
						{/* <p className="text-xs">{item.gaa[3]}</p> */}
					</div>
				) : null
			)}
		</section>
	);
}

export default TimeTable;
