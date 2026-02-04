import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import type { Worker } from "@/app/types/planner";
import Card from "@/app/components/ui/Card";

interface WorkerItemProps {
  worker: Worker;
}

export const WorkerItem = ({ worker }: WorkerItemProps) => {
  return (
    <Card>
      <HStack
        w="full"
        justifyContent={"start"}
        gap="10px"
        draggable
        cursor="grab"
        _active={{ cursor: "grabbing" }}
        onDragStart={(e) => {
          e.dataTransfer.setData("worker", JSON.stringify(worker));
        }}
      >
      {/* Avatar */}
      <Box
        w="40px"
        h="40px"
        bg="#F3F5F7"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="14px" fontWeight="semibold" color="#4E5D69">
          {worker.initials}
        </Text>
      </Box>

      {/* Info */}
      <VStack alignItems="start" gap="6px" flex={1}>
        <Text fontSize="14px" fontWeight="semibold" color="#242424">
          {worker.name}
        </Text>

        <HStack>
          <Text
            fontSize="10px"
            fontWeight="medium"
            color="#4E5D69"
            p="4px "
            bg="#F0F5FA"
            borderRadius="6px"
          >
            {worker.fullTimeStr}
          </Text>

          <Text
            fontSize="10px"
            fontWeight="medium"
            color="#4E5D69"
            p="4px "
            bg="#F0F5FA"
            borderRadius="6px"
          >
            {worker.hours}
          </Text>
        </HStack>

        <Box
          color="#EF2E2E"
          bg="#FEECEC"
          p="4px "
          borderRadius="6px"
          fontSize="10px"
          fontWeight="medium"
        >
          {worker.availableFrom} - {worker.availableTo}
        </Box>
      </VStack>

      {/* Status + Days */}
      <VStack alignItems="flex-end" gap="8px">
        <HStack
          gap="8px"
          bg={worker.status === "available" ? "#eafeebff" : "#FEECEC"}
          p="6px "
          borderRadius="full"
        >
          <Box
            w="3px"
            h="3px"
            bg={worker.status === "available" ? "#28C76F" : "#EF2E2E"}
            borderRadius="full"
          />
          <Text
            fontSize="10px"
            fontWeight="medium"
            color={worker.status === "available" ? "#28C76F" : "#EF2E2E"}
          >
            {worker.status === "available" ? "Available" : "On leave"}
          </Text>
        </HStack>

        <HStack gap="4px">
          {worker.days.map((day, i) => (
            <HStack
              key={i}
              bg={day.active ? "#eafeebff" : "#FEECEC"}
              w="18px"
              h="18px"
              borderRadius="full"
              justifyContent="center"
            >
              <Text
                fontSize="10px"
                fontWeight="medium"
                color={day.active ? "#28C76F" : "#EF2E2E"}
              >
                {day.label}
              </Text>
            </HStack>
          ))}
        </HStack>
      </VStack>
      </HStack>
    </Card>
  );
};
