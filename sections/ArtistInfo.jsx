import { CircleButton } from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";

const ArtistInfo = () => {
  return (
    <Flex
      bg={colors.darkBg}
      justify="center"
      id="artist"
      position="relative"
      pt={32}
    >
      <Image
        src="/detail3.png"
        position="absolute"
        w={150}
        h={"auto"}
        bottom={-75}
        right={{ base: 8, lg: 64 }}
        opacity={0.25}
        zIndex={1}
      />
      <Wrapper
        flexDir={{ base: "column-reverse", lg: "row" }}
        gap={8}
        zIndex={2}
      >
        <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} gap={8}>
          <Text
            textTransform="uppercase"
            color={colors.primary}
            fontWeight={800}
            textAlign={{ base: "center", lg: "left" }}
          >
            About the artist
          </Text>
          <Heading
            fontSize={{
              base: "5xl",
              sm: "5xl",
              lg: "6xl",
              xl: "6xl",
            }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Mia Fene
          </Heading>
          <Text
            color={colors.darkerText}
            letterSpacing={1.2}
            textAlign={{ base: "center", lg: "left" }}
          >
            Meet Mia, a young and talented artist who has been creating stunning
            pieces of art since she was a child. Mia's art has become a hit in
            the local art scene, as it has a knack for bringing joy and humor to
            people's lives with its ability to evoke laughter and convey
            lighthearted messages. Despite her success, Mia remains humble and
            dedicated to her craft, always striving to push the boundaries of
            her creativity.
          </Text>
          <Flex gap={2}>
            <Link href="https://twitter.com" target="_b">
              <CircleButton w={12} h={12}>
                <FiTwitter />
              </CircleButton>
            </Link>
            <Link href="https://instagram.com" target="_b">
              <CircleButton w={12} h={12}>
                <FiInstagram />
              </CircleButton>
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} align="center">
          <Image
            src="/mia.jpg"
            borderRadius={24}
            w={"100%"}
            h={"100%"}
            objectFit="cover"
          />
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default ArtistInfo;
