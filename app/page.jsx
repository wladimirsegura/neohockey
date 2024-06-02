"use client";
import { Container, Heading, Section, Text } from "@radix-ui/themes";
import Standings from "./components/Standings";
import Background from "./components/Background";

import Hero from "./components/Hero";
import EventCalendar from "./components/EventCalendar";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<Container size={4} align={"left"} className="max-2xl">
			<Background />
			<Navbar />

			<Hero />
			<a href="#schedule"></a>
			<EventCalendar />
			<a href="#standings"></a>
			<Standings />
		</Container>
	);
}
