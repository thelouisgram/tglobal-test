import { Event } from "@/app/types/planner";
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
import { getInitials, getEventColor } from "@/app/utils/planner/planner";

interface EventDetailsDialogProps {
  event: Event | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EventDetailsDialog = ({
  event,
  isOpen,
  onOpenChange,
}: EventDetailsDialogProps) => {
  if (!event) return null;
  const colors = getEventColor(event.color);

  return (
    <DialogRoot
      placement="center"
      open={isOpen}
      onOpenChange={(e) => onOpenChange(e.open)}
    >
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
              Event Details
            </DialogTitle>
            <DialogCloseTrigger
              position="static"
              color="gray.500"
              _hover={{ color: "#242424" }}
              cursor={"pointer"}
            >
              <LuX size="18px" />
            </DialogCloseTrigger>
          </DialogHeader>

          <DialogBody px={4} py={6}>
            <VStack align="stretch" gap={4}>
              <Box
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
                      <Text fontSize="12px" color="#4E5D69" fontWeight="medium">
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

              <VStack align="stretch" gap={2}>
                <HStack justify="space-between">
                  <Text color="gray.500" fontSize="14px">
                    Specialist
                  </Text>
                  <Text
                    fontWeight="semibold"
                    fontSize="14px"
                    color={colors.border}
                  >
                    {event.person}
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Text color="gray.500" fontSize="14px">
                    Room
                  </Text>
                  <Text fontWeight="semibold" fontSize="14px">
                    {event.room}
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Text color="gray.500" fontSize="14px">
                    Date
                  </Text>
                  <Text fontWeight="semibold" fontSize="14px">
                    {event.date}
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </DialogBody>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};
