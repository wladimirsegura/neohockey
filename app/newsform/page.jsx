"use server";
import * as Form from "@radix-ui/react-form";
export const create = (formData) => {
	console.log(formData.get("title"));
};

const NewsForm = () => (
	<form action="/send" method="post" className="w-[260px]">
		<label
			for="title"
			className="text-xl font-medium leading-[35px] text-white"
		>
			Title:
		</label>
		<input
			type="text"
			name="title"
			id="title"
			placeholder="Insert title"
			className="mx-2 p-2 bg-slate-800 rounded-md border-2 border-white text-white"
			required
		/>
		<label
			for="comment"
			className="text-xl font-medium leading-[35px] text-white"
		>
			Comment:
		</label>
		<textarea
			name="comment"
			id="comment"
			required
			placeholder="Insert comment"
			className="mx-2 p-2 bg-slate-800 rounded-md border-2 border-white text-white"
		></textarea>

		<button
			type="submit"
			className="mt-2.5 box-border inline-flex h-[35px] w-full items-center justify-center rounded bg-white px-[15px] font-medium leading-none text-violet11 shadow-[0_2px_10px] shadow-blackA4 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
		>
			Post news
		</button>
	</form>
);

export default NewsForm;
