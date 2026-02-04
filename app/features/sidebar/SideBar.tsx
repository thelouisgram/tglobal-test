"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Collapsible,
  Button,
} from "@chakra-ui/react";
import {
  Document,
  DocumentText,
  Notepad2,
  HamburgerMenu,
  Stickynote,
  MenuBoard,
} from "iconsax-reactjs";
import { IoChevronDown } from "react-icons/io5";

import type { MenuItemType, SidebarProps } from "@/app/types/sidebar";
import { RoosterMenuItem } from "./RoosterMenuItem";
import { MenuItem } from "./MenuItem";

const Sidebar: React.FC<SidebarProps> = ({
  activeItem = "planner",
  onMenuItemClick,
}) => {
  const [isRoosterOpen, setIsRoosterOpen] = useState(true);
  const toggleRooster = () => setIsRoosterOpen(!isRoosterOpen);

  const StartPaginaIcon = () => {
    return (
      <Image
        width={20}
        height={20}
        alt="Start Pagina"
        src="./assets/pagina.svg"
      />
    );
  };

  const Rooster = () => {
    return (
      <Image width={20} height={20} alt="Rooster" src="./assets/rooster.svg" />
    );
  };

  const menuItems: MenuItemType[] = [
    { id: "startpagina", label: "Startpagina", icon: StartPaginaIcon },
  ];

  const roosterSubItems: MenuItemType[] = [
    { id: "mijn-rooster", label: "Mijn Rooster", icon: DocumentText },
    { id: "planner", label: "Planner", icon: Stickynote, isActive: true },
    { id: "instellingen", label: "Instellingen", icon: Stickynote },
  ];

  const otherMenuItems: MenuItemType[] = [
    { id: "protocols", label: "My to do Protocols", icon: Stickynote },
    {
      id: "document-management",
      label: "Document Management",
      icon: Document,
    },
    { id: "department-news", label: "Department News", icon: Notepad2 },
    { id: "knowledge-base", label: "Knowledge Base", icon: MenuBoard },
    { id: "general-news", label: "General News", icon: DocumentText },
  ];

  const handleItemClick = (itemId: string) => {
    if (onMenuItemClick) {
      onMenuItemClick(itemId);
    }
  };

  return (
    <Box
      w="260px"
      h="100vh"
      bg="white"
      py={6}
      overflowY="auto"
      fontSize="16px"
      fontWeight="semibold"
      borderRight="1px solid"
      borderColor="#D9E5F2"
      flexShrink={0}
      position="fixed"
      left={0}
      top={0}
      zIndex={10}
    >
      <VStack align="stretch" gap={1}>
        {/* Logo Section */}
        <HStack
          justify="space-between"
          align="center"
          pl="21px"
          pr="11px"
          mb="37.1px"
        >
          <Box>
            <Image src="/assets/logo.svg" alt="Logo" width={157} height={39} />
          </Box>

          <Button
            border="1px solid"
            borderColor="gray.100"
            borderRadius="8px"
            boxSize="36px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
            p={0}
          >
            <HamburgerMenu size="24px" color="gray" />
          </Button>
        </HStack>

        {/* All Menu Items - Grouped */}
        <VStack align="stretch" pl="12px" pr="11px">
          {/* Startpagina */}
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onClick={() => handleItemClick(item.id)}
            />
          ))}

          {/* Rooster Section */}
          <Box>
            <Collapsible.Root id="sidebar-collapsible" open={isRoosterOpen}>
              <Collapsible.Trigger asChild>
                <HStack
                  p="12px"
                  cursor="pointer"
                  onClick={toggleRooster}
                  _hover={{ bg: "gray.50" }}
                  borderRadius="8px"
                  gap={3}
                >
                  <Rooster />
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    color="gray.800"
                    flex={1}
                  >
                    Rooster
                  </Text>
                  <Icon
                    as={IoChevronDown}
                    boxSize="20px"
                    color="gray.800"
                    transform={
                      isRoosterOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }
                    transition="transform 0.2s"
                    strokeWidth={2.5}
                  />
                </HStack>
              </Collapsible.Trigger>

              {/* Collapsible Rooster Content */}
              <Collapsible.Content>
                <VStack align="stretch" gap={0} mt={1}>
                  {roosterSubItems.map((item) => (
                    <RoosterMenuItem
                      key={item.id}
                      item={item}
                      isActive={
                        activeItem === item.id || (item.isActive ?? false)
                      }
                      onClick={() => handleItemClick(item.id)}
                    />
                  ))}
                </VStack>
              </Collapsible.Content>
            </Collapsible.Root>
          </Box>

          {/* Other Menu Items */}
          {otherMenuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
              onClick={() => handleItemClick(item.id)}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
