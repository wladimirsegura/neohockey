"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
const Navbar2 = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navLinks = [
		{ href: "#home", label: "ホーム" },
		{ href: "#schedule", label: "日程・結果" },
		{ href: "#standings", label: "順位表" },
		{ href: "#contact-us", label: "問い合わせ" },
	];
	return (
		<>
			<header className="sm:px-8 px-4 py-2 z-10 w-full">
				<nav className="flex justify-between items-center max-container">
					<a href="/" className="text-3xl font-bold">
						<img src="/images/LogoDark.png" width="120" height="auto" />
					</a>
					<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
						{navLinks.map((item) => (
							<li
								key={item.label}
								className="block relative text-2xl hover:text-blue-500"
							>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
					{/* <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
						<a href="/">Sign in</a>
						<span>/</span>
						<a href="/">Explore now</a>
					</div> */}
					<div
						className="hidden max-lg:block cursor-pointer"
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					>
						<RxHamburgerMenu className="text-4xl" />
					</div>
				</nav>
			</header>
			{isMenuOpen && (
				<div>
					<nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
						<div
							className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
						>
							<AiOutlineClose className="text-4xl" />
						</div>
						<ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
							{navLinks.map((item) => (
								<li key={item.label}>
									<a
										href={item.href}
										className="font-montserrat leading-normal text-lg text-slate-gray"
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}
		</>
	);
};
export default Navbar2;
