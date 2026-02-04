"use client";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { getInitials, getEventColor } from "@/app/utils/planner/planner";
import { EventDetailsDialog } from "./EventDetailsDialog";
import { Event } from "@/app/types/planner";
import { useState } from "react";

interface EventCardProps {
  event: Event;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

export const EventCard = ({ event, position }: EventCardProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const colors = getEventColor(event.color);

  return (
    <>
      <Box
        position="absolute"
        top={`calc(${position.top} + 1px)`}
        left={`calc(${position.left} + 1px)`}
        width={`calc(${position.width} - 2px)`}
        height={`calc(${position.height} - 2px)`}
        border={`1px solid ${colors.border}`}
        borderRadius="8px"
        p={2}
        bg={colors.bg}
        cursor="pointer"
        transition="all 0.2s"
        zIndex={1}
        overflow="hidden"
        onClick={(e) => {
          e.stopPropagation();
          setIsDetailsOpen(true);
        }}
      >
        <VStack align="start" gap={0} h="full">
          <HStack
            bg="white"
            borderRadius="full"
            w={"28px"}
            h={"28px"}
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="10px" fontWeight="semibold" color="#7E919F">
              {getInitials(event.person)}
            </Text>
          </HStack>

          <Text
            fontSize="12px"
            fontWeight="semibold"
            color="#242424"
            lineClamp={1}
            textOverflow="ellipsis"
          >
            {event.title}
          </Text>
          <Text fontSize="10px" color="gray.600">
            {event.startTime} - {event.endTime}
          </Text>
          <Text fontSize="10px" color={colors.border} fontWeight="medium">
            {event.person}
          </Text>
        </VStack>
      </Box>

      <EventDetailsDialog
        event={event}
        isOpen={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
      />
    </>
  );
};
