import { HStack, Icon, Text, Box } from "@chakra-ui/react";
import type { RoosterMenuItemProps } from "@/app/types/sidebar";


export const RoosterMenuItem: React.FC<RoosterMenuItemProps> = ({
  item,
  isActive,
  onClick,
}) => {
  return (
    <HStack
      p="12px"
      pl="24px"
      cursor="pointer"
      onClick={onClick}
      bg="transparent"
      _hover={{ bg: "#F7FAFC" }}
      borderRadius="8px"
      gap={3}
      position="relative"
    >
      {/* Vertical indicator line */}
      <Box
        position="absolute"
        left="12px"
        top="0"
        bottom="0"
        width={isActive ? "2px" : "1px"}
        bg={isActive ? "#5653FC" : "#E2E8F0"}
        
      />
      
      <Icon
        as={item.icon}
        boxSize="20px"
        color={isActive ? "#5653FC" : "#292D32"}
      />
      <Text
        fontSize="16px"
        fontWeight={isActive ? "600" : "500"}
        color={isActive ? "#5653FC" : "#4E5D69"}
        flex={1}
      >
        {item.label}
      </Text>
    </HStack>
  );
};