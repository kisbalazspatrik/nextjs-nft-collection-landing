import React from "react";
import { Button as Btn } from "@chakra-ui/react";
import { colors } from "@/utils/colors";

const Button = ({ children }) => {
  return (
    <Btn
      variant="unstyled"
      bg={colors.primary}
      color={"black"}
      _hover={{ opacity: 0.8 }}
      borderRadius={"full"}
      p={8}
      display="flex"
      fontFamily={"heading"}
    >
      {children}
    </Btn>
  );
};

export default Button;
