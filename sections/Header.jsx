import React from "react";
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { colors } from "@/utils/colors";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import ReactCurvedText from "react-curved-text";
import Link from "next/link";

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
      pb={{ base: 8, lg: 0 }}
      id="header"
    >
      <Wrapper gap={12} flexDir={{ base: "column", lg: "row" }} w="100%">
        <Flex
          display={{ base: "flex", lg: "none" }}
          h={450}
          position="relative"
          mt={12}
        >
          <Text
            zIndex={3}
            transform="rotate(20deg)"
            position="absolute"
            top={0}
            right={0}
            color={colors.primary}
            fontWeight={800}
            textShadow="0px 0px 10px rgba(0,0,0,1)"
          >
            GET YOURS TODAY
          </Text>
          <Text
            zIndex={3}
            className="mint-text"
            position="absolute"
            top={5}
            left={0}
            color={colors.primary}
            fontWeight={800}
            textShadow="0px 0px 10px rgba(0,0,0,1)"
          >
            MINTING LIVE
          </Text>
          <Image
            src="/nfts/2.png"
            w={240}
            h={360}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            top={24}
            left={"25%"}
            zIndex={2}
            boxShadow="0px 0px 20px 0px rgba(0,0,0,0.5)"
          />
          <Image
            src="/nfts/1.png"
            w={240}
            h={360}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            top={0}
            right={"25%"}
            zIndex={1}
            boxShadow="0px 0px 20px 0px rgba(0,0,0,0.5)"
          />
        </Flex>
        <Flex
          flexDir="column"
          gap={6}
          w={{ base: "100%", lg: "50%" }}
          position="relative"
        >
          {/* Symbols */}
          <Image
            src="/spiral.png"
            w={8}
            h={8}
            position="absolute"
            top={0}
            right={0}
            transform="rotate(45deg)"
          />

          <Image
            src="/tri-spiral.png"
            w={8}
            h={8}
            position="absolute"
            bottom={200}
            right={{base: "70%", lg: 100}}
            transform="rotate(45deg)"
          />

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
            <Link href="#collection">
              <Button>More info</Button>
            </Link>
          </Flex>
          <Flex
            mt={{ base: 8, lg: "auto" }}
            align="center"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Text fontSize={48} fontWeight={700}>
              9K+
            </Text>
            <Text ml={4} textTransform="uppercase" fontWeight={600}>
              Minted
            </Text>
            <Divider orientation="vertical" mx={4} color="white" />
            <Text fontSize={48} fontWeight={700}>
              6K+
            </Text>
            <Text ml={4} textTransform="uppercase" fontWeight={600}>
              Unique Holders
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
          <Box
            className="spin"
            width={250}
            height={250}
            zIndex={4}
            position="absolute"
            bottom={-10}
            right={{ base: 0, xl: -10 }}
          >
            <ReactCurvedText
              width={250}
              height={250}
              cx={125}
              cy={125}
              rx={125}
              ry={125}
              startOffset={0}
              text={"100% UNIQUE - 100% RARE - 100% FUN - 100% ART -"}
              textProps={{
                style: {
                  fontSize: 24,
                  textShadow: "0px 0px 10px rgba(0,0,0,1)",
                },
              }}
              textPathProps={{
                fill: colors.primary,
                letterSpacing: 3.5,
                fontWeight: 800,
              }}
            />
          </Box>
          <Image
            src="/nfts/2.png"
            w={360}
            h={500}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            bottom={0}
            left={0}
            zIndex={3}
            boxShadow="0px 0px 20px 0px rgba(0,0,0,0.5)"
          />
          <Image
            src="/nfts/1.png"
            w={360}
            h={500}
            objectFit="cover"
            borderRadius={24}
            position="absolute"
            top={0}
            right={0}
            zIndex={1}
            boxShadow="0px 0px 20px 0px rgba(0,0,0,0.5)"
          />
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Header;
