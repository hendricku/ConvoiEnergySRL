import { styled } from "@mui/material/styles";

import { StyledDataBoxContainerProps, StyledDataBoxIconProps } from "./interfaces";
import {
  getBackgroundColor,
  getHeadingSize,
  getTextColor
} from "../../lib/utils/utils";
import { ConvoiHeading } from "../heading/heading";

export const StyledDataBoxContainer = styled('div')<StyledDataBoxContainerProps>(
  ({ color, textColor, theme: { breakpoints, palette } }) => ({
    alignItems: 'center',
    flexDirection: 'column',
    
    display: 'flex',

    boxSizing: 'border-box',

    padding: '10rem 2rem 4rem 2rem',
    width: '100%',
    height: 'auto',
    borderRadius: '1.5rem',

    backgroundColor: getBackgroundColor(color, palette),

    'a': {
      marginTop: 'auto',

      color: getTextColor(textColor, palette),

      '&:hover': {
        color: getTextColor(textColor, palette),
      }
    },

    [breakpoints.up('md')]: {
      padding: '10rem 2rem 2rem 2rem'
    },

    [breakpoints.up('xl')]: {
      padding: '10rem 2rem 6rem 2rem'
    },
  })
);  

export const StyledDataBoxIcon = styled('div')<StyledDataBoxIconProps>(
  ({ backgroundColor, color, theme: { breakpoints, palette } }) => ({
    marginTop: '-16rem',
    marginBottom: '2rem',
    padding: '2rem',

    border: '15px #FFF solid',
    borderRadius: '50%',
    color: getTextColor(color, palette),
    background: getBackgroundColor(backgroundColor, palette),    

    '*': {
      fontSize: '5rem !important',
    },

    [breakpoints.up('xl')]: {
      marginBottom: '4rem',
    },
  })
);

export const StyledDataBoxHeading = styled(ConvoiHeading)(
  ({ variant, theme: { breakpoints } }) => ({
    marginBottom: '2rem',

    fontSize: getHeadingSize(variant, 'xs'),
    fontWeight: '800',

    [breakpoints.up('md')]: {
      fontSize: getHeadingSize(variant, 'md'),
    },

    [breakpoints.up('lg')]: {
      fontSize: getHeadingSize(variant, 'lg'),
    },

    [breakpoints.up('xl')]: {
      fontSize: getHeadingSize(variant, 'xl'),
    },
  })
);

export const StyledConvoiTextContainer = styled('div')({
  '*': {
    fontSize: '1rem !important',
    lineHeight: '1.8rem !important',
  }
});