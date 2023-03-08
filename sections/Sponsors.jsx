import SponsorItem from "@/components/SponsorItem";
import Wrapper from "@/components/Wrapper";
import { colors } from "@/utils/colors";
import { Divider, Flex } from "@chakra-ui/react";
import React from "react";

const Sponsors = () => {
  return (
    <Flex bg={colors.darkBg} justify="center">
      <Wrapper flexDir={"column"} w="100%">
        <Divider mb={8} />
        <Flex
          gap={8}
          mb={8}
          justifyContent={{ base: "center", lg: "space-between" }}
          flexWrap="wrap"
          align="center"
        >
          <SponsorItem img={"/sponsors/wagmi.svg"} href="https://wagmi.sh/" />
          <SponsorItem img={"/sponsors/nfteam.svg"} href="https://nfteam.eu/" />
          <SponsorItem img={"/sponsors/nfteam.svg"} href="https://nfteam.eu/" />
          <SponsorItem img={"/sponsors/nfteam.svg"} href="https://nfteam.eu/" />
          <SponsorItem img={"/sponsors/wagmi.svg"} href="https://wagmi.sh/" />
        </Flex>
      </Wrapper>
    </Flex>
  );
};

export default Sponsors;
