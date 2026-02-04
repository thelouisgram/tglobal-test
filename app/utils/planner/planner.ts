export const formatDate = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear()
    };
  };

import { generateRandomColor } from "./colorUtils";
import { formatDate as _formatDate } from "./planner";
import { Event } from "@/app/types/planner";

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

export const randomColor = generateRandomColor;

export default {
  getInitials,
  getEventColor,
  groupEventsByHour,
  formatDate,
  randomColor,
};
