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
            headingContent={<>Privacy Policy</>}            
            variant="h2"
          />

          <ConvoiText>
            La tua privacy è importante per noi. Questa informativa sulla privacy illustra come raccogliamo, utilizziamo e proteggiamo le informazioni personali che ci fornisci attraverso il nostro sito web.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Raccolta delle informazioni</>}
            variant="h3"
          />

          <ConvoiText>
            Raccogliamo informazioni personali che ci fornisci volontariamente, come nome, indirizzo email, dati di contatto e altre informazioni simili, quando interagisci con il nostro sito web, ad esempio registrandoti per un account, compilando moduli di contatto o effettuando acquisti.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Utilizzo delle informazioni</>}
            variant="h3"
          />

          <ConvoiText>
            Utilizziamo le informazioni personali raccolte per fornirti i servizi richiesti, per elaborare ordini, per migliorare il nostro sito web e per comunicare con te su prodotti, servizi e promozioni che potrebbero interessarti. Non condivideremo le tue informazioni personali con terze parti senza il tuo consenso, tranne nei casi previsti dalla legge.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Protezione delle informazioni</>}          
            variant="h3"
          />

          <ConvoiText>
            Adottiamo misure di sicurezza per proteggere le tue informazioni personali da accessi non autorizzati, perdite, uso improprio o divulgazione. Tuttavia, nessun metodo di trasmissione su Internet o di archiviazione elettronica è completamente sicuro, quindi non possiamo garantire la sicurezza assoluta delle informazioni.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Cookie e tecnologie simili</>}
            variant="h3"
          />

          <ConvoiText>
            Il nostro sito web utilizza cookie e altre tecnologie simili per migliorare l&apos;esperienza dell&apos;utente, analizzare il traffico e personalizzare contenuti e annunci. Puoi controllare o disabilitare i cookie tramite le impostazioni del tuo browser.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Modifiche all&apos;informativa sulla privacy</>}
            variant="h3"
          />

          <ConvoiText>
            Ci riserviamo il diritto di modificare questa informativa sulla privacy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con una nuova data di &quot;Ultimo aggiornamento&quot;. Ti consigliamo di controllare periodicamente questa pagina per eventuali modifiche.
          </ConvoiText>

          <ConvoiHeading
            headingContent={<>Contatti</>}
            variant="h3"
          />

          <ConvoiText>
            Se hai domande o dubbi riguardo a questa informativa sulla privacy, contattaci all&apos;indirizzo email info@convoienergysrl.it.
            <br /><br />
            <small><i>Ultimo aggiornamento: 9 Maggio 2024</i></small>
          </ConvoiText>
         
        </ConvoiContainer>
      </StyledContainer>

      <ConvoiFooter />
    </>
  );
}
