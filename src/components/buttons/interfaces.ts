import { ButtonProps } from "@mui/material/Button";

export interface ButtonCustomProps extends ButtonProps {  
  align?: "left" | "center" | "right",
  backgroundColor?: string,
  iconSize?: "xs" | "sm" | "md" | "lg",
  isLoading?: boolean | undefined,
  label?: string,
  noPadding?: Boolean,
  textColor?: "main" | "dark" | "light" | "accent",
}

export interface StyledButtonProps {
  align: "left" | "center" | "right",
  backgroundColor: string,
  iconSize: "xs" | "sm" | "md" | "lg",
  noPadding: Boolean,
  textColor: "main" | "dark" | "light" | "accent",
}