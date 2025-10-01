import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { StyledBannerContainer } from "./elements"
import { ConvoiCtaBannerProps } from "./intefaces"
import { ConvoiButton } from "../../buttons/button"
import { ConvoiContainer } from '../../container/container';
import { ConvoiHeading } from "../../heading/heading"
import { StyledHeroButtonContainer } from "../../hero/elements"
import { ConvoiText } from "../../text/text"

export const ConvoiCtaBanner = ({
  backgroundImage = '#cdcdcd',
}: ConvoiCtaBannerProps) => {
  return (
    <StyledBannerContainer backgroundImage={backgroundImage}>
      <ConvoiContainer>
        <ConvoiHeading
          color='light'
          variant='h3'
          headingContent={<>Scopri le nostre offerte speciali</>}
        />

        <ConvoiText 
          color="light"          
          size="sm">
          Risparmia sulla bolletta elettrica con il nostro servizio di consulenza personalizzata
        </ConvoiText>

        <StyledHeroButtonContainer>
          <ConvoiButton backgroundColor="secondary" href="/contatti" variant="contained" label="Contatti"/>
          {/* <ConvoiButton textColor="light" variant="outlined" label="Iscriviti" endIcon={<ChevronRightIcon />}/> */}
        </StyledHeroButtonContainer>
      </ConvoiContainer>
    </StyledBannerContainer>
  )
}