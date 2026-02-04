import { HStack, Input, Button } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <HStack w="full">
      <HStack
        flex={1}
        px="12px"
        py="8px"
        gap="10px"
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"44px"}
      >
        <IoSearchOutline size={18} color="#9CA3AF" />
        <Input
          placeholder="Search"
          border="none"
          p={0}
          fontSize="14px"
          bg="white"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          _focus={{ outline: "none", boxShadow: "none" }}
          _placeholder={{ color: "#9CA3AF" }}
          color="#242424"
        />
      </HStack>

      <Button
        border={"1px solid #D9E5F2"}
        borderRadius={"8px"}
        h={"44px"}
        w={"44px"}
        p={0}
      >
        <LuFilter size={"18px"} strokeWidth={1.5} />
      </Button>
    </HStack>
  );
};
