function Background() {
  return (
    <div
      className="absolute bg-fixed opacity-20"
      style={{
        backgroundImage: `url('../images/HeroBackground.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // layout: "fill",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}

export default Background;
