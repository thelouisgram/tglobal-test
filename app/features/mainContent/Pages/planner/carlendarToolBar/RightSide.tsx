import { Box, Button, HStack, Text } from "@chakra-ui/react";
import {
  IoChevronBack,
  IoChevronDown,
  IoChevronForward,
  IoAdd,
} from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { LuFilter } from "react-icons/lu";

const RightSide = () => {
  return (
    <HStack gap={"8px"}>
      {/* Users button */}
      <Button
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"38px"}
        w={"38px"}
        p={0}
      >
        <PiUsersThree size={20} />
      </Button>
      {/* Filter button */}
      <Button
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"38px"}
        w={"38px"}
        p={0}
      >
        <LuFilter size={20} strokeWidth={1.5} />
      </Button>
      {/* Current day button */}
      <HStack
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"38px"}
        w={"auto"}
        gap={0}
        color={"black"}
      >
        <HStack px="8px" py="10px" cursor="pointer">
          <IoChevronBack size={16} color="#4E5D69" />
        </HStack>
        <Text
          borderLeft={"1px solid #D9E5F2"}
          borderRight={"1px solid #D9E5F2"}
          px="12px"
          h="full"
          display="flex"
          alignItems="center"
          fontSize={"14px"}
          fontWeight={"semibold"}
        >
          Current Day
        </Text>
        <HStack px="8px" py="10px" cursor="pointer">
          <IoChevronForward size={16} color="#4E5D69" />
        </HStack>
      </HStack>
      {/* This day button */}
      <HStack
        p="12px"
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"38px"}
        w={"auto"}
        gap={"8px"}
        color={"black"}
      >
        <Box
          bg={"#0CA740"}
          w={"10px"}
          h={"10px"}
          borderRadius={"full"}
          alignItems={"center"}
        />
        <Text fontSize={"14px"} fontWeight={"semibold"}>
          This Day
        </Text>
        <IoChevronDown size={16} color="#4E5D69" />
      </HStack>
      {/* Publish all button */}
      <HStack
        p="12px"
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"38px"}
        w={"auto"}
        color={"black"}
      >
        <Text fontSize={"14px"} fontWeight={"semibold"}>
          Publish All
        </Text>
      </HStack>
      {/* Lock shift button */}
      <HStack
        p="12px"
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"38px"}
        w={"auto"}
        color={"black"}
        gap={"8px"}
      >
        <IoAdd size={20} />
        <Text fontSize={"14px"} fontWeight={"semibold"}>
          Lock Shift
        </Text>
      </HStack>
    </HStack>
  );
};
export default RightSide;
