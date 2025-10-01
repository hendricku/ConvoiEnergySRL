import Image from "next/image";

import { styled } from "@mui/material/styles";
import { borderBottom } from "@mui/system";

export const StyledImage = styled(Image)(
  ({ theme: { breakpoints } }) => ({
    width: '160px',
    height: '220px',

    [breakpoints.up('lg')]: {
      width: '200px',
      height: '280px',
    },

    [breakpoints.up('xl')]: {
      width: '300px',
      height: '400px',
    }
  })
);

export const StyledImageGridContainer = styled('div')(
  ({ theme: { breakpoints } }) => ({
    gap: '1rem',
    
    display: 'flex',

    width: '-webkit-fit-content',    

    [breakpoints.up('lg')]: {
      gap: '2rem',
    },
  })
);

export const StyledImageGridWrapper = styled('div')(
  ({ theme: { breakpoints } }) => ({
    flexDirection: 'column',
    gap: '1rem',
    
    display: 'flex',

    '&:last-child': {
      marginTop: '150px'
    },

    [breakpoints.up('md')]: {
      '&:last-child': {
        marginTop: '110px'
      }
    },

    [breakpoints.up('lg')]: {
      gap: '2rem',      

      '&:last-child': {
        marginTop: '130px'
      }
    },

    [breakpoints.up('xl')]: {
      gap: '2rem',

      '&:last-child': {
        marginTop: '160px'
      }
    },
  })
);