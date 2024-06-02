import { useState } from "react";
import NavButton from "./NavButton";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { PiHockeyBold } from "react-icons/pi";
import { SiCodementor } from "react-icons/si";
import { navLinks } from "./data";
import { Link } from "react-scroll";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full fixed left-0">
			<div className="md:flex items-center justify-between bg-slate-600 py-4 md:px-12 px-5">
				<div className="font-bold md:text-lg text-2xl cursor-pointer flex items-center text-slate-300">
					<span id="home" className=" mr-1 pt-2">
						<img src="/images/LogoDark.png" width="60" height="auto" />
					</span>
					Kannami NHLeague
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
				>
					{open ? <PiHockeyBold /> : <BsMenuButtonWideFill />}
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0	pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 opacity-100" : "top-[-300px]"
					} md:opacity-100 opacity-0`}
				>
					{navLinks.map((menu, index) => (
						<Link
							to={menu.link}
							className="text-slate-300 md:ml-7 md:text-xl md:my-0 my-7 hover:text-white duration:500"
							activeClass="text_gradient"
							smooth={true}
							spy={true}
							offset={-70}
							key={index}
						>
							{menu.name}
						</Link>
						// <li key={link.name} className="md:ml-7 md:text-xl md:my-0 my-7">
						// 	<a
						// 		href={link.link}
						// 		className="text-slate-300 hover:text-white duration:500"
						// 	>
						// 		{link.name}
						// 	</a>
						// </li>
					))}
					<NavButton>
						<SiCodementor />
					</NavButton>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
