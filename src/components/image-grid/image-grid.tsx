import { StyledImage, StyledImageGridContainer, StyledImageGridWrapper } from "./elements";
import { ImageGridProps } from "./interfaces";
import { isArrayEmpty } from "../../lib/utils/utils";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ConvoiImageGrid = ({
  images
}: ImageGridProps) => {

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const imagesWidth = isLargeScreen ? 300 : 160;
  const imagesHeight = isLargeScreen ? 400 : 220;

  return (
    !isArrayEmpty(images) &&
      <StyledImageGridContainer>
        <StyledImageGridWrapper>
          {[images[0],images[1]].map((image, imageIndex) => {
            return <StyledImage key={imageIndex} src={image.src} alt={image.alt} width={300} height={400}/>                      
          })}      
        </StyledImageGridWrapper> 

        <StyledImageGridWrapper>
          {[images[2],images[3]].map((image, imageIndex) => {
            return <StyledImage key={imageIndex} src={image.src} alt={image.alt} width={300} height={400}/>                      
          })}      
        </StyledImageGridWrapper> 
      </StyledImageGridContainer>
  )
}