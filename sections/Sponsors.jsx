import SponsorItem from "@/components/SponsorItem";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Divider, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const data = [
  {
    img: "/sponsors/wagmi.svg",
    href: "https://wagmi.sh/",
  },
  {
    img: "/sponsors/nfteam.svg",
    href: "https://nfteam.eu/",
  },
  {
    img: "/sponsors/nfteam.svg",
    href: "https://nfteam.eu/",
  },
  {
    img: "/sponsors/nfteam.svg",
    href: "https://nfteam.eu/",
  },
  {
    img: "/sponsors/wagmi.svg",
    href: "https://wagmi.sh/",
  },
];

const Sponsors = () => {
  return (
    <Flex bg={colors.darkBg} justify="center" id="sponsors">
      <Wrapper flexDir={"column"} w="100%">
        <Divider mb={8} />
        <Flex
          gap={8}
          mb={32}
          justifyContent={{ base: "center", lg: "space-between" }}
          flexWrap="wrap"
          align="center"
        >
          {data.map((item, index) => (
            <SponsorItem key={index} {...item} />
          ))}
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Sponsors;
