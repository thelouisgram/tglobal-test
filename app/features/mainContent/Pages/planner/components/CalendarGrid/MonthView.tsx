"use client";
import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";

interface MonthViewProps {
  selectedDate: Date;
}

const MonthView = ({ selectedDate }: MonthViewProps) => {
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Box
      w="full"
      h="full"
      bg="white"
      border="1px solid #D9E5F2"
      borderRadius="12px"
      overflow="hidden"
    >
      {/* Weekday Headers */}
      <Grid
        templateColumns="repeat(7, 1fr)"
        bg="#f3f5f7"
        borderBottom="1px solid #D9E5F2"
      >
        {weekDays.map((day) => (
          <GridItem
            key={day}
            py="12px"
            textAlign="center"
            borderRight="1px solid #D9E5F2"
          >
            <Text fontSize="14px" fontWeight="semibold" color="#5D636F">
              {day}
            </Text>
          </GridItem>
        ))}
      </Grid>

      {/* Calendar Grid */}
      <Grid templateColumns="repeat(7, 1fr)" autoRows="minmax(120px, auto)">
        {calendarDays.map((day: Date, idx: number) => {
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isToday = isSameDay(day, new Date());

          return (
            <GridItem
              key={idx}
              p="8px"
              borderRight="1px solid #D9E5F2"
              borderBottom="1px solid #D9E5F2"
              bg={!isCurrentMonth ? "#F9FAFB" : "white"}
              cursor="pointer"
              transition="all 0.2s ease-in-out"
            >
              <VStack align="flex-end" w="full">
                <Box
                  w="24px"
                  h="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  bg={isToday ? "#5653FC" : "transparent"}
                >
                  <Text
                    fontSize="14px"
                    fontWeight={isToday ? "bold" : "medium"}
                    color={
                      isToday ? "white" : isCurrentMonth ? "#242424" : "#A0AEC0"
                    }
                  >
                    {format(day, "d")}
                  </Text>
                </Box>
              </VStack>
              {/* Event placeholders could go here */}
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MonthView;
