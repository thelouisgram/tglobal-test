import { Box, Button, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
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
import { addDays } from "date-fns";

const RightSide = ({
  viewType,
  setViewType,
  selectedDate,
  setSelectedDate,
}: {
  viewType: string;
  setViewType: (view: string) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}) => {
  // Dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Responsive text display
  const showFullText = useBreakpointValue({ base: false, md: true });
  const buttonSize = useBreakpointValue({ base: "36px", md: "38px" });
  const iconSize = useBreakpointValue({ base: 18, md: 20 });

  // Handle option click
  const handleOptionClick = (option: string) => {
    setViewType(option);
    setIsDropdownOpen(false);
  };

  const handlePrevDay = () => {
    setSelectedDate(addDays(selectedDate, -1));
  };

  const handleNextDay = () => {
    setSelectedDate(addDays(selectedDate, 1));
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <HStack 
      gap={{ base: "4px", sm: "6px", md: "8px" }}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      justifyContent={{ base: "flex-end", lg: "flex-start" }}
    >
      {/* Users button */}
      <Button
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={buttonSize}
        w={buttonSize}
        minW={buttonSize}
        p={0}
      >
        <PiUsersThree size={iconSize} />
      </Button>
      
      {/* Filter button */}
      <Button
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={buttonSize}
        w={buttonSize}
        minW={buttonSize}
        p={0}
      >
        <LuFilter size={iconSize} strokeWidth={1.5} />
      </Button>
      
      {/* Current day button */}
      <HStack
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={buttonSize}
        w={"auto"}
        gap={0}
        color={"#242424"}
      >
        {/* Back button */}
        <HStack 
          px={{ base: "6px", md: "8px" }}
          py={{ base: "8px", md: "10px" }}
          cursor="pointer" 
          onClick={handlePrevDay}
          _hover={{ bg: "gray.50" }}
        >
          <IoChevronBack size={16} color="#4E5D69" />
        </HStack>
        
        {/* Current day text */}
        <Text
          borderLeft={"1px solid #D9E5F2"}
          borderRight={"1px solid #D9E5F2"}
          px={{ base: "8px", md: "12px" }}
          h="full"
          display="flex"
          alignItems="center"
          fontSize={{ base: "13px", md: "14px" }}
          fontWeight={"semibold"}
          cursor="pointer"
          onClick={handleToday}
          _hover={{ bg: "gray.50" }}
          whiteSpace="nowrap"
        >
          {showFullText ? "Current Day" : "Today"}
        </Text>
        
        {/* Forward button */}
        <HStack 
          px={{ base: "6px", md: "8px" }}
          py={{ base: "8px", md: "10px" }}
          cursor="pointer" 
          onClick={handleNextDay}
          _hover={{ bg: "gray.50" }}
        >
          <IoChevronForward size={16} color="#4E5D69" />
        </HStack>
      </HStack>
      
      {/* View type dropdown */}
      <Box position={"relative"}>
        <HStack
          p={{ base: "8px", md: "12px" }}
          border={"1px solid #D9E5F2"}
          borderRadius={"8px"}
          h={buttonSize}
          w={"auto"}
          gap={{ base: "6px", md: "8px" }}
          color={"#242424"}
          cursor="pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          _hover={{ bg: "gray.50" }}
        >
          <Box
            bg={"#0CA740"}
            w={"10px"}
            h={"10px"}
            borderRadius={"full"}
            alignItems={"center"}
            flexShrink={0}
          />
          <Text 
            fontSize={{ base: "13px", md: "14px" }}
            fontWeight={"semibold"}
            whiteSpace="nowrap"
          >
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
        p={{ base: "8px", md: "12px" }}
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={buttonSize}
        w={"auto"}
        color={"#242424"}
        cursor="pointer"
        _hover={{ bg: "gray.50" }}
        display={{ base: "none", sm: "flex" }}
      >
        <Text 
          fontSize={{ base: "13px", md: "14px" }}
          fontWeight={"medium"}
          whiteSpace="nowrap"
        >
          Publish All
        </Text>
      </HStack>
      
      {/* Lock shift button */}
      <HStack
        p={{ base: "8px", md: "12px" }}
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={buttonSize}
        w={"auto"}
        color={"#242424"}
        gap={{ base: "4px", md: "8px" }}
        cursor="pointer"
        _hover={{ bg: "gray.50" }}
      >
        <LuPlus size={iconSize} color="#4E5D69" />
        <Text 
          fontSize={{ base: "13px", md: "14px" }}
          fontWeight={"semibold"}
          whiteSpace="nowrap"
          display={{ base: "none", sm: "block" }}
        >
          Lock Shift
        </Text>
      </HStack>
    </HStack>
  );
};

export default RightSide;