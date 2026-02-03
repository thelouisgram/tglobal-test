import { Event } from "@/app/types/planner";
import { RenderItem } from "@/app/utils/planner/eventLayout";
import {
  Box,
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogCloseTrigger,
  DialogPositioner,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuX } from "react-icons/lu";
import { getInitials, getEventColor } from "../utils";

interface SeeMoreDialogProps {
  item: RenderItem;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onTriggerClick: () => void;
  selectedDate: Date;
}

export const SeeMoreDialog = ({
  item,
  isOpen,
  onOpenChange,
  onTriggerClick,
  selectedDate,
}: SeeMoreDialogProps) => {
  const { position } = item;

  const formatDate = (date: Date) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const day = date.getDate();
    return `${weekday} ${day}`;
  };

  // Group events by exact start time (HH:MM)
  const groupEventsByStartTime = (events: Event[]) => {
    const grouped: { [key: string]: Event[] } = {};

    events.forEach((event) => {
      const startTime = event.startTime;
      if (!grouped[startTime]) {
        grouped[startTime] = [];
      }
      grouped[startTime].push(event);
    });

    return grouped;
  };

  const groupedEvents = groupEventsByStartTime(item.events || []);

  return (
    <DialogRoot
      key={item.id}
      open={isOpen}
      onOpenChange={(e) => onOpenChange(e.open)}
    >
      {/* Floating Trigger Component */}
      <Box
        position="absolute"
        top={`calc(${position.top} + 1px)`}
        left={`calc(${position.left})`}
        width={`calc(${position.width} - 2px)`}
        height="116px"
        border="1px solid #D1D5DB"
        borderRadius="8px"
        bg="blue.50"
        cursor="pointer"
        _hover={{ bg: "blue.100" }}
        transition="all 0.2s"
        zIndex={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={(e) => {
          e.stopPropagation();
          onTriggerClick();
        }}
      >
        <Text
          fontSize="10px"
          fontWeight="bold"
          color="#6B7280"
          textAlign="center"
        >
          See all
        </Text>
      </Box>

      <DialogPositioner>
        <DialogContent
          borderRadius="2xl"
          w="360px"
          maxH="85vh"
          overflow="hidden"
          bg="white"
          color="#242424"
          boxShadow="0px 8px 32px rgba(0, 0, 0, 0.12)"
        >
          {/* Header with Bottom Border and X Close */}
          <DialogHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={4}
            py={4}
            h="56px"
            borderBottom="1px solid"
            borderColor="#D9E5F2"
          >
            <DialogTitle fontSize="18px" fontWeight="semibold">
              {formatDate(selectedDate)}
            </DialogTitle>
            <DialogCloseTrigger
              position="static"
              color="gray.500"
              _hover={{ color: "#242424" }}
            >
              <LuX size="18px" />
            </DialogCloseTrigger>
          </DialogHeader>

          <DialogBody px={0} py={0}>
            {/* Scrollable Container with Visible Scrollbar */}
            <Box
              maxH="60vh"
              overflowY="auto"
              px={4}
              pb={4}
              css={{
                "&::-webkit-scrollbar": {
                  width: "8px",
                  padding: "2px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#F9FAFB",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#D1D5DB",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#9CA3AF",
                },
                scrollbarWidth: "thin",
                scrollbarColor: "#D1D5DB #F9FAFB",
              }}
            >
              {Object.entries(groupedEvents).map(
                ([startTime, events]: [string, Event[]], groupIndex) => (
                  <Box key={startTime} mt={groupIndex === 0 ? 4 : 6}>
                    {/* Time Header */}
                    <Text
                      fontWeight="semibold"
                      fontSize="16px"
                      mb={2}
                      color="#242424"
                    >
                      {startTime}
                    </Text>

                    {/* Events with same start time */}
                    <VStack align="stretch" gap="8px">
                      {events.map((event) => {
                        const colors = getEventColor(event.color);
                        return (
                          <Box
                            key={event.id}
                            border="1px solid"
                            borderColor={colors.border}
                            bg={colors.bg}
                            borderRadius="xl"
                            px="10px"
                            py="8px"
                          >
                            <HStack gap="6px" align="center">
                              <Box
                                w="38px"
                                h="38px"
                                borderRadius="full"
                                bg="white"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontWeight="bold"
                                fontSize="12px"
                                color="#7E919F"
                              >
                                {getInitials(event.person)}
                              </Box>
                              <Box flex="1">
                                <HStack gap={2} align="baseline">
                                  <Text
                                    fontWeight="semibold"
                                    color="#242424"
                                    fontSize="14px"
                                  >
                                    {event.title}
                                  </Text>
                                  <Text
                                    fontSize="12px"
                                    color="#4E5D69"
                                    fontWeight="medium"
                                  >
                                    {event.startTime} - {event.endTime}
                                  </Text>
                                </HStack>
                                <Text
                                  fontSize="12px"
                                  fontWeight="semibold"
                                  color={colors.border}
                                >
                                  {event.person}
                                </Text>
                              </Box>
                            </HStack>
                          </Box>
                        );
                      })}
                    </VStack>
                  </Box>
                ),
              )}
            </Box>
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};
