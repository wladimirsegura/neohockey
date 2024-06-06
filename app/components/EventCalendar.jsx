import clsx from "clsx";
import {
	closestIndexTo,
	eachDayOfInterval,
	endOfMonth,
	format,
	getDay,
	isSameDay,
	isToday,
	startOfMonth,
} from "date-fns";

const events = [
	{ date: "2024/6/17", title: "練習" },
	{ date: "2024/6/12", title: "リーグ戦" },
	{ date: "2024/6/10", title: "練習" },
];

const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

const EventCalendar = () => {
	const currentDate = new Date();
	const firstDayofMonth = startOfMonth(currentDate);
	const lastDayofMonth = endOfMonth(currentDate);

	const daysInMonth = eachDayOfInterval({
		start: firstDayofMonth,
		end: lastDayofMonth,
	});

	const startingDayIndex = getDay(firstDayofMonth);

	return (
		<div
			id="calendar"
			className="container mx-auto p-4 bg-slate-900 bg-opacity-80"
		>
			<div className="mb-4">
				<h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
			</div>
			<div className="grid grid-cols-7 gap-2">
				{weekdays.map((day) => {
					return (
						<div key={day} className="font-bold text-center">
							{day}
						</div>
					);
				})}
				{Array.from({ length: startingDayIndex }).map((_, index) => {
					return (
						<div
							key={`empty-${index}`}
							className="border rounded-md p-2 text-left"
						/>
					);
				})}
				{daysInMonth.map((day, index) => {
					return (
						<div
							key={index}
							className={clsx("border rounded-md p-2 text-center", {
								"bg-gray-200": isToday(day),
								"text-gray-900": isToday(day),
							})}
						>
							{format(day, "d")}

							{events
								.filter((event) => isSameDay(event.date, day))
								.map((event) => {
									return (
										<div
											key={event.title}
											className="bg-green-500 border rounded-md text-gray-900 p-0.5 text-xs"
										>
											{event.title}
										</div>
									);
								})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default EventCalendar;
