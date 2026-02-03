import { Box, Grid, GridItem, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const CalendarGrid = () => {
  const timeSlots = ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];
   
  const columns = [
    "Behandelingkamer1",
    "Management",
    "Bijzonderheden-Verlof-Cursus-BZV",
    "Financien",
  ];

  return (
    <Box w="full" h="full" bg="white" px="30px" paddingBottom="30px">
      <Grid
        templateColumns={`120px repeat(${columns.length}, 1fr)`}
        borderTop="1px solid #E5E7EB"
        borderLeft="1px solid #E5E7EB"
        bg="white"
        borderTopRadius="12px"
        flexShrink={0}
        gap={"0"}
      >
        {/* Header Row */}
        <GridItem
          bg="#EBEBFF"
          borderRight="1px solid #E5E7EB"
          borderBottom="1px solid #E5E7EB"
          fontWeight="semibold"
          borderTopLeftRadius="12px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="14px"
            color="#5653FC"
            h={"44px"}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Days
          </Text>
        </GridItem>
        {/* Column Headers */}
        {columns.map((col, idx) => (
          <GridItem
            key={idx}
            bg="#f3f5f7"
            borderRight="1px solid #D9E5F2"
            borderBottom="1px solid #D9E5F2"
            fontWeight="semibold"
            borderTopRightRadius={columns.length - 1 === idx ? "12px" : "0"}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="14px"
              color="#5D636F"
              lineClamp={1}
              title={col}
              h={"44px"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {col}
            </Text>
          </GridItem>
        ))}

        {/* Time Slots and Calendar Grid */}
        {timeSlots.map((time, timeIdx) => (
          <React.Fragment key={timeIdx}>
            {/* Time Column */}
            <GridItem
              key={`time-${timeIdx}`}
              bg="white"
              borderRight="1px solid #E5E7EB"
              borderBottom="1px solid #E5E7EB"
              h='120px'
              px='16px'
              py='8px'
            >
              <Text fontSize="14px" color="black" fontWeight="medium">
                {time}
              </Text>
            </GridItem>

            {/* Calendar Columns */}
            {columns.map((_, colIdx) => (
              <GridItem
                key={`cell-${timeIdx}-${colIdx}`}
                borderRight="1px solid #E5E7EB"
                borderBottom="1px solid #E5E7EB"
                h='120px'
                position="relative"
                bg="white"
                p='0'
              >
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarGrid;
