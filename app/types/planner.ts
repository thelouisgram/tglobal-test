export interface DropDownProps {
  handleOptionClick: (option: string) => void;
}

export interface MenuItem {
  label: string;
  hasIcon?: boolean;
}