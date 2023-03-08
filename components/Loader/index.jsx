import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="rgba(0,0,0,0.75)"
      zIndex="999"
      justify="center"
      align="center"
      flexDir="column"
      gap={5}
      backdropFilter="blur(5px)"
    >
      <Spinner size="xl" color={"white"} />
    </Flex>
  );
};

export default Loader;
