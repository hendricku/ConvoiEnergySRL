import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { getHeadingSize, getTextHiglighted } from "../..//lib/utils/utils";

export const StyledHeroButtonContainer = styled('div')({
  display: 'flex'
});

export const StyledHeroContainer = styled('div')(
  ({ theme: { breakpoints } }) => ({
    gap: '2rem',
    
    display: 'flex',
    
    padding: '8rem 0 6rem 0',

    [breakpoints.up('sm')]: {
      padding: '9rem 0 6rem 0'
    },

    [breakpoints.up('md')]: {
      padding: '10rem 0 6rem 0'
    },

    [breakpoints.up('lg')]: {
      gap: '4rem',

      marginBottom: '-8rem',
    },

    [breakpoints.up('xl')]: {
      marginBottom: '-24rem',
    },

    [breakpoints.up('xxxl')]: {
      padding: '12rem 0 6rem 0',
    },
  })
);


export const StyledHeroContent = styled('div')({
  flexDirection: 'column',
  
  display: 'flex',
});

export const StyledHeroImageGrid = styled('div')(
  ({ theme: { breakpoints } }) => ({
    display: 'none',  
    
    [breakpoints.up('md')]: {
      display: 'block',    
    },
  })
)

export const StyledHeroTypographyHeading = styled(Typography)(
  ({ variant, theme: { breakpoints, palette } }) => ({    
    color: palette.secondary.dark,

    fontSize: getHeadingSize(variant, 'xs'),
    fontWeight: 'bold',
    letterSpacing: '-2px',

    zIndex: '1',

    [breakpoints.up('md')]: {
      marginLeft: '-10rem',
      fontSize: getHeadingSize(variant, 'md'),
    },

    [breakpoints.up('lg')]: {
      marginLeft: '-12rem',

      fontSize: getHeadingSize(variant, 'lg'),
    },

    [breakpoints.up('xl')]: {
      marginLeft: '-18rem',

      fontSize: getHeadingSize(variant, 'xl'),
    },
  })
);

export const StyledHeroTypographyHighlighted = styled('span')(
  ({ theme: { palette } }) => ({
    color: getTextHiglighted(palette)
  })
);