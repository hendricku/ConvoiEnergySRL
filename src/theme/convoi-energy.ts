import { createTheme } from "@mui/material/styles";

import { breakpoints } from "./primary/breakpoints";
import { palette } from "./primary/palette";
import { spacing } from "./primary/spacing";
import { typography } from "./primary/typography";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }

  interface ThemeOptions {
    themeName?: string
  }

  interface Palette {
    tertiary: PaletteOptions['tertiary'];
  }

  interface PaletteOptions {
    tertiary: any
  }

  interface TypeText {
    accent?: string,
    dark?: string,
    light?: string,
    main: string,
  }
}

export const PrimaryTheme = createTheme({
  themeName: 'primary',

  breakpoints,
  palette,
  spacing,
  typography
})