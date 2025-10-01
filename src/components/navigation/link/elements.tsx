import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

import { LinkCustomProps } from "./interfaces";
import { getTextColor, getTextSize } from "../../../lib/utils/utils";

export const StyledNavigationLink = styled(Link)<LinkCustomProps>(
  ({ linkColor, size, theme: { breakpoints, palette, typography } }) => ({
    color: getTextColor(linkColor, palette),
    fontFamily: typography.fontFamily,
    fontSize: getTextSize(size, 'xs'),
    textDecoration: 'none',

    [breakpoints.up('sm')]: {
      fontSize: getTextSize(size, 'sm'),
    },

    [breakpoints.up('md')]: {
      fontSize: getTextSize(size, 'md'),
    }, 
  })
);