"use client";

import { addNews } from "@/lib/action";
import Input from "./Input";

const CreateForm = () => {
	return (
		<form action={addNews} className="flex flex-col gap-2">
			<div className="pb-2">
				<label className="text-xl font-bold">タイトル</label>
				<Input placeholder="タイトル" type="text" name="title" />
			</div>
			<div className="pb-2">
				<label className="text-xl font-bold">内容</label>
				<Input placeholder="内容" type="text" name="content" />
			</div>
			<div className="pb-2">
				<label className="text-xl font-bold">日付</label>
				<Input placeholder="日付" type="date" name="date" />
			</div>
			<button className="bg-gray-500 text-white p-2 rounded-md">追加</button>
		</form>
	);
};
export default CreateForm;
