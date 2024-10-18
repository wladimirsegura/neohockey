import Navbar from "./parts/Navbar";
import HeadingText from "./parts/HeadingText";
import { getNews } from "/lib/data";
import { FiTrash, FiEdit } from "react-icons/fi";
import Link from "next/link";
import { deleteNews } from "/lib/action";

const styleForm =
	"px-4 py-3 title-font text-center tracking-wider font-medium text-grey-700 text-sm bg-gray-700 rounded border-gray-500 ";

const page = async () => {
	const allNews = await getNews();

	return (
		<main>
			<HeadingText
				title="ニュース"
				description="ニュースの更新をお待ちしています"
			/>
			<Navbar />
			<div className="flex flex-col p-4">
				<div>
					<table className="table-auto w-full  text-center whitespace-wrap">
						<thead>
							<tr>
								<th className={styleForm}>日付</th>
								<th className={styleForm}>タイトル</th>
								<th className={styleForm}>内容</th>
								<th className={styleForm}>編集</th>
							</tr>
						</thead>
						<tbody>
							{allNews.map((item) => (
								<tr key={item._id}>
									<td className="border-t-2 text-center border-grey-200 px-4 py-3 ">
										{new Date(item.date).toLocaleDateString()}
									</td>
									<td className="border-t-2 text-center border-grey-200 px-4 py-3 ">
										{item.title}
									</td>
									<td className="border-t-2 text-center border-grey-200 px-4 py-3 ">
										{item.content}
									</td>
									<td className="border-t-2 text-center border-grey-200 px-4 py-3 flex justify-center item-center gap-2">
										{/* <Link href={`/item/edit/${item._id}`}> */}
										<Link href={`/news/edit/${item._id}`}>
											<FiEdit className="mt-1" />
										</Link>
										<form action={deleteNews}>
											<input type="hidden" name="id" value={item._id} />
											<button
												type="submit"
												className="text-red-500 p-1 rounded-md"
											>
												<FiTrash />
											</button>
										</form>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};
export default page;
