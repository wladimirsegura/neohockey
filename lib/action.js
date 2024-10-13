"use server";
import News from "../models/News";
import db from "../lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addNews = async (FormData) => {
	const { title, content, date } = Object.fromEntries(FormData);
	try {
		db.connect();
		const newNews = new News({
			title,
			content,
			date,
		});
		await newNews.save();
		db.disconnect();
	} catch (error) {
		throw new Error("ニュースの追加に失敗しました " + error);
	}
	revalidatePath("/news");
	redirect("/news");
};

export const editNews = async (FormData) => {
	const { id, title, content, date } = Object.fromEntries(FormData);
	try {
		db.connect();
		const updateFields = {
			title,
			content,
			date,
		};
		Object.keys(updateFields).forEach(
			(key) =>
				(updateFields[key] === "" || undefined) && delete updateFields[key]
		);
		await News.findByIdAndUpdate(id, updateFields);
	} catch (error) {
		throw new Error("ニュースの編集に失敗しました " + error);
	}
	revalidatePath("/news");
	redirect("/news");
};

export const deleteNews = async (FormData) => {
	const { id } = Object.fromEntries(FormData);
	try {
		db.connect();
		await News.findByIdAndDelete(id);
	} catch (error) {
		throw new Error("ニュースの削除に失敗しました " + error);
	}
	revalidatePath("/news");
};
