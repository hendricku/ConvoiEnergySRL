import { styled } from "@mui/material/styles";

import { StyledHeaderContainerProps, StyledHeaderLogoProps } from "./interfaces";

export const StyledHeaderContainer = styled('div')<StyledHeaderContainerProps>(
  ({ scroll, theme: { palette } }) => ({        
    position: 'fixed',
    top: 0,
    left: 0,
    borderBottom: `3px ${palette.primary.light} solid`,
    width: '100%',
    minHeight: '6vh',

    background: scroll
      ? '#ffffff'
      : 'transparent',

    zIndex: 999,
    transition: 'all .2s ease-out',
  })
);

export const StyledHeaderWrapper = styled('div')({
  alignItems: 'center',
  justifyContent: 'space-between',

  display: 'flex',
});

export const StyledHeaderLogo = styled('div')<StyledHeaderLogoProps>(
  ({ scroll }) => ({
    transition: 'all .2s ease-out',

    'img': {
      width: scroll
        ? '160px !important'
        : '200px',
    },
  })
);

export const StyledNavigation = styled('div')({
  alignItems: 'center',
  display: 'flex'    
});