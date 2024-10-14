"use server";
import db from "/lib/db";
import news from "/models/news";

export const getNews = async () => {
	try {
		db.connect();
		const news = await news.find();
		return news;
	} catch (error) {
		throw new Error("Failed to Get News" + error);
	}
};

export const getNewsById = async (id) => {
	try {
		db.connect();
		const news = await news.findById(id);
		return news;
	} catch (error) {
		throw new Error("Failed to Get News" + error);
	}
};
