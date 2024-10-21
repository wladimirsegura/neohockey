import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);
export default mongoose?.models?.news || mongoose.model("news", NewsSchema);
