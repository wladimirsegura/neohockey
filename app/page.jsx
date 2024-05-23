"use client";
import { Container, Heading, Section, Text } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import Standings from "./components/Standings";
import BAckground from "./components/Background";
import Navbar2 from "./components/Navbar2";

export default function Home() {
  return (
    <Container align={"center"}>
      <BAckground />

      <Heading>
        {/* <Navbar /> */}
        <br />
        <Navbar2 />
      </Heading>
      <Section size={4}>
        <Heading>ようこそ！</Heading>
      </Section>
      {/* <Standings /> */}
    </Container>
  );
}
