import { Em, Badge, Box, Section, Strong } from "@radix-ui/themes";
import Image from "next/image";
import News from "./News";

const Hero = () => {
	return (
		<Section className="bg-zinc-900 bg-opacity-80 h-max grid lg:grid-cols-2 m-auto rounded-sm ">
			<div>
				<div id="home" className="relative h-32"></div>
				<div className="text-center">
					<p className="text-lg">函南小学校にて4年ぶりに開催中！</p>
					<p className="text-3xl md:text-4xl">函南ネオホッケーリーグ</p>

					<Badge color="blue" variant="solid" className="mr-4">
						更新！ 6/19
					</Badge>
					<Badge color="yellow" className="mr-2">
						日程表
					</Badge>
					<Badge color="gray"> イベント情報</Badge>
				</div>
				<Image
					className="w-4/5 mx-auto mt-4"
					src={"/images/K-NHL.net.png"}
					width={835}
					height={836}
					alt="Logo"
				/>
			</div>
			<News />

		</Section>
	);
};
export default Hero;
