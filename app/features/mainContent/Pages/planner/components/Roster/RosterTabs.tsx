import { Box, HStack, Text, Button } from "@chakra-ui/react";

interface RosterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  getCount: (tab: string) => number;
}

export const RosterTabs = ({
  tabs,
  activeTab,
  onTabChange,
  getCount,
}: RosterTabsProps) => {
  return (
    <HStack
      w="full"
      justifyContent={"space-between"}
      borderBottom={"1px solid #F3F4F6"}
    >
      {tabs.map((tab) => (
        <Button
          key={tab}
          p={0}
          onClick={() => onTabChange(tab)}
          borderBottom={activeTab === tab ? "2px solid #5653FC" : "none"}
          pb={2}
          w="fit-content"
          borderRadius="0"
        >
          <Text
            fontSize="14px"
            textTransform={"capitalize"}
            style={{ color: activeTab === tab ? "#5653FC" : "#717680" }}
            fontWeight={activeTab === tab ? "semibold" : "medium"}
          >
            {tab}
          </Text>

          <Box
            color={activeTab === tab ? "#5653FC" : "#414651"}
            p="2px 8px"
            bg="#F7FAFC"
            borderRadius="full"
            border={"1px solid #D9E5F2"}
          >
            <Text fontSize="14px" fontWeight="medium">
              {getCount(tab)}
            </Text>
          </Box>
        </Button>
      ))}
    </HStack>
  );
};
