import { styled } from "@mui/material/styles";
import { StyledLogoImageProps } from "./interfaces";

export const StyledLogoImage = styled('img')<StyledLogoImageProps>(
  ({ variation, theme: { palette } }) => ({
    margin: '1rem 0',  
    width: '200px',

    transition: 'all .2s ease-out',

    filter: variation === 'white'
      ? 'brightness(0) invert(100%)'
      : '',
  })
);