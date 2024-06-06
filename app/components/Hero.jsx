import { Card } from "@radix-ui/themes";
import Image from "next/image";

const Hero = () => {
	return (
		<div
			id="home"
			className="bg-zinc-900 bg-opacity-80 grid lg:grid-cols-2 mt-16 rounded-md"
		>
			<Image
				src={"/images/LogoDark.net.png"}
				width={670}
				height={1}
				alt="Logo"
			/>
			<Card>
				<p>函南小学校にて4年ぶりに開催します！</p>
				<p className="text-4xl mb-4">函南ネオホッケーリーグ</p>
				<p>日時：6月12日（水）20：15　開幕</p>
				<p>参加者募集中（初心者大歓迎）</p>
			</Card>
		</div>
	);
};
export default Hero;
