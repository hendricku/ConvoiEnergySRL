import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {
  StyledConvoiTextContainer,
  StyledDataBoxContainer,
  StyledDataBoxHeading,
  StyledDataBoxIcon
} from "./elements";
import { ConvoiDataBoxProps } from "./interfaces";
import { ConvoiButton } from '../buttons/button';
import { ConvoiText } from '../text/text';

export const ConvoiDataBox = ({
  backgroundColor,
  callToAction,  
  content,
  icon,
  heading,
  textColor = "dark"
}: ConvoiDataBoxProps) => {
  return (
    <StyledDataBoxContainer color={backgroundColor} textColor={textColor}>

      <StyledDataBoxIcon backgroundColor={backgroundColor} color={textColor}>
        {icon}
      </StyledDataBoxIcon>
      
      <StyledDataBoxHeading
        align="center"
        color={textColor}
        gutterBottom
        headingContent={heading}
        variant='h3'
      />

      <StyledConvoiTextContainer>
        <ConvoiText align="center" color={textColor} noMargin>{content}</ConvoiText>
      </StyledConvoiTextContainer>      

      {
        callToAction &&
          <ConvoiButton 
            endIcon={<ChevronRightIcon />}       
            href={callToAction.url}
            label={callToAction.label}
            variant='outlined'
          />
      }        

    </StyledDataBoxContainer>
  )
}