import { DropDownProps, MenuItem } from "@/app/types/planner";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";

const DropDown = ({ handleOptionClick }: DropDownProps) => {
  const menuItems: MenuItem[] = [
    { label: "Deze daag" },
    { label: "Deze week" },
    { label: "Maand" },
    { label: "Custom", hasIcon: true },
  ];

  return (
    <VStack
      position="absolute"
      w="121px"
      top="42px"
      left="0"
      bg="white"
      borderRadius="8px"
      zIndex={1}
      color="#242424"
      border="1px solid #D9E5F2"
      align="stretch"
      p="8px"
      gap={0}
    >
      {menuItems.map((item) => (
        <HStack
          key={item.label}
          fontSize="14px"
          fontWeight="medium"
          cursor="pointer"
          px="8px"
          py="10px"
          borderRadius="4px"
          _hover={{ bg: "gray.50" }}
          onClick={() => handleOptionClick(item.label)}
          justify="space-between"
        >
          <Text>{item.label}</Text>
          {item.hasIcon && <LuPlus size={16} color="#4E5D69" />}
        </HStack>
      ))}
    </VStack>
  );
};

export default DropDown;
