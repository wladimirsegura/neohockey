import { Badge, Section } from "@radix-ui/themes";
import Image from "next/image";

const Events = () => {
	return (
		<Section id="events" className="m-auto max-w-screen-md">
			<div className="bg-zinc-700 m-auto text-center p-4 rounded-sm">
				<p className="text-3xl">Events / イベント情報</p>
			</div>
			<div className="bg-zinc-700">
				<p className="pl-4 flex">
					<Badge color="gray" className="mr-2">
						2024/6/16
					</Badge>
					ネオホッケー無料体験会 ＠函南町立西小学校 〉
				</p>
				<Image
					src={"/images/taikenkai20240616.png"}
					width={566}
					height={800}
					alt="taikennkai"
					className="mt-4 mx-auto py-4"
				/>
			</div>
		</Section>
	);
};
export default Events;
