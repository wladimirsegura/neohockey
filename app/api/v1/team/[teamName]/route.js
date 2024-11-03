import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
	// Get the team name from the URL parameters
	const teamName = (await params).teamName;

	// Decode the team name in case it contains special characters
	const decodedTeamName = decodeURIComponent(teamName);
	console.log(decodedTeamName);

	const client = new MongoClient(process.env.MONGODB_URI);

	try {
		await client.connect();
		const database = client.db("crud_db");
		const collection = database.collection("players");

		// Find players where team matches the requested team name
		// Using case-insensitive search with regex
		const teamPlayers = await collection
			.find({
				TEAM: { $regex: new RegExp(`^${decodedTeamName}$`, "i") },
			})
			.toArray();

		if (teamPlayers.length === 0) {
			return NextResponse.json(
				{ message: `No players found for team: ${decodedTeamName}` },
				{ status: 404 }
			);
		}

		return NextResponse.json(teamPlayers);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch team players: " + error.message },
			{ status: 500 }
		);
	} finally {
		await client.close();
	}
}
