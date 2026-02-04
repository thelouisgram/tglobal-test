"use client";
import { Box, VStack } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { getWorkersWithInitials } from "./components/Roster/utils";
import type { Worker } from "@/app/types/planner";
import { RosterHeader } from "./components/Roster/RosterHeader";
import { SearchBar } from "./components/Roster/SearchBar";
import { RosterTabs } from "./components/Roster/RosterTabs";
import { WorkerItem } from "./components/Roster/WorkerItem";

const Roster = () => {
  const [isActive, setIsActive] = useState("available");
  const [search, setSearch] = useState("");

  const workers: Worker[] = getWorkersWithInitials();
  const workersTab = ["all", "available", "on leave"];

  const filteredWorkers = useMemo(() => {
    return workers.filter((worker) => {
      const matchesSearch = worker.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesTab =
        isActive === "all" ? true : worker.status === isActive;

      return matchesSearch && matchesTab;
    });
  }, [search, isActive]);

  const getCount = (tab: string) => {
    if (tab === "all") return workers.length;
    return workers.filter((w) => w.status === tab).length;
  };

  return (
    <Box pl="30px">
      <VStack
        w="360px"
        bg="white"
        borderRadius="16px"
        overflow="hidden"
        border="2px solid #F3F4F6"
        flexShrink={0}
        height="fit-content"
        p={"24px"}
        gap={"20px"}
      >
        {/* Roster Header */}
        <RosterHeader />
        {/* Search bar */}
        <SearchBar value={search} onChange={setSearch} />
        {/* Tabs */}
        <RosterTabs
          tabs={workersTab}
          activeTab={isActive}
          onTabChange={setIsActive}
          getCount={getCount}
        />
        {/* Workers List */}
        <VStack w="full" gap="10px">
          {filteredWorkers.map((worker) => (
            <WorkerItem key={worker.id} worker={worker} />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Roster;
