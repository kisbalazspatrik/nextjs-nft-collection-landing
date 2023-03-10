import React from "react";
import { Button as Btn } from "@chakra-ui/react";
import { colors } from "@/utils/colors";

const Button = ({ children, secondary }) => {
  return (
    <Btn
      variant="unstyled"
      bg={!secondary ? colors.primary : "white"}
      color={!secondary ? "black" : colors.darkerText}
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

export const CircleButton = ({ children, ...rest }) => {
  return (
    <Btn
      variant="unstyled"
      bg={colors.primary}
      color={"black"}
      _hover={{ opacity: 0.8 }}
      borderRadius={"full"}
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      {...rest}
    >
      {children}
    </Btn>
  );
};

export default Button;
