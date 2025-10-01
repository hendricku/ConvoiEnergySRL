import { getTextColor, getTextLineHeight, getTextSize } from "../../lib/utils/utils";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { StyledTextProps } from "./interfaces";

export const StyledText = styled(Typography)<StyledTextProps>(
  ({ align, color, display, noMargin, size, theme: { breakpoints, palette, typography } }) => ({
    display: display,

    marginBottom: noMargin === true
      ? '0'
      : '4rem',

    color: color
      ? getTextColor(color, palette)
      : getTextColor('main', palette),
    fontFamily: typography.fontFamily,
    fontSize: getTextSize(size, 'xs'),
    fontWeight: typography.fontWeightLight,
    lineHeight: getTextLineHeight(size, 'xs'),
    textAlign: align,

    [breakpoints.up('sm')]: {
      fontSize: getTextSize(size, 'sm'),
      lineHeight: getTextLineHeight(size, 'sm'),
    },

    [breakpoints.up('md')]: {
      fontSize: getTextSize(size, 'md'),
      lineHeight: getTextLineHeight(size, 'md'),
    }, 
  })
)