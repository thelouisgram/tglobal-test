import { HStack, Button, Text } from "@chakra-ui/react";
import { IoChevronDown, IoAdd } from "react-icons/io5";

const PlannerHeader = () => {
  return (
    // planner header
    <HStack
      justifyContent="space-between"
      h="70px"
      w="full"
      px="30px"
      borderBottom="1px solid"
      borderColor="#D9E5F2"
      flexShrink={0}
    >
      <Text color="black" fontSize={24} fontWeight="bold">
        Planner
      </Text>
      <HStack gap={4}>
        {/* Open Days Button */}
        <Button
          borderRadius="8px"
          border="1px solid"
          borderColor="#D9E5F2"
          bg="white"
          p="12px"
          _hover={{ bg: "gray.50" }}
          color={"#4E5D69"}
        >
          <IoChevronDown size={16} color="#4E5D69" />
          <Text fontWeight="semibold" fontSize="14px">
            Open Days
          </Text>
        </Button>

        {/* Nieuw Button */}
        <Button
          borderRadius="8px"
          border="1px solid"
          borderColor="#D9E5F2"
          bg="white"
          p="12px"
          _hover={{ bg: "gray.50" }}
          color={"#4E5D69"}
        >
          <IoAdd width={16} height={16} color={"#4E5D69"}/>
          <Text fontWeight="semibold" fontSize="14px">
            Nieuw
          </Text>
          <IoChevronDown width={16} height={16} />
        </Button>
      </HStack>
    </HStack>
  );
};

export default PlannerHeader;
