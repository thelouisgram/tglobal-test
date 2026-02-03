import { HStack, Icon, Text } from "@chakra-ui/react";
import type { MenuItemComponentProps } from "@/app/types/sidebar";

export const MenuItem: React.FC<MenuItemComponentProps> = ({
  item,
  isActive,
  onClick,
}) => {
  return (
    <HStack
      pl="12px"
      py="11px"
      cursor="pointer"
      onClick={onClick}
      gap={3}
      position="relative"
    >
      <Icon as={item.icon} boxSize="20px" color="gray.800" />
      <Text
        fontWeight={isActive ? "bold" : "medium"}
        color={isActive ? "#242424" : "gray.600"}
        flex={1}
      >
        {item.label}
      </Text>
    </HStack>
  );
};
