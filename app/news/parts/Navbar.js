import Link from "next/link";
import { FiPlusCircle, FiHome } from "react-icons/fi";

const Navbar = () => {
	return (
		<nav className="flex gap-6 justify-evenly items-center cursor-pointer">
			<Link
				className="flex items-center gap-2 text-xl font-bold"
				href={"/news"}
			>
				<FiHome />
				<span>ホーム</span>
			</Link>
			<Link
				className="flex items-center gap-2 text-xl font-bold"
				href={"/news/create"}
			>
				<FiPlusCircle />
				<span>追加</span>
			</Link>
		</nav>
	);
};
export default Navbar;
