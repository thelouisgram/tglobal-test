import { HStack, Button, VStack, Text, Box } from "@chakra-ui/react";
import { Setting2, Notification, ArrowDown2 } from "iconsax-reactjs";
import Image from "next/image";

const GlobalHeader = () => {
  return (
    // Header
    <HStack
      h="100px"
      w="full"
      borderBottom="1px solid"
      borderColor="#D9E5F2"
      justifyContent="end"
      p="24px"
      gap={66}
    >
      {/* Header Buttons */}
      <HStack gap="18px">
        {/* Home Button */}
        <Button
          borderRadius="8px"
          width="40px"
          height="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          bg="#F6FAFD"
          p={0}
        >
          <Image
            src="/assets/home-header.svg"
            alt="home-header"
            width={24}
            height={24}
          />
        </Button>
        {/* Settings Button */}
        <Button
          borderRadius="8px"
          width="40px"
          height="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          bg="#F6FAFD"
          p={0}
        >
          <Setting2 size="24px" color="black" />
        </Button>
        {/* Notification Button */}
        <Button
          borderRadius="8px"
          width="40px"
          height="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          _hover={{ bg: "gray.50" }}
          bg="#F6FAFD"
          p={0}
        >
          <Notification size="24px" color="black" />
          <Box
            position="absolute"
            top="10px"
            right="10px"
            width="8px"
            height="8px"
            borderRadius="50%"
            bg="red.600"
          />
        </Button>
      </HStack>
      {/* User Profile */}
      <HStack>
        <VStack alignItems="start" gap={0} fontFamily="Plus Jakarta Sans">
          <Text color="gray.600" fontWeight="bold" fontSize={14}>
            Paul Cornelius
          </Text>
          <Text color="gray.500" fontSize={12}>
            Paul@dstrct.com
          </Text>
        </VStack>
        <Button pl="16px">
          <ArrowDown2 width={20} height={20} color="gray" />
        </Button>
      </HStack>
    </HStack>
  );
};

export default GlobalHeader;
