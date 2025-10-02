"use client"

import { styled } from "@mui/material/styles"

import { ConvoiContainer } from "@/components/container/container"
import { ConvoiFooter } from "@/components/footer/footer"
import { ConvoiHeader } from "@/components/header/header"
import { ConvoiHeading } from "@/components/heading/heading"
import { ConvoiText } from "@/components/text/text"
import { PrimaryTheme } from "@/theme/convoi-energy"

import bg from "@/assets/full-bg.jpg"

const StyledContainer = styled("div")(
  ({ theme: { breakpoints } }) => ({
    minHeight: "100vh",
    paddingTop: "10rem !important",
    paddingBottom: '4rem',

    background: `url(${bg.src})`,
    backgroundSize: '100%',

    [breakpoints.up('sm')]: {
      marginBottom: '-2rem',
    },

    [breakpoints.up('lg')]: {
      backgroundSize: 'cover',
    }
  })
);

export default function Contact() {
  return (
    <>
      <ConvoiHeader />

      <StyledContainer>
        <ConvoiContainer>
          <ConvoiHeading
            headingContent={<>Cookie Policy</>}            
            variant="h2"
          />

          <ConvoiText>
            Questo sito web utilizza cookie e tecnologie simili per migliorare l&apos;esperienza dell&apos;utente, analizzare il traffico e personalizzare contenuti e annunci. Continuando a navigare su questo sito, acconsenti all&apos;utilizzo di tali tecnologie in conformità con questa Cookie Policy.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Che cosa sono i cookie?</>}
            variant="h3"
          />

          <ConvoiText>
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Questi file consentono al sito di riconoscere il tuo dispositivo e di memorizzare informazioni su di te, le tue preferenze o le tue attività di navigazione.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Tipi di cookie utilizzati</>}
            variant="h3"
          />

          <ConvoiText>
            <ul>
              <li>
                Cookie essenziali: Questi cookie sono necessari per il funzionamento del sito web e non possono essere disabilitati nei nostri sistemi. Di solito vengono impostati solo in risposta ad azioni da parte tua che costituiscono una richiesta di servizi, come l&apos;impostazione delle tue preferenze sulla privacy, l&apos;accesso o la compilazione di moduli.
              </li>  
              <li>
                Cookie di prestazione: Questi cookie ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali pagine sono più e meno popolari e a vedere come i visitatori si spostano sul sito.
              </li>
              <li>
                Cookie di funzionalità: Questi cookie consentono al sito web di fornire funzionalità avanzate e personalizzazione. Possono essere impostati da noi o da fornitori terzi di cui abbiamo aggiunto le funzionalità alle nostre pagine.
              </li>
              <li>
                Cookie di targeting e pubblicità: Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari.   Possono essere utilizzati da quelle società per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti.
              </li>
            </ul> 
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Gestione dei cookie</>}          
            variant="h3"
          />

          <ConvoiText>
            Puoi gestire le tue preferenze sui cookie modificando le impostazioni del tuo browser. Tuttavia, la disabilitazione dei cookie potrebbe influire sulle funzionalità del sito e sulla tua esperienza di navigazione.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Modifiche alla Cookie Policy</>}
            variant="h3"
          />

          <ConvoiText>
            Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con una nuova data di &quot;Ultimo aggiornamento&quot;. Ti consigliamo di controllare periodicamente questa pagina per eventuali modifiche.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Contatti</>}
            variant="h3"
          />

          <ConvoiText>
            Se hai domande o dubbi riguardo a questa Cookie Policy, contattaci all&apos;indirizzo email info@convoienergysrl.it.
            <br /><br />
            <small><i>Ultimo aggiornamento: 9 Maggio 2024</i></small>
          </ConvoiText>
         
        </ConvoiContainer>
      </StyledContainer>

      <ConvoiFooter />
    </>
  );
}
