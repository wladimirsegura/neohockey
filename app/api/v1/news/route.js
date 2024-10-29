// import db from "/lib/db";
// import news from "@/models/news";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
	const client = new MongoClient(process.env.MONGODB_URI);

	try {
		await client.connect();

		// Choose a name for your database
		const database = client.db("crud_db");

		// Choose a name for your collection
		const collection = database.collection("news");
		const allData = await collection.find({}).limit(3).toArray();
		return NextResponse.json(allData);
	} catch (error) {
		throw new Error("Something went wrong!" + error);
	} finally {
		await client.close();
	}
}

// export const dynamic = "force-dynamic";

// export async function GET() {
// 	try {
// 		db.connect();
// 		const newsFind = await news.find();
// 		return NextResponse.json(newsFind);
// 	} catch (error) {
// 		throw new Error("DB connection error" + error);
// 	}
// }
