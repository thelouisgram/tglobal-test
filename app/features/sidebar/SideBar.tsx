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
  Calendar,
  Document,
  CalendarEdit,
  Setting2,
  DocumentText,
  Notepad2,
  Book,
  ArrowDown2,
  HamburgerMenu,
} from "iconsax-reactjs";

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
        src="./assets/startpagina.svg"
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
    { id: "planner", label: "Planner", icon: CalendarEdit, isActive: true },
    { id: "instellingen", label: "Instellingen", icon: Setting2 },
  ];

  const otherMenuItems: MenuItemType[] = [
    { id: "protocols", label: "My to do Protocols", icon: DocumentText },
    {
      id: "document-management",
      label: "Document Management",
      icon: Document,
    },
    { id: "department-news", label: "Department News", icon: Notepad2 },
    { id: "knowledge-base", label: "Knowledge Base", icon: Book },
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
      fontWeight='semibold'
    >
      <VStack align="stretch" gap={1}>
        {/* Logo Section */}
        <HStack
          justify="space-between"
          align="center"
          pl="21px"
          pr="11px"
          mb='37.1px'
        >
          <Box>
            <Image src="/assets/logo.svg" alt="Logo" width={157} height={39} />
          </Box>

          <Button
            border="1px solid"
            borderColor="#F0F5FA"
            borderRadius="8px"
            width="36px"
            height="36px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            _hover={{ bg: "gray.50" }}
          >
            <HamburgerMenu size={20} color="#2D3648" />
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
            <Collapsible.Root open={isRoosterOpen}>
              <Collapsible.Trigger asChild>
                <HStack
                  p="12px"
                  cursor="pointer"
                  onClick={toggleRooster}
                  _hover={{ bg: "#F7FAFC" }}
                  borderRadius="8px"
                  gap={3}
                >
                  <Rooster />
                  <Text fontSize="16px" fontWeight="bold" color="#2D3648" flex={1}>
                    Rooster
                  </Text>
                  <Icon
                    as={ArrowDown2}
                    boxSize="20px"
                    color="#2D3648"
                    transform={isRoosterOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    transition="transform 0.2s"
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