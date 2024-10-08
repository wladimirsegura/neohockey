"use client";
import { Container, Heading, Section, Text } from "@radix-ui/themes";
import Standings from "./components/Standings";
import Calendar from "./components/Calendar";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Ranking from "./components/Ranking";
import Footer from "./components/Footer";
import Events from "./components/Events";

export default function Home() {
	return (
		<div className="bg-[url('/images/HeroBackground.jpg')] bg-center bg-fixed md:bg-cover h-full bg-inherit overflow-hidden">
			<Container size={4}>
				{/* <Navbar /> */}
				<Hero />
				<Events />
				<Schedule />
				<Standings />
				<Ranking />
				<Calendar />
				<Footer />
			</Container>
		</div>
	);
}
