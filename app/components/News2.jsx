import { Badge, Box } from "@radix-ui/themes";
import { getNews } from "../lib/data";

const News2 = async () => {
	const news = await getNews();

	return (
		<Box className="relative m-auto py-4 text-2xl h-max scroll-mb-10 ">
			<Box className="relative m-auto py-4 text-2xl h-max scroll-mb-10 ">
				{news.map((n) => (
					<Box key={n._id} className="text-sm max-w-xs my-10">
						<p>
							<Badge color="yellow" className="mr-2 mb-2">
								{new Date(n.date).toLocaleDateString()}
							</Badge>
							{n.title}
						</p>
						<p>{n.content}</p>
					</Box>
				))}
			</Box>

			<p>参加者募集中（初心者大歓迎）</p>
		</Box>
	);
};

export default News2;
