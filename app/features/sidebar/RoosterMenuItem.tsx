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
      _hover={{ bg: "gray.50" }}
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
        bg={isActive ? "blue.600" : "gray.200"}
      />

      <Icon
        as={item.icon}
        boxSize="20px"
        color={isActive ? "blue.600" : "gray.800"}
      />
      <Text
        fontSize="16px"
        fontWeight={isActive ? "600" : "500"}
        color={isActive ? "blue.600" : "gray.600"}
        flex={1}
      >
        {item.label}
      </Text>
    </HStack>
  );
};
