import { Box, HStack, Text } from "@chakra-ui/react";
import { BsArrowsAngleExpand } from "react-icons/bs";

export const RosterHeader = () => {
  return (
    <HStack
      w={"full"}
      borderBottom={"1px solid #F3F4F6"}
      justifyContent={"start"}
      pb={"24px"}
    >
      <HStack gap="12px" alignItems="center">
        <Box>
          <BsArrowsAngleExpand size={16} color="#6C7278" />
        </Box>
        <Box width={"1px"} height={"24px"} bg={"#BAC1CC"} />
        <Text fontSize="15px" fontWeight="700" color="#1A1A1A">
          Roster
        </Text>
      </HStack>
    </HStack>
  );
};
