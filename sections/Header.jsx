import React from "react";
import DarkBg from "@/public/dark-bg.png";
import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "@/utils/colors";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";

const Header = () => {
  return (
    <Flex
      bg={colors.darkBg}
      bgImage={"/bg-circle.png"}
      bgPos="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
      minH="100vh"
      minW="100vw"
      h="100%"
      align="center"
      justify="center"
    >
      <Wrapper gap={12} flexDir={{ base: "column", lg: "row" }} w="100%">
        <Flex
          display={{ base: "flex", lg: "none" }}
          h={450}
          position="relative"
          mt={12}
        >
          <Image
            src="/nfts/1.jpg"
            w={240}
            h={360}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            top={24}
            left={"25%"}
            zIndex={2}
          />
          <Image
            src="/nfts/2.jpg"
            w={240}
            h={360}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            top={0}
            right={"25%"}
            zIndex={1}
          />
        </Flex>
        <Flex flexDir="column" gap={6} w={{ base: "100%", lg: "50%" }}>
          <Text
            color={colors.primary}
            fontWeight={800}
            textAlign={{ base: "center", lg: "left" }}
          >
            GET ON THE WHITELIST NOW
          </Text>
          <Heading
            fontSize={{
              base: "5xl",
              sm: "5xl",
              lg: "6xl",
              xl: "7xl",
            }}
            textAlign={{ base: "center", lg: "left" }}
          >
            THE RAREST{" "}
            <Text as={"span"} color={colors.primary}>
              NFT
            </Text>{" "}
            DROP
          </Heading>
          <Text letterSpacing={2} textAlign={{ base: "center", lg: "left" }}>
            Mint an NFT of our collection and make your collection more
            valuable.
          </Text>
          <Flex justify={{ base: "center", lg: "flex-start" }}>
            <Button>More info</Button>
          </Flex>
          <Flex
            mt={{ base: 8, lg: "auto" }}
            align="center"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Text fontSize={48} fontWeight={700}>
              3K+
            </Text>
            <Text ml={4} textTransform="uppercase">
              Minted
            </Text>
            <Divider orientation="vertical" mx={4} color="white" />
            <Text fontSize={48} fontWeight={700}>
              1.5K+
            </Text>
            <Text ml={4} textTransform="uppercase">
              Holders
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDir="row"
          w={{ base: "100%", lg: "50%" }}
          position="relative"
          h={600}
          display={{ base: "none", lg: "flex" }}
        >
          <Image
            src="/nfts/1.jpg"
            w={360}
            h={540}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            bottom={0}
            left={0}
            zIndex={2}
          />
          <Image
            src="/nfts/2.jpg"
            w={360}
            h={540}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            top={0}
            right={0}
            zIndex={1}
          />
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Header;
