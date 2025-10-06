'use client'

import Image from "next/image"
import CableIcon from "@mui/icons-material/Cable";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SolarPower from "@mui/icons-material/SolarPower";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ThemeProvider, styled, Theme } from "@mui/material/styles";
import { PrimaryTheme } from "@/theme/convoi-energy";

import { ConvoiContainer } from "@/components/container/container";
import { ConvoiHeader } from "@/components/header/header";
import { ConvoiHeading } from "@/components/heading/heading";
import { ConvoiHero } from "@/components/hero/hero";

import Maintenance from "@/assets/Maintenance.jpeg";
import bg from "@/assets/full-bg.jpg";
import panelsSky from "@/assets/panels+sky.jpg";
import { ConvoiAccordion } from "@/components/accordion/accordion";
import { ConvoiButton } from "@/components/buttons/button";
import { ConvoiDataBox } from "@/components/data-box/data-box";
import { ConvoiFooter } from "@/components/footer/footer";
import {
  StyledHeroButtonContainer,
  StyledHeroTypographyHighlighted,
} from "@/components/hero/elements";
import { ConvoiText } from "@/components/text/text";

const faqs = [
  {
    heading: 'Posso venire a trovarvi ?',
    content: <>Certamente! Siete più che benvenuti a venire a trovarci in sede durante i nostri orari di lavoro. Saremo lieti di accogliervi e rispondere alle vostre domande o discutere dei vostri interessi. Vi preghiamo di controllare i nostri orari di apertura e di pianificare la vostra visita di conseguenza.</>
  },
  {
    heading: 'Come posso contattare il supporto ?',
    content: <>Se hai bisogno di assistenza, puoi contattare il nostro team di supporto tramite il modulo di contatto sul
    nostro sito web. Risponderemo alle tue domande nel più breve tempo possibile.</>
  }
];

export default function Home() {

  const StyledFullWidthSection = styled("div")(
    ({ theme }: { theme: Theme }) => ({
      width: '100%',
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    })
  );

  const MaxWidthConvoi = styled("div")(
    ({ theme }: { theme: Theme }) => ({
      maxWidth: '1440px',
      margin: '0 auto',
      padding: '0 1rem',

      [theme.breakpoints.up('sm')]: {
        padding: '0 2rem',
      },

      [theme.breakpoints.up('md')]: {
        padding: '0 3rem',
      },

      [theme.breakpoints.up('lg')]: {
        padding: '0 4rem',
      },
    })
  );

  const StyledConvoiHeadingContainer = styled("div")(
    ({ theme }: { theme: Theme }) => ({
      marginTop: "6rem",

      [theme.breakpoints.up("sm")]: {
        marginTop: "8rem",
      },

      [theme.breakpoints.up("md")]: {
        marginTop: "10rem",
      },

      [theme.breakpoints.up("lg")]: {
        marginTop: "12rem",
        h2: {
          width: "65%",
          marginRight: "0 !important",
          textAlign: "right !important",
        },
      },
      [theme.breakpoints.up("xl")]: {
        marginTop: "1rem",
        h2: {
          width: "55%",
          marginRight: "0 !important",
          marginBottom: "7rem",
          textAlign: "right !important",
        },
      },
    })
  );

  const StyledDataBoxContainer = styled("div")(
    ({ theme }: { theme: Theme }) => ({
      gap: "8rem",
      alignItems: "stretch",
      flexDirection: "column",

      display: "flex",
      marginTop: "2rem",
      padding: "4rem 0",
      // marginBottom: "1rem",

      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        gap: "1rem",
        marginBottom: "6rem",

        '& > div': {
          flex: 1,
          width: '33.33%',
        }
      },

      [theme.breakpoints.up("lg")]: {
        gap: "2rem",
        padding: "0",
        alignItems: "flex-start",
        marginBottom: "8rem",

        'div[color="primary"]': {
          marginTop: "0rem",
        },

        'div[color="secondary"]': {
          marginTop: "4rem",
        },

        'div[color="tertiary"]': {
          marginTop: "8rem",
        },
      },

      [theme.breakpoints.up("xl")]: {
        // marginBottom: "10rem",

        'div[color="primary"]': {
          marginTop: "0rem",
        },

        'div[color="secondary"]': {
          marginTop: "5rem",
        },

        'div[color="tertiary"]': {
          marginTop: "10rem",
        },
      },
    })
  );

  const StyledFaqsContainer = styled("div")(
    ({ theme }: { theme: Theme }) => ({
      padding: "2rem 0 4rem 0",

      

      [theme.breakpoints.up("sm")]: {
        padding: "1rem 0 6rem 0",
      },
    })
  );

  const StyledGrid = styled(Box)(
    ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 0',
      gap: '1.5rem',

      [theme.breakpoints.up('sm')]: {
        flexWrap: 'nowrap',
        gap: '2rem',
        padding: '3rem 0',
      },

      [theme.breakpoints.up('md')]: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        gap: '3rem',
        // padding: '4rem 0',
      },

      [theme.breakpoints.up('lg')]: {
        gap: '4rem',
        marginTop: '-2rem',
        padding: '0rem 0 5rem 0',
      },

      [theme.breakpoints.up('xl')]: {
        gap: '5rem',
        marginTop: '2rem',
        padding: '0rem 0 3rem 0',
      }
    })
  );

  const StyledGridImage = styled(Box)(
    ({ theme }: { theme: Theme }) => ({
      position: 'relative',
      width: '100%',
      minHeight: '300px',

      [theme.breakpoints.up('sm')]: {
        minHeight: '400px'
      },

      [theme.breakpoints.up('md')]: {
        flex: '1',
        minHeight: '500px'
      }
    })
  );

  const StyledContentBox = styled(Box)(
    ({ theme }: { theme: Theme }) => ({
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      // gap: '1.5rem',

      [theme.breakpoints.up('md')]: {
        gap: '2rem',
      },

      [theme.breakpoints.up('lg')]: {
        // gap: '2rem',
      },

      [theme.breakpoints.up('xl')]: {
        // gap: '2.5rem',
      }
    })
  );

  return (
    <ThemeProvider theme={PrimaryTheme}>     
      <ConvoiHeader/>

      <StyledFullWidthSection>
        <MaxWidthConvoi>
          <ConvoiHero></ConvoiHero>
        
          <StyledConvoiHeadingContainer>
            <ConvoiHeading
              align="center"
              color="dark"
              headingContent={<>I vostri Partner energetici <StyledHeroTypographyHighlighted>di fiducia</StyledHeroTypographyHighlighted>, per un futuro ecosostenibile</>}
              variant={'h2'}
              width="100%"
            />   
          </StyledConvoiHeadingContainer>            

          <StyledDataBoxContainer>
            <ConvoiDataBox             
              backgroundColor='primary'
              content='Impianti su misura per permetterti di abbassare i costi in bolletta e allo stesso tempo fare la propria parte per il pianeta.' 
              icon={<SolarPower />}
              heading={<>Impianti fotovoltaici</>}
              textColor="light"
            />
            <ConvoiDataBox             
              backgroundColor='secondary'
              content='Sistemi di generazione e distribuzione del calore tradizionali o innovativi per garantire un maggior benessere e ridurre gli sprechi.' 
              icon={<LocalFireDepartmentIcon />}
              heading={<>Impianti termici</>}
              textColor="light"
            />
            <ConvoiDataBox             
              backgroundColor='tertiary'
              content='Sistemi antincendio ed illuminazione di emergenza, domotizzazione degli ambienti fino alle colonnine di ricarica per autoveicoli.' 
              icon={<CableIcon />}
              heading={<>Impianti elettrici e tecnologici</>}
              textColor="light"
            />
          </StyledDataBoxContainer>

     
          <StyledGrid>
            <StyledGridImage sx={{ order: { xs: 1, md: 2 } }}>
              <Image src={panelsSky.src} alt='Panels' fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </StyledGridImage>

            <StyledContentBox sx={{ order: { xs: 2, md: 1 } }}>
              <ConvoiHeading
                headingContent={<>Siamo sempre a disposizione dei clienti per poter superare insieme ogni ostacolo.</>}
                color="dark"
                variant={'h3'}
                width='100%'
              />
              <ConvoiText color="main">
                La mission di Convoi è quella di portare soluzioni energetiche innovative al servizio di privati e aziende attraverso proposte personalizzate calibrate su reali esigenze.
              </ConvoiText>

              <StyledHeroButtonContainer>
                <ConvoiButton backgroundColor="primary" href="/contatti" textColor="light" variant="contained" label="Contatti"/>
              </StyledHeroButtonContainer>
            </StyledContentBox>
          </StyledGrid>

          {/* Second Section */}
          <StyledGrid>
            <StyledGridImage sx={{ order: { xs: 1, md: 1 } }}>
              <Image src={Maintenance.src} alt='Panels' fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </StyledGridImage>

            <StyledContentBox sx={{ order: { xs: 2, md: 2 } }}>
              <ConvoiHeading
                headingContent={<>Innovazione, sostenibilità e assistenza affidabile al centro del nostro lavoro.</>}
                color="dark"
                variant={'h3'}
                width='100%'
              />  
              <ConvoiText color="main">
                Con un esperienza consolidata nel settore energetico, non ci limitiamo a installare pannelli solari: offriamo anche servizi di manutenzione proattiva per garantire impianti sempre efficienti, sicuri e duraturi. Il nostro obiettivo è costruire un rapporto di fiducia, accompagnandoti nel tempo con soluzioni personalizzate che ottimizzano i consumi e generano risparmio reale.
              </ConvoiText>          

              {/* <StyledHeroButtonContainer>
                <ConvoiButton backgroundColor="primary" href="/contatti" textColor="light" variant="contained" label="Scopri di più"/>
              </StyledHeroButtonContainer>   */}
            </StyledContentBox>
          </StyledGrid>                

   
          
          <StyledFaqsContainer>
            <ConvoiHeading 
              headingContent={<>Domande Frequenti</>}
              variant="h3"
            />

            <ConvoiText>Trova risposte alle domande più comuni per risolvere i tuoi dubbi</ConvoiText>

            <ConvoiAccordion items={faqs}/>
          </StyledFaqsContainer>
        </MaxWidthConvoi>
      </StyledFullWidthSection>

      <ConvoiFooter />
    </ThemeProvider>
  );
}