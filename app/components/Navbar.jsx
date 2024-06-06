import { useState } from "react";
import NavButton from "./NavButton";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { PiHockeyBold } from "react-icons/pi";
import { SiCodementor } from "react-icons/si";
import { navLinks } from "./data";
import { Link } from "react-scroll";
import Image from "next/image";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full fixed left-0">
			<div className="md:flex items-center justify-between  bg-slate-600 py-4 md:px-12 px-5">
				<div className="font-bold text-2xl md:text-lg max-w-screen-md cursor-pointer flex items-center text-slate-100">
					<span className="mr-1">
						<Image
							src={"/images/LogoDark.net.png"}
							width={60}
							height={60}
							alt="small logo"
						/>
					</span>
					Kannami NHLeague
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
				>
					{open ? <PiHockeyBold /> : <BsMenuButtonWideFill />}
				</div>

				<div
					className={`md:flex md:items-center md:pb-0 md:h-auto h-screen pb-12 absolute md:static bg-slate-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0	pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 opacity-100 " : "top-[-300px]"
					} md:opacity-100 opacity-0`}
				>
					{navLinks.map((menu, index) => (
						<Link
							to={menu.link}
							className="text-slate-300 grid md:ml-7 md:text-xl md:my-0 my-7 hover:text-white duration:500"
							activeClass="text_gradient"
							smooth={true}
							spy={true}
							offset={-50}
							key={index}
						>
							{menu.name}
						</Link>
					))}
					<NavButton>
						<SiCodementor />
					</NavButton>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
