import db from "/lib/db";
import news from "@/models/news";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		db.connect();
		const newsFind = await news.find();
		return NextResponse.json(newsFind);
	} catch (error) {
		throw new Error("DB connection error" + error);
	}
}
