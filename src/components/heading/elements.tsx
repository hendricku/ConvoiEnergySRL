import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { getHeadingMarginBottom, getHeadingSize, getTextColor } from "../..//lib/utils/utils";
import { StyledHeadingProps } from "./interfaces";

export const StyledHeading = styled(Typography)<StyledHeadingProps>(
  ({ color, noMargin, variant, width, theme: { breakpoints, palette } }) => ({   
    border: 'none', 
    marginRight: width
      ? 'auto'
      : 'unset',
    marginBottom: noMargin 
      ? '0'
      : getHeadingMarginBottom(variant),
    marginLeft: width
      ? 'auto'
      : 'unset',
    width: '100%',
    
    color: getTextColor(color, palette),
    fontWeight: 'bold',
    fontSize: getHeadingSize(variant, 'xs'),

    [breakpoints.up('sm')]: {
      width: width ?? '100%',

      fontSize: getHeadingSize(variant, 'sm'),
    },

    [breakpoints.up('md')]: {            
      fontSize: getHeadingSize(variant, 'md'),
    },

    [breakpoints.up('lg')]: {
      fontSize: getHeadingSize(variant, 'lg'),
    },

    [breakpoints.up('xl')]: {
      fontSize: getHeadingSize(variant, 'xl'),
    },

    [breakpoints.up('xxl')]: {
      fontSize: getHeadingSize(variant, 'xxl'),
    },
  })
);