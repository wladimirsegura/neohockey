import db from "../lib/db";
import News from "../models/News";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await db.connect();
		const news = await News.find();
		return NextResponse.json(news);
	} catch (error) {
		throw new Error("DB connection error" + error);
	}
}
