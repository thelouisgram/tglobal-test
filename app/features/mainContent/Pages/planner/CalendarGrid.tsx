import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TimeColumn } from "./components/CalendarGrid/TimeColumn";
import { RoomColumn } from "./components/CalendarGrid/RoomColumn";
import MonthView from "./components/CalendarGrid/MonthView";
import { Event } from "@/app/types/planner";
import { events as dummyEvents } from "@/app/utils/planner";

const CalendarGrid = ({
  selectedDate,
  viewType,
}: {
  selectedDate: Date;
  viewType: string;
}) => {
  const timeSlots = [
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  const columns = [
    "Behandelingkamer1",
    "Management",
    "Bijzonderheden-Verlof-Cursus-BZV",
    "Financien",
  ];

  const selectedDateStr = selectedDate.toISOString().split("T")[0];

  const [events, setEvents] = useState<Event[]>(dummyEvents);
  const [isSeeMoreOpen, setIsSeeMoreOpen] = useState(false);
  const [selectedSeeMoreId, setSelectedSeeMoreId] = useState<string | null>(
    null,
  );

  const addEvent = (event: Event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const handleSeeMoreOpenChange = (open: boolean) => {
    setIsSeeMoreOpen(open);
    if (!open) {
      setSelectedSeeMoreId(null);
    }
  };

  const handleSeeMoreTriggerClick = (id: string) => {
    setSelectedSeeMoreId(id);
    setIsSeeMoreOpen(true);
  };

  return (
    <Box w="full" h="full" bg="white" pl={'20px'} pr="30px" paddingBottom="30px">
      {viewType === "Maand" ? (
        <MonthView selectedDate={selectedDate} />
      ) : (
        <Grid
          templateColumns={`120px repeat(${columns.length}, 1fr)`}
          borderTop="1px solid #E5E7EB"
          borderLeft="1px solid #E5E7EB"
          bg="white"
          borderTopRadius="12px"
          flexShrink={0}
          gap={"0"}
        >
          {/* Top-Left Corner */}
          <GridItem
            bg="#EBEBFF"
            borderRight="1px solid #E5E7EB"
            borderBottom="1px solid #E5E7EB"
            fontWeight="semibold"
            borderTopLeftRadius="12px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="44px"
          >
            <Text fontSize="14px" color="#5653FC">
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
              h="44px"
            >
              <Text fontSize="14px" color="#5D636F" lineClamp={1} title={col}>
                {col}
              </Text>
            </GridItem>
          ))}

          {/* Time Labels Column */}
          <TimeColumn timeSlots={timeSlots} />

          {/* Room Columns */}
          {columns.map((room, colIdx) => (
            <RoomColumn
              key={colIdx}
              room={room}
              colIdx={colIdx}
              selectedDateStr={selectedDateStr}
              selectedDate={selectedDate}
              timeSlots={timeSlots}
              isSeeMoreOpen={isSeeMoreOpen}
              selectedSeeMoreId={selectedSeeMoreId}
              onSeeMoreOpenChange={handleSeeMoreOpenChange}
              onSeeMoreTriggerClick={handleSeeMoreTriggerClick}
              events={events}
              onAddEvent={addEvent}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CalendarGrid;