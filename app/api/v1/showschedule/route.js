
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export  async function GET() {

    const client = new MongoClient(process.env.MONGODB_URI)

    try {
        await client.connect();

        // Choose a name for your database
        const database = client.db("crud_db");

        // Choose a name for your collection
        const collection = database.collection("schedule");
        const allData = await collection.find({}).toArray();
        return NextResponse.json(allData);
         } catch (error) {
        throw new Error("Something went wrong!"+error);
    } finally {
        await client.close();
    }
    } 

