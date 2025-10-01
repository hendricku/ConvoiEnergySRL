"use client"

import { useState } from "react"
import ReCAPTCHA from 'react-google-recaptcha'

import FormControl from "@mui/material/FormControl"
import Grid from "@mui/material/Grid"
import { ThemeProvider, styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"

import { ConvoiButton } from "@/components/buttons/button"
import { ConvoiContainer } from "@/components/container/container"
import { ConvoiFooter } from "@/components/footer/footer"
import { ConvoiHeader } from "@/components/header/header"
import { ConvoiHeading } from "@/components/heading/heading"
import { ConvoiText } from "@/components/text/text"
import { sendContactForm } from "@/lib/utils/form"
import { PrimaryTheme } from "@/theme/convoi-energy"

import bg from "@/assets/full-bg.jpg"
import panelBuildings from "@/assets/panels+buildings.jpg"

const StyledContainer = styled("div")(
  ({ theme: { breakpoints } }) => ({
    minHeight: "100vh",
    paddingTop: "10rem !important",
    paddingBottom: '4rem',

    background: `url(${bg.src})`,
    backgroundSize: '100%',

    [breakpoints.up('sm')]: {
      marginBottom: '-2rem',
      paddingBottom: '0',
    },

    [breakpoints.up('lg')]: {
      backgroundSize: 'cover',
    }
  })
);

const StyledInput = styled(TextField)(({ theme: { palette } }) => ({
  width: "100%",
  outline: "none",
  border: "0",
  margin: "1rem 0",

  lineHeight: "2rem",
  fontFamily: 'Raleway, "sans-serif"',

  ".MuiInput-root": {
    "&::before": {
      borderBottom: `1px ${palette.secondary.main} solid`,
    },
    "&:hover:not(.Mui-disabled, .Mui-error):before": {
      borderBottom: `2px ${palette.secondary.main} solid`,
    },
    "&.Mui-focused:after": {
      borderBottom: `2px ${palette.secondary.main} solid`,
    },
  },
}));

const StyledFormWrapper = styled(Grid)(({ theme: { breakpoints } }) => ({
  [breakpoints.up("sm")]: {
    padding: "0 4rem 0 0",
  },

  [breakpoints.up("md")]: {
    padding: "0 4rem 0 0",
  },
}));

const StyledFormControl = styled(FormControl)({
  width: "100%",
});

const StyledConvoiButtonContainer = styled('div')(
  ({ theme: { breakpoints } }) => ({
    'button': {
      width: '100%',
    },

    [breakpoints.up('sm')]: {
      'button': {
        width: 'min-content !important',
      }
    },
  })
);

const initValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

type FormValues = {
  [key: string]: string;
};

type FormState = {
  [key: string]: any;
};

const initState: FormState = {
  error: {
    api: "",
    form: {},
  },
  isLoading: false,
  values: initValues,
};

type TouchedState = {
  [key: string]: boolean;
};

const initTouched: TouchedState = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  message: false,
};

export default function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState(initTouched);
  const [messageSent, setMessageSent] = useState("");

  const { error, isLoading, values } = state;

  const getHelperText = (name: string) => {
    if (touched[name] && !values[name] && name !== "phone") {
      return "Questo campo è obbligatorio.";
    }

    if (error.form[name]) {
      switch (name) {
        case "email":
          return "Per favore inserisci un indirizzo email valido.";

        case "firstName":
          return "Per favore inserisci solo lettere e spazi.";

        case "lastName":
          return "Per favore inserisci solo lettere e spazi.";

        case "phone":
          return "Per favore inserisci un numero di telefono valido con il codice internazionale (+39 XXX XXX XXXX).";
      }
    }
  };

  const onBlur = ({ target }: any) => {
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

    if (target.name === "email") {
      if (/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(target.value)) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: {
            ...prev.error,
            form: {
              ...prev.error.form,
              [target.name]: false,
            },
          },
        }));
      } else {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: {
            ...prev.error,
            form: {
              ...prev.error.form,
              [target.name]: true,
            },
          },
        }));
      }
    }
  };

  const handleChange = ({ target }: any) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

    if (target.name !== "email") {
      if (target.validity.valid) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: {
            ...prev.error,
            form: {
              ...prev.error.form,
              [target.name]: false,
            },
          },
        }));
      } else {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: {
            ...prev.error,
            form: {
              ...prev.error.form,
              [target.name]: true,
            },
          },
        }));
      }
    }
  };

  const hasEmptyRequiredValues = () => {
    return !values.firstName || !values.lastName || !values.email;
  };

  const hasFormErrors = () => {
    return Object.keys(error.form).find((key) => error.form[key]) !== undefined;
  };

  const onSubmit = async () => {
    if (!hasEmptyRequiredValues() && !hasFormErrors()) {
      setState((prev: any) => ({
        ...prev,
        isLoading: true,
      }));

      try {
        const sendEmail = await sendContactForm(values);
        setTouched({
          firstName: false,
          lastName: false,
          email: false,
          phone: false,
          message: false,
        });
        setState(initState);
        setMessageSent(sendEmail.message);
      } catch (error: any) {
        setState((prev: any) => ({
          ...prev,
          isLoading: false,
          error: {
            ...prev.error,
            api: error.message,
          },
        }));
      }
    } else {
      setAllTouched();
    }
  };

  const setAllTouched = () => {
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
    });
  };

  return (
    <ThemeProvider theme={PrimaryTheme}>
      <ConvoiHeader />

      <StyledContainer>
        <ConvoiContainer>
          <ConvoiHeading
            headingContent={<>Contattaci</>}
            noMargin
            variant="h2"
          />
          <ConvoiText>
            Siamo qui per ascoltarti, collaborare con te e offrirti il supporto
            di cui hai bisogno per raggiungere i tuoi obiettivi. Contattaci oggi
            stesso per scoprire come possiamo aiutarti a realizzare i tuoi
            progetti con successo.
          </ConvoiText>

          <Grid container>
            <StyledFormWrapper item xs={12} sm={6}>
              <StyledFormControl>
                <Grid container columnSpacing={1}>
                  <Grid item xs={12} sm={6}>
                    <StyledInput
                      error={
                        (touched.firstName && !values.firstName) ||
                        error.form.firstName
                      }
                      helperText={getHelperText("firstName")}
                      inputProps={{ pattern: "[A-Za-z ]+", type: "text" }}
                      name="firstName"
                      onBlur={onBlur}
                      onChange={handleChange}
                      placeholder="Nome"
                      value={values.firstName}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledInput
                      error={
                        (touched.lastName && !values.lastName) ||
                        error.form.lastName
                      }
                      helperText={getHelperText("lastName")}
                      inputProps={{ pattern: "[A-Za-z ]+" }}
                      name="lastName"
                      onBlur={onBlur}
                      onChange={handleChange}
                      placeholder="Cognome"
                      value={values.lastName}
                      variant="standard"
                    />
                  </Grid>
                </Grid>

                <StyledInput
                  error={(touched.email && !values.email) || error.form.email}
                  helperText={getHelperText("email")}
                  name="email"
                  onBlur={onBlur}
                  onChange={handleChange}
                  placeholder="Email"
                  value={values.email}
                  variant="standard"
                />

                <StyledInput
                  error={error.form.phone}
                  helperText={getHelperText("phone")}
                  inputProps={{ pattern: "[+][0-9 ]+" }}
                  name="phone"
                  onChange={handleChange}
                  placeholder="Telefono"
                  value={values.phone}
                  variant="standard"
                />

                <StyledInput
                  id="message"
                  multiline
                  name="message"
                  onChange={handleChange}
                  placeholder="Messaggio"
                  value={values.message}
                  variant="standard"
                />

                <ReCAPTCHA
                  sitekey="6LfW7swpAAAAAJSk6OA-EiAvF8a0-wS8sLBYBAv9"
                  size="invisible"
                />

                <br />
                <br />
                
                <StyledConvoiButtonContainer>
                  <ConvoiButton                  
                    backgroundColor="primary"              
                    isLoading={isLoading}
                    label="Invia"
                    onClick={onSubmit}
                    textColor="light"
                    variant="contained"
                  />
                </StyledConvoiButtonContainer>

                <br />

                {error && (
                  <ConvoiHeading variant="h6" color="accent" headingContent={<>{error.api}</>}/>                  
                )}

                {messageSent && (
                  <ConvoiHeading variant="h6" color="accent" headingContent={<>{messageSent}</>}/>
                )}
              </StyledFormControl>
            </StyledFormWrapper>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                background: `url(${panelBuildings.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "50vh",
              }}
            ></Grid>
          </Grid>
        </ConvoiContainer>
      </StyledContainer>

      <ConvoiFooter />
    </ThemeProvider>
  );
}
