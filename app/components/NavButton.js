import { Button } from "@radix-ui/themes";

const NavButton = (props) => {
	return (
		<button className="bg-slate-800 text-white p-2 rounded md:ml-8 hover:bg-slate-300 duration-500">
			{props.children}
		</button>
	);
};
export default NavButton;
