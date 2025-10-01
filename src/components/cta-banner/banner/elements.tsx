import { styled } from "@mui/material/styles";

import { ConvoiCtaBannerProps } from "./intefaces";

export const StyledBannerContainer = styled('div')<ConvoiCtaBannerProps>(
  ({ backgroundImage, theme: { breakpoints } }) => ({    
    justifyContent: 'center',
    flexDirection: 'column',
    
    display: 'flex',
    position: 'relative',

    minHeight: '60vh',
    width: '100%',    

    '&:before': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: '""',
      background: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      zIndex: '-1',
    },

    '&:after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: '""',
      background: 'rgba(0,0,0,.4)',
      zIndex: '-1',
    },    

    [breakpoints.up('xxl')]: {
      minHeight: '40vh',      
    }
  })
)