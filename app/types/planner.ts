export interface DropDownProps {
  handleOptionClick: (option: string) => void;
}

export interface MenuItem {
  label: string;
  hasIcon?: boolean;
}

export interface Event {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  person: string;
  room: string;
  color: "orange" | "green" | "gold";
  date: string; // Format: YYYY-MM-DD
  specialist: string;
}