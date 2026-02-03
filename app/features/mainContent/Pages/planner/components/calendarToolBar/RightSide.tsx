import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  IoChevronBack,
  IoChevronDown,
  IoChevronForward,
} from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { LuFilter } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import DropDown from "./DropDown";

const RightSide = ({
  viewType,
  setViewType,
}: {
  viewType: string;
  setViewType: (view: string) => void;
}) => {
  // Dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle option click
  const handleOptionClick = (option: string) => {
    setViewType(option);
    setIsDropdownOpen(false);
  };

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
        color={"#242424"}
      >
        {/* Back button */}
        <HStack px="8px" py="10px" cursor="pointer">
          <IoChevronBack size={16} color="#4E5D69" />
        </HStack>
        {/* Current day text */}
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
        {/* Forward button */}
        <HStack px="8px" py="10px" cursor="pointer">
          <IoChevronForward size={16} color="#4E5D69" />
        </HStack>
      </HStack>
      {/* This day button */}
      <Box position={"relative"}>
        <HStack
          p="12px"
          border={"1px solid #D9E5F2"}
          borderRadius={"8px"}
          h={"38px"}
          w={"auto"}
          gap={"8px"}
          color={"#242424"}
          cursor="pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Box
            bg={"#0CA740"}
            w={"10px"}
            h={"10px"}
            borderRadius={"full"}
            alignItems={"center"}
          />
          <Text fontSize={"14px"} fontWeight={"semibold"}>
            {viewType}
          </Text>
          <IoChevronDown
            size={16}
            color="#4E5D69"
            style={{
              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          />
        </HStack>
        {/* Dropdown */}
        {isDropdownOpen && <DropDown handleOptionClick={handleOptionClick} />}
      </Box>
      {/* Publish all button */}
      <HStack
        p="12px"
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"38px"}
        w={"auto"}
        color={"#242424"}
        cursor="pointer"
      >
        <Text fontSize={"14px"} fontWeight={"medium"}>
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
        color={"#242424"}
        gap={"8px"}
        cursor="pointer"
      >
        <LuPlus size={18} color="#4E5D69" />
        <Text fontSize={"14px"} fontWeight={"semibold"}>
          Lock Shift
        </Text>
      </HStack>
    </HStack>
  );
};
export default RightSide;
