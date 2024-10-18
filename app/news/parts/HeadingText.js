function HeadingText({ title, description }) {
	return (
		<section className="px-4 py-24 flex flex-col items-center justify-center">
			<h1 className="text-center sm:text-3xl text-2xl font-medium mb-2 text-gray-500">
				{title}
			</h1>
			<h3 className="text-xs text-orange-400 tracking-widest font-medium mb-2">
				{description}
			</h3>
			<div className="h-1 w-20 bg-orange-400 rounded"></div>
		</section>
	);
}
export default HeadingText;