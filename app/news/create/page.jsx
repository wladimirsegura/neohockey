import HeadingText from "../parts/HeadingText";
import CreateForm from "../parts/CreateForm";

const CreatePage = () => {
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
