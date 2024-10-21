import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema(
	{
		date: {
			type: String,
			required: true,
		},
		home: {
			type: String,
			required: true,
		},
		score: {
			type: String,
			required: true,
		},
		away: {
			type: String,
			required: true,
		},
		referee: {
			type: String,
		},
		record: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default mongoose?.models?.schedule ||
	mongoose.model("schedule", ScheduleSchema);
