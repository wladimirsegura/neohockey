"use client";
import { Em, Badge, Box, Section, Strong } from "@radix-ui/themes";
import { useState, useEffect } from "react";

const getNews = async () => {
	try {
		const response = await fetch("/api/v1/news", {
			cache: "no-cache",
		});

		if (!response.ok) {
			throw new Error("Failed to fetch news");
		}
		return response.json();
		console.log(data);
	} catch (error) {
		console.error("Error fetching news:", error);
	}
};

export default function News() {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchNews = async () => {
			setIsLoading(true);
			try {
				const response = await fetch("/api/v1/news", {
					cache: "no-cache",
				});
				if (!response.ok) {
					throw new Error("Failed to fetch news");
				}
				const data = await response.json();
				setNews(data);
			} catch (error) {
				console.error("Error fetching news:", error);
				setError("エラーが発生しました。ページを再読み込みしてください。");
			} finally {
				setIsLoading(false);
			}
		};
		fetchNews();
	}, []);

	return (
		<Box className="relative m-auto py-4 text-2xl h-max scroll-mb-10 ">
			{error && <p className="py-4 text-red-500">{error}</p>}
			{isLoading ? (
				<p>データを読み込み中です...</p>
			) : (
				<Box className="relative m-auto py-4 text-2xl h-max scroll-mb-10 ">
					{news.map((n) => (
						<Box key={n._id} className="text-sm max-w-xs my-10">
							<p>
								<Badge color="yellow" className="mr-2 mb-2">
									{n.date.slice(0, 10)}
								</Badge>
								{n.title}
							</p>
							<p>{n.content}</p>
						</Box>
					))}
				</Box>
			)}
			<p>参加者募集中（初心者大歓迎）</p>
		</Box>
	);
}
