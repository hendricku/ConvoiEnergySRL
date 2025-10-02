import { styled } from "@mui/material/styles";
import { StyledContainerProps } from "./interfaces";

export const StyledContainer = styled('div')<StyledContainerProps>(
  ({ background, theme: { breakpoints, spacing } }) => ({
    flexDirection: 'column',
    position: 'relative',
    
    display: 'flex',

    boxSizing: 'border-box',
    
    width: '100%',
    margin: 'auto',
    padding: spacing('0', 0),

    '&:before': {
      position: 'absolute',
      content: `''`,
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      backgroundImage: background
        ? `url(${background})`
        : '',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',

      zIndex: '-1',
    },    
    
    [breakpoints.up('md')]: {
      padding: spacing('0', 1),
    },
    [breakpoints.up('lg')]: {
      padding: spacing('0', 2),
    },
    [breakpoints.up('xl')]: {
      padding: spacing('0', 3),
    },
    [breakpoints.up('xxl')]: {
      padding: spacing('0', 5),
    }
  })
);

export const StyledHeaderContentContainer = styled('div')({
  width: '100%',
  maxWidth: '1440px',
  marginLeft: 'auto',
  marginRight: 'auto',
});
