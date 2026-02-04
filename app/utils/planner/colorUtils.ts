const COLORS: Array<"orange" | "green" | "gold"> = ["orange", "green", "gold"];

export const generateEventColor = (index: number): "orange" | "green" | "gold" => {
  return COLORS[index % COLORS.length];
};

export const generateRandomColor = (): "orange" | "green" | "gold" => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};
