import { HStack } from "@chakra-ui/react";
import LeftSide from "./components/calendarToolBar/LeftSide";
import RightSide from "./components/calendarToolBar/RightSide";

const CalendarToolBar = ({
  selectedDate,
  setSelectedDate,
  viewType,
  setViewType,
}: {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  viewType: string;
  setViewType: (view: string) => void;
}) => {
  return (
    <HStack w={"full"} h={"30px"} px="30px" justifyContent={"space-between"}>
      {/* Left Side */}
      <LeftSide selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {/* Right Side */}
      <RightSide
        viewType={viewType}
        setViewType={setViewType}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </HStack>
  );
};

export default CalendarToolBar;
