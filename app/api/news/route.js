import connectDB from "@/libs/mongodb";
import News from "@/models/news";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { date, title, content } = await request.json();
  await connectDB();
  await News.create({ date,title, content });
  return NextResponse.json({ message: "News created successfully" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const news = await News.find();
  return NextResponse.json(news);
}


export async function DELETE(request) {
 const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await News.findByIdAndDelete(id);
  return NextResponse.json({ message: "News deleted successfully" }, { status: 200 });
}