import SponsorItem from "@/components/SponsorItem";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { sponsors } from "@/utils/sponsors";
import { Divider, Flex } from "@chakra-ui/react";
import React from "react";

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
          {sponsors.map((item, index) => (
            <SponsorItem key={index} {...item} />
          ))}
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Sponsors;
