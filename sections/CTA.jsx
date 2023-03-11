import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Marketplaces } from "@/utils/marketplaces";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <Flex
      bg={colors.darkBg}
      justify="center"
      id="cta"
      position="relative"
      pt={32}
      //DELETE THIS AFTER NEW SECTION IS ADDED BELOW
      pb={32}
    >
      <Wrapper gap={8} w="100%">
        <Flex
          bg={colors.primary}
          p={12}
          borderRadius={24}
          w="100%"
          flexDir={{ base: "column", lg: "row" }}
          gap={8}
        >
          <Flex flexDir={"column"} w={{ base: "100%", lg: "60%" }} gap={4}>
            <Heading color="black">
              Our collection is now available on multiple secondary
              marketplaces.
            </Heading>
            <Heading fontSize="lg" color="black">
              Choose your preferred marketplace and start browsing our
              collection today!
            </Heading>
          </Flex>
          <Flex
            flexWrap={"wrap"}
            w={{ base: "100%", lg: "40%" }}
            gap={5}
            justify={{ base: "center", lg: "flex-end" }}
            align={"center"}
          >
            {Marketplaces.map((marketplace) => (
              <Link href={marketplace.url} target="_b">
                <Image
                  src={marketplace.image}
                  w={12}
                  h={12}
                  borderRadius="full"
                  title={marketplace.name}
                  as={motion.img}
                  whileHover={{ scale: 1.1 }}
                  filter="grayscale(100%)"
                  _hover={{ filter: "grayscale(0%)" }}
                  transition={"all 0.2s ease-in-out"}
                />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default CTA;
