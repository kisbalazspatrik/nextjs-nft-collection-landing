import { Flex } from "@chakra-ui/react";
import React from "react";

const Wrapper = ({ children, ...rest }) => {
  return (
    <Flex maxW={1200} {...rest} px={8}>
      {children}
    </Flex>
  );
};

export default Wrapper;
