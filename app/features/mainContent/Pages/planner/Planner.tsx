import PlannerHeader from "./PlannerHeader";
import { VStack } from "@chakra-ui/react";
import PlannerTab from "./PlannerTab";
import CalendarToolBar from "./CalendarToolBar";
import CalendarGrid from "./CalendarGrid";
import { useState } from "react";

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
    <VStack w={"full"} h={"full"} gap="20px">
      {/* Header */}
      <PlannerHeader />
      {/* Tab */}
      <PlannerTab activeTab={activeTab} setActiveTab={handleTabChange} />
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
  );
};

export default Planner;
