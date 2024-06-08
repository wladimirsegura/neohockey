"use client";
import { Container, Heading, Section, Text } from "@radix-ui/themes";
import Standings from "./components/Standings";
import Background from "./components/Background";
import Calendar from "./components/Calendar";
import Hero from "./components/Hero";
import EventCalendar from "./components/EventCalendar";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";

export default function Home() {
	return (
		<div className="bg-[url('/images/HeroBackground.jpg')] bg-center bg-fixed h-full bg-inherit overflow-hidden">
			<Container size={4}>
				<Navbar />
				<Hero />

				<Schedule />
				<Calendar />

				<Standings />
				<div className="h-96 bg-slate-600"></div>
			</Container>
		</div>
	);
}
