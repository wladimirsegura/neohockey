import HeadingText from "../parts/HeadingText";
import CreateForm from "../parts/CreateForm";
import { useRouter } from "next/navigation";

const CreatePage = () => {
	const router = useRouter();
	router.refresh();
	return (
		<section>
			<HeadingText title="ニュースの追加" description="ニュースを追加します" />
			<div className="flex flex-col gap-4 justify-center items-center">
				<CreateForm />
			</div>
		</section>
	);
};
export default CreatePage;
