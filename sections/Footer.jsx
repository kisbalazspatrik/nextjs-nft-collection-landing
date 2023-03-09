import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const data = [
  {
    text: "Home",
    href: "#header",
  },
  {
    text: "About the Collection",
    href: "#collection",
  },
  {
    text: "About our Team",
    href: "#team",
  },
];

const Footer = () => {
  return (
    <Flex justify={"center"} className="footer-bg">
      <Wrapper justifyContent="space-between" w="100%" my={32}>
        <Flex>
          <Text color={colors.darkerText} fontSize="sm">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="https://nfteam.eu/" target={"_b"}>
              <Text as={"span"} color={colors.primary}>
                NFTEAM
              </Text>
            </Link>
            . All rights reserved.
          </Text>
        </Flex>
        <Flex gap={8}>
          {data.map((item, index) => (
            <Link href={item.href} key={index}>
              <Text
                color={colors.darkerText}
                fontSize="sm"
                fontWeight={600}
                _hover={{ color: colors.primary }}
                cursor="pointer"
                transition={"all 0.2s ease-in-out"}
              >
                {item.text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Footer;
