"use client";
import { Container, Heading, Section, Text } from "@radix-ui/themes";
import Standings from "./components/Standings";
import Background from "./components/Background";

import Hero from "./components/Hero";
import EventCalendar from "./components/EventCalendar";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";

export default function Home() {
	return (
		<div>
			<Background />
			<Container size={4}>
				<Navbar />
				<Hero />
				<a href="#schedule"></a>
				<Schedule />
				<EventCalendar />
				<a href="#standings"></a>
				<Standings />
				<div className="h-96 bg-slate-600"></div>
			</Container>
		</div>
	);
}
