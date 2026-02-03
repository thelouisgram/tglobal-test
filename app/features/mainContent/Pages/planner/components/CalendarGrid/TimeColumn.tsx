import { Box, GridItem, Text } from "@chakra-ui/react";

interface TimeColumnProps {
  timeSlots: string[];
}

export const TimeColumn = ({ timeSlots }: TimeColumnProps) => {
  return (
    <GridItem gridColumn="1" display="flex" flexDirection="column">
      {timeSlots.map((time, idx) => (
        <Box
          key={idx}
          h="120px"
          borderRight="1px solid #E5E7EB"
          borderBottom="1px solid #E5E7EB"
          px="16px"
          py="8px"
          bg="white"
        >
          <Text fontSize="14px" color="#242424" fontWeight="medium">
            {time}
          </Text>
        </Box>
      ))}
    </GridItem>
  );
};
