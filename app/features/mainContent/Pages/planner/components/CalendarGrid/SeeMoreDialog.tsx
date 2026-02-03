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
import { getInitials, getEventColor, groupEventsByHour } from "../utils";

interface SeeMoreDialogProps {
  item: any;
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
        height="100px"
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
        <Text fontSize="14px" fontWeight="bold" color="#6B7280">
          +{item.overflowCount}
        </Text>
      </Box>

      <DialogPositioner>
        <DialogContent
          borderRadius="2xl"
          maxW="360px"
          w="100%"
          maxH="85vh"
          overflow="hidden"
          bg="white"
          color="black"
          boxShadow="0px 8px 32px rgba(0, 0, 0, 0.12)"
          border="1px solid"
          borderColor="gray.100"
        >
          {/* Header with Bottom Border and X Close */}
          <DialogHeader
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={5}
            py={4}
            borderBottom="1px solid"
            borderColor="gray.100"
          >
            <DialogTitle fontSize="xl" fontWeight="bold">
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
              })}
            </DialogTitle>
            <DialogCloseTrigger
              position="static"
              color="gray.500"
              _hover={{ color: "black" }}
            >
              <LuX size="20px" />
            </DialogCloseTrigger>
          </DialogHeader>

          <DialogBody px={0} py={0}>
            {/* Scrollable Container with Subtle White Scrollbar */}
            <Box
              maxH="60vh"
              overflowY="auto"
              px={5}
              pb={5}
              css={{
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "white",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "white", // Minimalist white
                  border: "2px solid white", // Creates padding effect
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#F3F4F6", // Shows light gray only on hover
                },
                msOverflowStyle: "none",
                scrollbarWidth: "thin",
                scrollbarColor: "white white",
              }}
            >
              {Object.entries(groupEventsByHour(item.events)).map(
                ([hour, events]: [string, any[]]) => (
                  <Box key={hour} mb={6} mt={4}>
                    <Text
                      fontWeight="bold"
                      fontSize="lg"
                      mb={3}
                      color="gray.800"
                    >
                      {hour}
                    </Text>
                    <VStack align="stretch" gap={4}>
                      {events.map((event) => {
                        const colors = getEventColor(event.color);
                        return (
                          <Box
                            key={event.id}
                            border="1px solid"
                            borderColor={colors.border}
                            bg={colors.bg}
                            borderRadius="xl"
                            px={4}
                            py={3}
                          >
                            <HStack gap={3} align="center">
                              <Box
                                w="38px"
                                h="38px"
                                borderRadius="full"
                                bg="white"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontWeight="bold"
                                border="1px solid"
                                borderColor="gray.200"
                              >
                                {getInitials(event.person)}
                              </Box>
                              <Box flex="1">
                                <HStack gap={2} align="baseline">
                                  <Text
                                    fontWeight="bold"
                                    color="gray.800"
                                    fontSize="md"
                                  >
                                    {event.title}
                                  </Text>
                                  <Text
                                    fontSize="sm"
                                    color="gray.500"
                                    fontWeight="medium"
                                  >
                                    {event.startTime} - {event.endTime}
                                  </Text>
                                </HStack>
                                <Text
                                  fontSize="sm"
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
