"use client";
import { HStack, Box, Text, Button } from "@chakra-ui/react";

const PlannerTab = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: "live" | "planner";
  setActiveTab: (tab: "live" | "planner") => void;
}) => {
  return (
    // Tabs
    <Box pr="32px" pl="28px" w="full">
      {/* Tab Container */}
      <HStack
        w="full"
        h="40px"
        bg={activeTab === "live" ? "#FFF5F5" : "#F0F0FF"}
        border="1px solid"
        borderRadius={"full"}
        borderColor={activeTab === "live" ? "#FF6669" : "#BAB9FE"}
        p="4px"
        justifyContent={"start"}
        alignItems={"center"}
        transition={"all 0.3s ease"}
        gap="16px"
      >
        {/* Tab Buttons */}
        <HStack
          w={"140px"}
          h={"32px"}
          bg={"white"}
          borderRadius={"full"}
          p="4px"
          gap="0"
        >
          {/* Live Button */}
          <Button
            onClick={() => setActiveTab("live")}
            bg={activeTab === "live" ? "#FF383C" : "white"}
            w={"50%"}
            h={"full"}
            borderRadius={"full"}
            justifyContent={"center"}
            fontSize={"12px"}
            fontWeight={"bold"}
            color={activeTab === "live" ? "white" : "#7E919F"}
            transition={"all 0.3s ease"}
          >
            Live
          </Button>
          {/* Planner Button */}
          <Button
            onClick={() => setActiveTab("planner")}
            bg={activeTab === "planner" ? "#5653FC" : "white"}
            w={"50%"}
            h={"full"}
            borderRadius={"full"}
            justifyContent={"center"}
            fontSize={"12px"}
            fontWeight={"bold"}
            color={activeTab === "planner" ? "white" : "#7E919F"}
            transition={"all 0.3s ease"}
          >
            Planner
          </Button>
        </HStack>
        {/* Tab Description */}
        <Text color={"#242424"} transition={"all 0.3s ease"}>
          {activeTab === "live"
            ? "Description of the live"
            : "Description of the planner view"}
        </Text>
      </HStack>
    </Box>
  );
};

export default PlannerTab;
