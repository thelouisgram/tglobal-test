import { Event } from "@/app/types/planner";

const COLORS: Array<"orange" | "green" | "gold"> = ["orange", "green", "gold"];

export const generateEventColor = (index: number): "orange" | "green" | "gold" => {
  return COLORS[index % COLORS.length];
};

export const generateRandomColor = (): "orange" | "green" | "gold" => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

export const getInitials = (name: string): string => {
  const parts = name.split(" ").filter((p) => p.length > 0);
  if (parts.length === 0) return "";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
};

export const getEventColor = (color: "orange" | "green" | "gold" = "orange") => {
  const colors = {
    orange: { border: "#F97316", bg: "#FFF7ED" },
    green: { border: "#10B981", bg: "#F0FDF4" },
    gold: { border: "#A19712", bg: "#FEFCE8" },
  } as const;
  return color in colors ? colors[color] : colors.orange;
};

export const groupEventsByHour = (events: Event[] = []) => {
  if (!events) return {} as Record<string, Event[]>;
  return events.reduce((acc: Record<string, Event[]>, event) => {
    const hour = event.startTime?.split(":")[0] + ":00" || "00:00";
    if (!acc[hour]) acc[hour] = [];
    acc[hour].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
};
