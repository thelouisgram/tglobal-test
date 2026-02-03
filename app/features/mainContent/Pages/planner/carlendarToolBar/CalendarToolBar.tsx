import { HStack } from "@chakra-ui/react";
import { LeftSide } from "./LeftSide";
import RightSide from "./RightSide";

const CalendarToolBar = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}) => {
  return (
    <HStack w={"full"} h={"30px"} px="30px" justifyContent={"space-between"}>
      {/* Left Side */}
      <LeftSide selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {/* Right Side */}
      <RightSide />
    </HStack>
  );
};

export default CalendarToolBar;
