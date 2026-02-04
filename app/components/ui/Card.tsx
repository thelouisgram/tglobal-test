import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <Box
      w="full"
      p="10px"
      border="1px solid #D9E5F2"
      borderRadius="12px"
      bg="white"
    >
      {children}
    </Box>
  );
};

export default Card;
