import Button from "@/components/Button";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CollectionInfo = () => {
  return (
    <Flex
      bg={colors.darkBg}
      justify="center"
      id="collection"
      position="relative"
      pt={32}
    >
      <Image
        src="/detail1.png"
        position="absolute"
        w={150}
        h={"auto"}
        top={0}
        right={32}
        opacity={0.25}
        zIndex={1}
      />
      <Image
        src="/detail2.png"
        position="absolute"
        w={150}
        h={"auto"}
        bottom={0}
        left={{ base: 8, lg: 32 }}
        opacity={0.25}
        zIndex={1}
      />
      <Wrapper flexDir={{ base: "column", lg: "row" }} gap={8} zIndex={2}>
        <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} align="center">
          <Flex
            bg={colors.secondaryBg}
            px={8}
            pt={8}
            borderRadius={24}
            flexDir="column"
          >
            <Image
              src="/nfts/3.gif"
              borderRadius={24}
              w={350}
              h={400}
              objectFit="cover"
            />
            <Heading textAlign="center" mt={4} fontWeight={800} fontSize="2xl">
              Researcher
            </Heading>
            <Text
              textAlign="center"
              mt={2}
              mb={4}
              fontWeight={600}
              color={colors.darkerText}
            >
              #512
            </Text>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} w={{ base: "100%", lg: "50%" }} gap={8}>
          <Text
            textTransform="uppercase"
            color={colors.primary}
            fontWeight={800}
            textAlign={{ base: "center", lg: "left" }}
          >
            About the collection
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
            Unique Pixel artwork NFTs
          </Heading>
          <Text
            color={colors.darkerText}
            letterSpacing={1.2}
            textAlign={{ base: "center", lg: "left" }}
          >
            Have you heard of non-fungible tokens (NFTs)? They're like digital
            certificates that certify something to be one-of-a-kind and not
            interchangeable. NFTs are stored on a digital ledger called a
            blockchain and can represent all kinds of cool digital assets like
            photos, videos, and audio files. Best part? You can even sell and
            trade NFTs just like physical items. Cool, huh?
          </Text>
          <Flex>
            <Button>Learn more</Button>
          </Flex>
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default CollectionInfo;
