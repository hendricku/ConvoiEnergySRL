import {
  StyledDivider,
  StyledFooterContainer,
  StyledFooterInnerContainer,
  StyledFooterDataWrapper,
  StyledFooterDetailsWrapper,
  StyledFooterUpperWrapper,
} from "./elements"
import { ConvoiContainer } from "../container/container"
import { ConvoiLogo } from "../logo/logo"
import { ConvoiLink } from "../navigation/link/link"
import { ConvoiText } from "../text/text"
import logo from '../../assets/logo.svg'
import { ConvoiHeading } from '../heading/heading';

export const ConvoiFooter = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterInnerContainer>
        <ConvoiContainer>
          <StyledFooterUpperWrapper>
            <ConvoiLogo alt='logo' href='/' src={logo.src} variation='white'/>
                     
            <StyledFooterDetailsWrapper>
              <ConvoiHeading color="accent" headingContent={<>Sede Firenze</>} noMargin variant='h4' />

              <StyledFooterDataWrapper>
                <ConvoiText color="light" noMargin size="sm">Via F. Brunelleschi, 40</ConvoiText>
                <ConvoiText color="light" noMargin size="sm">Sesto F. No. 50019</ConvoiText>                        
              </StyledFooterDataWrapper>
            </StyledFooterDetailsWrapper>

            <StyledFooterDetailsWrapper>
              <ConvoiHeading color="accent" headingContent={<>Contatti</>} noMargin variant='h4' />  

              <StyledFooterDataWrapper>
                <ConvoiLink href="tel:393338022803" label='+39 333 802 2803' linkColor="light" size="sm" />                          
                <ConvoiLink href="mailto:info@convoienergysrl.it" label='info@convoienergysrl.it' linkColor="light" size="sm" />            
              </StyledFooterDataWrapper>
            </StyledFooterDetailsWrapper>
          </StyledFooterUpperWrapper>
        </ConvoiContainer>

        <StyledDivider />

        <ConvoiContainer>
          <ConvoiText
            align="center"
            color="light" 
            noMargin         
            size="sm">            
              CONVOI Energy SRL | Sede Legale: Via Vittorio Veneto 180/3 Arezzo | Sede Operativa: Via F. Brunelleschi 40 Sesto F.
          </ConvoiText>
          <ConvoiText
            align="center"
            color="light" 
            noMargin         
            size="sm">            
              C.F. e P.IVA: 02440300511 | REA: 214031 | cap.soc.: € 10.000,00 | PEC: convoienergysrl@pec.it
          </ConvoiText>
          <ConvoiText
            align="center"
            color="light" 
            noMargin        
            size="sm">
              <ConvoiLink href="/privacy-policy" label="Privacy Policy" linkColor="accent" size="sm"/> |
              <ConvoiLink href="/cookie-policy" label=" Cookie Policy" linkColor="accent" size="sm"/> |
              <ConvoiLink href="https://bynddigital.co" target="_blank" label=" Beyond Digital" linkColor="accent" size="sm"/>
          </ConvoiText>
        </ConvoiContainer>
      </StyledFooterInnerContainer>
    </StyledFooterContainer>
  )
}