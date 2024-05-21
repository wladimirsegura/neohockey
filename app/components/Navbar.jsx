import { Flex, Text, Button, Link, Container } from "@radix-ui/themes";
import { navitem } from "../constants";
import Image from "next/image";
const Navbar = () => {
  return (
    <Flex
      direction={"row"}
      pt={3}
      ml={3}
      justify={"between"}
      align={"center"}
      maxWidth={"100vw"}
    >
      <Image src="/images/LogoDark.png" width={120} height={50} />

      <Flex direction={"row"} justify={"between"} gap={"2"}>
        {navitem.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="block relative font-mono text-2xl uppercase hover:text-blue-700"
          >
            {item.title}
          </a>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
