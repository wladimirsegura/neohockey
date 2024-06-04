const Hero = () => {
	return (
		<div
			id="home"
			className="bg-zinc-700 m-32 text-center align-middle flex flex-col items-center p-4 w-full rounded-xl"
		>
			<span className=" mt-1 pt-2">
				<img src="/images/LogoDark.png" width="400px" height="auto" />
			</span>
			<div className="text-2xl flex flex-col items-center">
				<h1>函南ネオホッケーリーグ</h1>
				<p>4年ぶりに開催</p>
			</div>
		</div>
	);
};
export default Hero;
