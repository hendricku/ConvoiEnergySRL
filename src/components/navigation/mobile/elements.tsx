import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(
  ({ theme: { breakpoints } }) => ({
    minWidth: '80vw',

    [breakpoints.up('md')]: {
      minWidth: '60vw'  
    },
  })
);

export const StyledList = styled(List)({
  flexDirection: 'column',

  display: 'flex',

  padding: '2rem 2rem'
});

export const StyledLinkWrapper = styled('div')({
  padding: '1rem 0'
});

export const StyledMenuIcon = styled(MenuIcon)(
  ({ theme: { palette } }) => ({
    marginLeft: 'auto',

    color: palette.secondary.main,

    fontSize: '2rem'
  })
);