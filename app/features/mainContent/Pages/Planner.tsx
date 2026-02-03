import { HStack, Button, Text } from "@chakra-ui/react";
import { ArrowDown2, Add } from "iconsax-reactjs";

const Planner = () => {
  return (
    <HStack
      justifyContent="space-between"
      h="70px"
      w="full"
      px="30px"
      py="16px"
      borderBottom="1px solid"
      borderColor="#D9E5F2"
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
          h="auto"
          fontWeight="semibold"
          fontSize="14px"
          _hover={{ bg: "gray.50" }}
        >
          <ArrowDown2 size={18} />
          Open Days
        </Button>

        {/* Nieuw Button */}
        <Button
                   borderRadius="8px"
          border="1px solid"
          borderColor="#D9E5F2"
          bg="white"
          p="12px"
          h="auto"
          fontWeight="semibold"
          fontSize="14px"
          _hover={{ bg: "gray.50" }}
        >
          <Add size={18} />
          Nieuw
          <ArrowDown2 size={18} />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Planner;
