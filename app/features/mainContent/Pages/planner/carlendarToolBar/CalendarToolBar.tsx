import { HStack } from "@chakra-ui/react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const CalendarToolBar = () => {
  

  return (
    <HStack w={"full"} h={"30px"} px="30px" justifyContent={"space-between"}>
    {/* Left Side */}
    <LeftSide />
      {/* Right Side */}
      <RightSide />
    </HStack>
  );
};

export default CalendarToolBar;