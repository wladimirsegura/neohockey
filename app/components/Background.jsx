function Background() {
	return (
		<div
			className="absolute bg-fixed left-0 opacity-20"
			style={{
				backgroundImage: `url('../images/HeroBackground.jpg')`,
				backgroundPosition: "left",
				backgroundSize: "fit",
				backgroundRepeat: "no-repeat",
				// layout: "fill",
				width: "100vw",
				height: "100vh",
			}}
		></div>
	);
}

export default Background;
