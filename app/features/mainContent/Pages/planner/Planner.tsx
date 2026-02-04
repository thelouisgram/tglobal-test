import PlannerHeader from "./PlannerHeader";
import { HStack, VStack } from "@chakra-ui/react";
import PlannerTab from "./PlannerTab";
import CalendarToolBar from "./CalendarToolBar";
import CalendarGrid from "./CalendarGrid";
import { useState } from "react";
import Roster from "./Roster";

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState<"live" | "planner">("live");
  const [viewType, setViewType] = useState<string>("Deze daag");

  const handleTabChange = (tab: "live" | "planner") => {
    setActiveTab(tab);
    if (tab === "planner") {
      setViewType("Maand");
    } else {
      setViewType("Deze daag");
    }
  };

  return (
    <VStack
      w={"full"}
      h={"full"}
      minH="100dvh"
      gap="20px"
      bg={'white'}
      animation="fadeIn 0.5s ease-out"
      css={{
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Header */}
      <PlannerHeader />
      {/* Tab */}
      <PlannerTab activeTab={activeTab} setActiveTab={handleTabChange} />
      <HStack w="full" align="stretch" gap="0px" h={'full'} minH="100dvh" bg={'white'}>
        <Roster />
      <VStack w="full" align="stretch" gap="20px">
        {/* Calendar Tool Bar */}
        <CalendarToolBar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          viewType={viewType}
          setViewType={setViewType}
        />
        {/* Calendar Grid */}
        <CalendarGrid selectedDate={selectedDate} viewType={viewType} />
      </VStack>
      </HStack>
    </VStack>
  );
};

export default Planner;
