import { Box, GridItem } from "@chakra-ui/react";
import { calculateLayoutForRoom, RenderItem, events as dummyEvents, generateRandomColor } from "@/app/utils/planner";
import { EventCard } from "./EventCard";
import { SeeMoreDialog } from "./SeeMoreDialog";
import { Event } from "@/app/types/planner";

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
  events: Event[];
  onAddEvent: (event: Event) => void;
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
  events,
  onAddEvent,
}: RoomColumnProps) => {
  const roomEvents = events.filter(
    (e) => e.room === room && e.date === selectedDateStr,
  );
  const layoutItems = calculateLayoutForRoom(roomEvents);

  return (
    <GridItem
      key={colIdx}
      position="relative"
      borderRight="1px solid #E5E7EB"
      bg="white"
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={(e) => {
        e.preventDefault();
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const y = e.clientY - rect.top;
        // 120px per 30 minutes => 4px per minute
        const pxPerMinute = 4;
        const baseMinutes = 11 * 60; // 11:00
        const minutesOffset = Math.round(y / pxPerMinute);
        const slotMinutes = baseMinutes + Math.round(minutesOffset / 30) * 30;
        const hours = Math.floor(slotMinutes / 60);
        const mins = slotMinutes % 60;
        const time = `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;

        const workerData = e.dataTransfer.getData("worker");
        if (!workerData) return;
        const worker = JSON.parse(workerData);

        if (worker.status !== "available") return;

        // Calculate end time (2 hours after start)
        const endHours = hours + 2;
        const endTime = `${String(endHours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;

        // Get random color for this event
        const color = generateRandomColor();

        // Count existing events at this exact start time before adding
        const existingAtTime = events.filter(
          (ev) => ev.room === room && ev.date === selectedDateStr && ev.startTime === time,
        ).length;

        const newEvent: Event = {
          id: Date.now().toString(),
          title: worker.name,
          startTime: time,
          endTime: endTime,
          person: worker.name,
          room: room,
          color: color,
          date: selectedDateStr,
          specialist: worker.name,
        };

        onAddEvent(newEvent);

        // If there were already 2 or more events, open see more for this slot
        if (existingAtTime >= 2) {
          const seeMoreId = `seemore-${room}-${slotMinutes}`;
          onSeeMoreTriggerClick(seeMoreId);
        }
      }}
    >
      {/* Background Grid Lines */}
      {timeSlots.map((time, idx) => (
        <Box
          key={idx}
          h="120px"
          borderBottom="1px solid #E5E7EB"
          _hover={{ bg: "gray.50" }}
          transition="background-color 0.2s"
        />
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
