import React from "react";

export interface ConvoiDataBoxProps {
  callToAction?: DataBoxCtoProps,
  backgroundColor: string,
  content: string,  
  icon?: React.ReactElement,
  heading: React.ReactElement,
  textColor?: "main" | "dark" | "light" | "accent",
};

interface DataBoxCtoProps {
  label: string,
  url: string,
};

export interface StyledDataBoxContainerProps {
  color?: string,
  textColor?: "main" | "dark" | "light" | "accent",
}

export interface StyledDataBoxIconProps {
  backgroundColor: string,
  color: string,
}