"use client"

import { ThemeProvider, styled } from "@mui/material/styles"

import { ConvoiBentoGrid } from "@/components/bentoGrid/bentoGrid"
import { ConvoiContainer } from "@/components/container/container"
import { ConvoiFooter } from "@/components/footer/footer"
import { ConvoiHeader } from "@/components/header/header"
import { ConvoiHeading } from "@/components/heading/heading"
import { PrimaryTheme } from "@/theme/convoi-energy"

import bg from "@/assets/full-bg.jpg"

const StyledFullWidthSection = styled("div")(() => ({
  width: '100%',
  backgroundImage: `url(${bg.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}))

const MaxWidthConvoi = styled("div")(
  ({ theme }) => ({
    maxWidth: '1440px',
    margin: '0 auto',
    // padding: '0 1rem',

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
)

const StyledContainer = styled("div")(
  ({ theme: { breakpoints } }) => ({
    minHeight: "100vh",
    paddingTop: "8rem",
    paddingBottom: '4rem',

    [breakpoints.up('sm')]: {
      paddingTop: "8rem",
    },

    [breakpoints.up('md')]: {
      paddingTop: "8rem",
    },
  })
)

const StyledBentoWrapper = styled("div")({
  margin: '0 calc(-1rem + 4rem)',
  
  '@media (min-width: 600px)': {
    margin: '0 calc(-2rem + 4rem)',
  },
  
  '@media (min-width: 900px)': {
    margin: '0 calc(-3rem + 4rem)',
  },
  
  '@media (min-width: 1200px)': {
    margin: '0 calc(-4rem + 4rem)',
  },
})

export default function Lavori() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <ConvoiHeader />

      <StyledFullWidthSection>
        <MaxWidthConvoi>
          <StyledContainer>
            <ConvoiHeading
              headingContent={<>Una selezione dei nostri lavori</>}
              variant="h2"
              color="dark"
            />

            <StyledBentoWrapper>
              <ConvoiBentoGrid />
            </StyledBentoWrapper>
          </StyledContainer>
        </MaxWidthConvoi>
      </StyledFullWidthSection>

      <ConvoiFooter />
    </ThemeProvider>
  )
}