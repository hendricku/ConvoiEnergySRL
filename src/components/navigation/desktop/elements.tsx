import { styled } from "@mui/material/styles";

import { StyledNavigationListItemProps } from "./interfaces";

export const StyledNavigationList = styled('ul')({
  gap: '2rem',

  display: 'flex',

  margin: 0,
  height: '100%',
  padding: 0,

  listStyle: 'none'
});

export const StyledNavigationListItem = styled('li')<StyledNavigationListItemProps>(
  ({ active, theme: { breakpoints, palette } }) => ({
    alignItems: 'center',
    
    display: 'flex',

    borderBottom: active 
      ? '5px solid transparent'
      : '5px solid transparent',
    borderImage: active 
      ? `linear-gradient(to right, ${palette.primary.main}, transparent)`
      : '',
    borderImageSlice: active ? 1 : '',
    borderImageOutset: '4px',
    padding: '4px 0 0 0',

    [breakpoints.up('xxl')]: {
      borderImageOutset: '8px',
    }
  })
);