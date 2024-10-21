import db from "/lib/db";
import schedule from "@/models/schedule";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
	try {
		db.connect();
		console.log(schedule);
		const scheduleFind = await schedule.find();
		console.log(scheduleFind);
		return NextResponse.json(scheduleFind);
	} catch (error) {
		throw new Error("DB connection error" + error);
	}
}
