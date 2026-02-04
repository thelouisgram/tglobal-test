import type { Worker } from "@/app/types/planner";
import { workersList } from "./workers";

export const generateInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
};

export const getWorkersWithInitials = (): Worker[] => {
  return workersList.map((worker) => ({
    ...worker,
    initials: generateInitials(worker.name),
  }));
};
