import { getNewsById } from "/lib/data";
import HeadingText from "/news/parts/HeadingText";
import Input from "/news/parts/Input";
import Navbar from "/news/parts/Navbar";
import { editNews } from "/lib/action";

const SingleNews = async ({ params }) => {
	const { id } = params;
	const news = await getNewsById(id);

	return (
		<section>
			<HeadingText title="ニュースの編集" description="ニュースを編集します" />
			<Navbar />
			<div className="flex flex-col gap-4 justify-center items-center">
				<form action={editNews} className="flex flex-col gap-2">
					<div className="pb-2">
						<input type="hidden" name="id" value={news._id} />
						<label className="text-xl font-bold">タイトル</label>
						<Input placeholder={news.title} type="text" name="title" />
					</div>
					<div className="pb-2">
						<label className="text-xl font-bold">内容</label>
						<Input placeholder={news.content} type="text" name="content" />
					</div>
					<div className="pb-2">
						<label className="text-xl font-bold">日付</label>
						<Input
							placeholder={new Date(news.date).toLocaleDateString()}
							type="date"
							name="date"
						/>
					</div>
					<button className="bg-gray-500 text-white p-2 rounded-md">
						更新
					</button>
				</form>
			</div>
		</section>
	);
};
export default SingleNews;
