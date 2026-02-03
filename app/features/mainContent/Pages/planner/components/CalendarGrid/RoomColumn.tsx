import { Box, GridItem } from "@chakra-ui/react";
import {
  calculateLayoutForRoom,
  RenderItem,
} from "@/app/utils/planner/eventLayout";
import { EventCard } from "./EventCard";
import { SeeMoreDialog } from "./SeeMoreDialog";
import dummyEvents from "@/app/utils/planner/events";

interface RoomColumnProps {
  room: string;
  colIdx: number;
  selectedDateStr: string;
  selectedDate: Date;
  timeSlots: string[];
  isSeeMoreOpen: boolean;
  selectedSeeMoreId: string | null;
  onSeeMoreOpenChange: (open: boolean) => void;
  onSeeMoreTriggerClick: (id: string) => void;
}

export const RoomColumn = ({
  room,
  colIdx,
  selectedDateStr,
  selectedDate,
  timeSlots,
  isSeeMoreOpen,
  selectedSeeMoreId,
  onSeeMoreOpenChange,
  onSeeMoreTriggerClick,
}: RoomColumnProps) => {
  const roomEvents = dummyEvents.filter(
    (e) => e.room === room && e.date === selectedDateStr,
  );
  const layoutItems = calculateLayoutForRoom(roomEvents);

  return (
    <GridItem
      key={colIdx}
      position="relative"
      borderRight="1px solid #E5E7EB"
      bg="white"
    >
      {/* Background Grid Lines */}
      {timeSlots.map((_, idx) => (
        <Box key={idx} h="120px" borderBottom="1px solid #E5E7EB" />
      ))}

      {/* Foreground Events */}
      {layoutItems.map((item: RenderItem) => {
        if (item.type === "event" && item.data) {
          return (
            <EventCard
              key={item.id}
              event={item.data}
              position={item.position}
            />
          );
        }

        if (item.type === "seemore" && item.events) {
          return (
            <SeeMoreDialog
              key={item.id}
              item={item}
              isOpen={isSeeMoreOpen && selectedSeeMoreId === item.id}
              onOpenChange={onSeeMoreOpenChange}
              onTriggerClick={() => onSeeMoreTriggerClick(item.id)}
              selectedDate={selectedDate}
            />
          );
        }

        return null;
      })}
    </GridItem>
  );
};
