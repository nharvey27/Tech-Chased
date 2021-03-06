import React from "react";
import { Box } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "1200px" : "400px"}
      w="100%"
      bg="white"
      border="1px"
      borderRadius="8px"
      borderColor="gray.400"
      boxShadow="xl"
    >
      {children}
    </Box>
  );
};
