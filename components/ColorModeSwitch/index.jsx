import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      borderRadius={12}
      p={2}
      cursor="pointer"
      transition={"all 0.2s ease-in-out"}
    >
      {colorMode === "light" ? "🌙" : "☀️"}
    </Button>
  );
};

export default ColorModeSwitch;
