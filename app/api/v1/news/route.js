import db from "/lib/db";
import news from "/models/news";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		await db.connect();
		const news = await news.find();
		return NextResponse.json(news);
	} catch (error) {
		throw new Error("DB connection error" + error);
	}
}
