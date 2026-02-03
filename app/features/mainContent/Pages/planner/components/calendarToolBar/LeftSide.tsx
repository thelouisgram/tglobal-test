"use client";
import React from "react";
import { HStack, Button, Text } from "@chakra-ui/react";
import { formatDate } from "@/app/utils/planner/planner";
import { useRef } from "react";

const LeftSide = ({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}) => {
  const { day, date, month, year } = formatDate(selectedDate);
  const dateInputRef = useRef<HTMLInputElement>(null);
  // handle date change
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <HStack gap="12px">
      {/* Date Button */}
      <Button
        fontWeight={"regular"}
        fontSize="14px"
        color="#4E5D69"
        border={"1px solid #D9E5F2"}
        borderRadius={"full"}
        h="30px"
        w="68px"
        onClick={() => dateInputRef.current?.showPicker()}
        position="relative"
        cursor={"pointer"}
      >
        {/* Date */}
        {day} <span style={{ color: "black", fontWeight: "600" }}>{date}</span>
        {/* Date Input */}
        <input
          ref={dateInputRef}
          type="date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={handleDateChange}
          style={{
            position: "absolute",
            opacity: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </Button>
      {/* Month and Year */}
      <Text color="black" fontSize="20px" fontWeight="semibold">
        {month}, {year}
      </Text>
    </HStack>
  );
};

export default LeftSide;
  