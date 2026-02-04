import { workersList } from "./workers";
import type { Worker } from "@/app/types/planner";

export const getInitials = (name: string): string => {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

export const getWorkersWithInitials = (): Worker[] => {
  return workersList.map((worker) => ({
    ...worker,
    initials: (worker as any).initials || getInitials(worker.name),
  })) as Worker[];
};

export default getWorkersWithInitials;