import { Em, Badge, Box, Section, Strong } from "@radix-ui/themes";
import Image from "next/image";

const Hero = () => {
	return (
		<Section className="bg-zinc-900 bg-opacity-80 h-max grid lg:grid-cols-2 m-auto rounded-sm ">
			<div>
				<div id="home" className="relative h-32"></div>
				<div className="text-center">
					<p className="text-lg">函南小学校にて4年ぶりに開催中！</p>
					<p className="text-3xl md:text-4xl">函南ネオホッケーリーグ</p>
					<Badge color="blue" variant="solid">
						更新！ 6/13
					</Badge>
					<Badge color="green">試合結果</Badge>
					<Badge color="green">順位表</Badge>
					<Badge color="green">個人成績</Badge>
				</div>
				<Image
					className="w-4/5 mx-auto"
					src={"/images/K-NHL.net.png"}
					width={835}
					height={836}
					alt="Logo"
				/>
			</div>
			<Box className="relative  m-auto py-4 text-2xl h-max scroll-mb-10 ">
				<Box className="text-sm max-w-xs my-10">
					<p>Round1</p>
					<p>
						久しぶりに復活するベテランや若手高校生にどのチームも人数不足で助っ人制度を利用して第1回目の試合に挑む!
					</p>
					<p>
						開幕戦で<Strong>TUC</Strong>の高校生<Em> ゴータ </Em>選手と
						<Em> セーヤ </Em>選手 の大活躍で６－１で勝利。
						<Strong>いやさか</Strong>の<Em> 高橋 </Em>
						選手が年齢感じない大きな活躍で１点を決めてチームの名誉を守った。二試合目で
						<Strong>ヘベウデス</Strong>と<Strong>コンパネロス</Strong>
						接戦続く中、後半に入ってフリーストロークで壁破って<Em> 池田 </Em>
						選手が見事に決めて１－０で<Strong>コンパネロス</Strong>
						が嬉しい初勝利を手にした。３試合目で<Strong>05ユニティーズ</Strong>
						の素晴らしいパスワークと高い個人技でメンバー不足の
						<Strong>ユニポリス</Strong>
						相手に７－１で快適勝利。
					</p>
				</Box>
				<p>参加者募集中（初心者大歓迎）</p>
			</Box>
		</Section>
	);
};
export default Hero;
