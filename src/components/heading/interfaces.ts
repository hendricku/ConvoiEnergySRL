import { TypographyProps } from "@mui/material";

export interface ConvoiHeadingProps extends TypographyProps {
  align?: "center" | "right" | "left" | "inherit" | "justify"
  color?: "main" | "dark" | "darker" | "light" | "accent",
  headingContent: React.ReactElement,
  noMargin?: Boolean,
  width?: string
}

export interface StyledHeadingProps {
  align: "center" | "right" | "left" | "inherit" | "justify"
  color?: "main" | "dark" | "darker" | "light" | "accent"
  noMargin?: Boolean,
  variant?: string
  width?: string
}