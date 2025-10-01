import { styled } from "@mui/material/styles";
import { breakpoints, lineHeight } from "@mui/system";

export const StyledDivider = styled('hr')(
  ({ theme: { palette } }) => ({  
    margin: '4rem 0 2rem 0',  
    borderColor: palette.text.main
  })
);

export const StyledFooterContainer = styled('div')(
  ({ theme: { palette } }) => ({
    padding: '4rem 0 2rem 0',
    background: palette.secondary.dark
  })
);

export const StyledFooterDetailsWrapper = styled('div')(
  ({ theme: { breakpoints } }) => ({
    flexDirection: 'column',
    alignItems: 'center', 
    gap: '1rem',
       
    display: 'flex',  

    margin: '2rem 0',

    'h4': {
      textAlign: 'center',
    },

    [breakpoints.up('md')]: {      
      alignItems: 'flex-start',      

      'h4': {
        textAlign: 'left',
      },
    }
  })
);  

export const StyledFooterUpperWrapper = styled('div')(
  ({ theme: { breakpoints } }) => ({
    flexDirection: 'column',
    alignItems: 'center',   
    justifyContent: 'space-around', 

    display: 'flex',  

    [breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    }
})
);

export const StyledFooterDataWrapper = styled('div')(
  ({ theme: { breakpoints } }) => ({
    flexDirection: 'column',
    
    display: 'flex',

    textAlign: 'center',

    'a': {
      lineHeight: '1.5rem',
    },

    [breakpoints.up('md')]: {
      textAlign: 'left',

      'a': {
        lineHeight: '1.8rem'
      },
    }
  })
);