import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {
  StyledHeroButtonContainer,
  StyledHeroContainer,
  StyledHeroContent,
  StyledHeroImageGrid,
  StyledHeroTypographyHeading,
  StyledHeroTypographyHighlighted
} from "./elements"
import { ConvoiImageGrid } from "../image-grid/image-grid"

import Generation from '../../assets/generation.jpg'
import PanelWork from '../../assets/panel-work.jpg'
import Panels from '../../assets/panels.jpg'
import Energy from '../../assets/energy.jpg'
import { ConvoiButton } from "../buttons/button"
import { ConvoiText } from '../text/text';

const heroImages = [
  {
    alt: 'img1',
    src: PanelWork.src
  },
  {
    alt: 'img2',
    src: Generation.src
  },
  {
    alt: 'img3',
    src: Panels.src
  },
  {
    alt: 'img4',
    src: Energy.src
  }
]

export const ConvoiHero = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroImageGrid>
        <ConvoiImageGrid images={heroImages}/> 
      </StyledHeroImageGrid>      

      <StyledHeroContent>
        <StyledHeroTypographyHeading
          variant="h1"
          gutterBottom>
            Costruire, Con<StyledHeroTypographyHighlighted>VOI</StyledHeroTypographyHighlighted>
        </StyledHeroTypographyHeading>

        <ConvoiText color="main">
          L&apos;esperienza e la professionalità sono i nostri pilastri per costruire rapporti duraturi con il cliente al fine di assisterlo al meglio possibile. Alla base del nostro lavoro c&apos;è l&apos;idea di realizzare impianti come se noi stessi fossimo il cliente. La nostra curiosità fa si che cerchiamo semore nuove sfide. Per soddisfare i nostri clienti ci domandiamo sempre quali siano le nuove tecnologie e gli strumenti che possano migliorare la qualità del nostro servizio.
        </ConvoiText>

        <StyledHeroButtonContainer>
          <ConvoiButton backgroundColor="primary" href="/contatti" textColor="light" variant="contained" label="Contatti"/>
          {/* <ConvoiButton variant="outlined" label="Iscriviti" endIcon={<ChevronRightIcon />}/> */}
        </StyledHeroButtonContainer>          
        
      </StyledHeroContent>
    </StyledHeroContainer>
  )
}