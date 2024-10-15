"use server";
import db from "/lib/db";
import news from "@/models/news";

export const getNews = async () => {
	try {
		db.connect();
		const newsList = await news.find({});
		return newsList;
	} catch (error) {
		throw new Error("Failed to Get News" + error);
	}
};

export const getNewsById = async (id) => {
	try {
		db.connect();
		const newsSingle = await news.findById(id);
		return newsSingle;
	} catch (error) {
		throw new Error("Failed to Get News" + error);
	}
};
