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
		<div className="shadow-md w-full fixed z-10 left-0">
			<div className="md:flex items-center justify-between  bg-slate-600 p-4">
				<Link
					to="home"
					smooth={true}
					className="font-bold text-2xl max-w-screen-md cursor-pointer flex items-center text-slate-100"
				>
					<Image
						src={"/images/K-NHL.net.png"}
						width={60}
						height={60}
						alt="small logo"
					/>
					<Link to="home" smooth={true}>
						Kannami NHLeague
					</Link>
				</Link>
				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
				>
					{open ? <PiHockeyBold /> : <BsMenuButtonWideFill />}
				</div>

				<div
					className={`md:flex md:items-center md:pb-0 md:h-auto h-screen cursor-pointer　pb-12 absolute md:static bg-slate-600 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0	pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 opacity-100 " : "top-[-300px]"
					} md:opacity-100 opacity-0`}
				>
					{navLinks.map((menu, index) => (
						<Link
							onClick={() => setOpen(!open)}
							to={menu.link}
							className="text-slate-300 grid cursor-pointer md:ml-7 md:text-xl md:my-0 my-7 hover:text-white duration:500"
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
