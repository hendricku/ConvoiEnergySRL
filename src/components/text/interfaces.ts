export interface ConvoiTextProps {
  align?: "center" | "right" | "left" | "inherit" | "justify" | undefined,
  children?: React.ReactNode,
  color?: "main" | "accent" | "dark" | "darker" | "light" | "accent",
  display?: string,
  noMargin?: Boolean,
  size?: "sm" | "md" | "lg" | undefined,
};

export interface StyledTextProps {
  align?: "center" | "right" | "left" | "inherit" | "justify" | undefined,
  color?: string,
  display?: string,
  noMargin?: Boolean,
  size?: "sm" | "md" | "lg" | undefined,
}