"use server";
import db from "/lib/db";
import News from "/models/News";

export const getNews = async () => {
	try {
		db.connect();
		const news = await News.find();
		return news;
	} catch (error) {
		throw new Error("Failed to Get News" + error);
	}
};

export const getNewsById = async (id) => {
	try {
		db.connect();
		const news = await News.findById(id);
		return news;
	} catch (error) {
		throw new Error("Failed to Get News" + error);
	}
};
