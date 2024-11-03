import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
	// Get the team name from the URL parameters
	const playerName = (await params).playerName;

	// Decode the team name in case it contains special characters
	const decodedPlayerName = decodeURIComponent(playerName);
	console.log(decodedPlayerName);

	const client = new MongoClient(process.env.MONGODB_URI);

	try {
		await client.connect();
		const database = client.db("crud_db");
		const collection = database.collection("players");

		// Find players where team matches the requested team name
		// Using case-insensitive search with regex
		const playerName = await collection
			.find({
				NAME: { $regex: new RegExp(`^${decodedPlayerName}$`, "i") },
			})
			.toArray();

		if (playerName.length === 0) {
			return NextResponse.json(
				{ message: `No players found for team: ${decodedPlayerName}` },
				{ status: 404 }
			);
		}

		return NextResponse.json(playerName);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch player name: " + error.message },
			{ status: 500 }
		);
	} finally {
		await client.close();
	}
}
