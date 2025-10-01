export const isArrayEmpty = (array: Array<any>) => array.length < 1;

export const getHeadingMarginBottom = (variant: string | undefined) => {
  switch(variant) {
    case 'h1': return '2rem';
    
    case 'h2': return '2rem';
    
    case 'h3': return '1.5rem';

    case 'h4': return '1rem';

    case 'h5': return '0.5rem';

    case 'h6': return '0,5rem';
  }
};

export const getHeadingSize = (variant: string | undefined, breakpoints: string) => {
  switch(variant) {
    case 'h1': 
      switch (breakpoints) {
        case 'xs' : return '3.5rem';
        case 'sm' : return '3.5rem';
        case 'md' : return '4rem';
        case 'lg' : return '5rem';
        case 'xl' : return '6rem';
        case 'xxl': return '6rem';
      }
    
    case 'h2': 
      switch (breakpoints) {
        case 'xs' : return '2.4rem';
        case 'sm' : return '2.4rem';
        case 'md' : return '3rem';
        case 'lg' : return '4rem';
        case 'xl' : return '4.2rem';
        case 'xxl': return '4.2rem';
      }
    
    case 'h3': 
      switch (breakpoints) {
        case 'xs' : return '1.4rem';
        case 'sm' : return '1.6rem';
        case 'md' : return '1.6rem';
        case 'lg' : return '1.6rem';
        case 'xl' : return '1.6rem';
        case 'xxl': return '2.4rem';
      }

    case 'h4':
      switch (breakpoints) {
        case 'xs' : return '1rem';
        case 'sm' : return '1.2rem';
        case 'md' : return '1.2rem';
        case 'lg' : return '1.2rem';
        case 'xl' : return '1.2rem';
        case 'xxl': return '1.6rem';
      }

    case 'h5':
      switch (breakpoints) {
        case 'xs' : return '1rem';
        case 'sm' : return '1rem';
        case 'md' : return '1rem';
        case 'lg' : return '1rem';
        case 'xl' : return '1rem';
        case 'xxl': return '1.4rem';
      }

    case 'h6': 
      switch (breakpoints) {
        case 'xs' : return '0.9rem';
        case 'sm' : return '0.9rem';
        case 'md' : return '0.9rem';
        case 'lg' : return '0.9rem';
        case 'xl' : return '0.9rem';
        case 'xxl': return '1rem';
      }
  }
};

import { Palette, PaletteOptions, PaletteColorOptions } from "@mui/material/styles";

export const getBackgroundColor = (backgroundColor: string | undefined, palette: Palette) => {
  switch (backgroundColor) {
    case 'primary': return palette.primary.main;
    case 'secondary': return palette.secondary.main;
    case 'tertiary': return palette.tertiary.main;
  }
};

export const getBackgroundHoverColor = (backgroundColor: string | undefined, palette: Palette) => {
  switch (backgroundColor) {
    case 'primary': return palette.primary.dark;
    case 'secondary': return palette.secondary.dark;
    case 'tertiary': return palette.tertiary.dark;
  }
};

export const getIconSize = (iconSize: string) => {
  switch (iconSize) {
    case 'xs': return '10px';
    case 'sm': return '20px';
    case 'md': return '40px';
    case 'lg': return '60px';
  }
};

export const getTextColor = (color: string | undefined, palette: Palette) => {
  switch (color) {    
    case 'main': return palette.text.main;
    case 'accent': return palette.text.accent;
    case 'dark': return palette.text.dark;
    case 'light': return palette.text.light;        
  }
};

export const getTextHoverColor = (backgroundColor: string | undefined, palette: Palette) => {
  switch (backgroundColor) {
    case 'primary': return palette.text.light;
    case 'secondary': return palette.secondary.main;
    case 'tertiary': return palette.primary.main;
  }
};

export const getTextLineHeight = (
  size: "sm" | "md" | "lg" | undefined,
  breakpoints: string
) => {
  switch (size) {
    case 'sm': 
      switch (breakpoints) {
        case 'xs' : return '1.5rem';
        case 'sm' : return '1.5rem';
        case 'md' : return '1.8rem';
        case 'lg' : return '1.8rem';
        case 'xl' : return '1.8rem';
        case 'xxl': return '1.8rem';
      }
    case 'md': 
      switch (breakpoints) {
        case 'xs' : return '1.8rem';
        case 'sm' : return '1.8rem';
        case 'md' : return '2.4rem';
        case 'lg' : return '2.4rem';
        case 'xl' : return '2.4rem';
        case 'xxl': return '2.4rem';
      }
    case 'lg': 
      switch (breakpoints) {
        case 'xs' : return '2.4rem';
        case 'sm' : return '2.4rem';
        case 'md' : return '2.8rem';
        case 'lg' : return '2.8rem';
        case 'xl' : return '2.8rem';
        case 'xxl': return '2.8rem';
      }
  }
};

export const getTextHiglighted = (palette: Palette) => palette.primary.main;

export const getTextSize = (
  size: "sm" | "md" | "lg" | undefined,
  breakpoints: string
) => {
  switch (size) {
    case 'sm': 
      switch (breakpoints) {
        case 'xs' : return '0.8rem';
        case 'sm' : return '0.8rem';
        case 'md' : return '1rem';
        case 'lg' : return '1rem';
        case 'xl' : return '1rem';
        case 'xxl': return '1rem';
      }
    case 'md': 
      switch (breakpoints) {
        case 'xs' : return '1rem';
        case 'sm' : return '1rem';
        case 'md' : return '1.2rem';
        case 'lg' : return '1.2rem';
        case 'xl' : return '1.2rem';
        case 'xxl': return '1.2rem';
      }
    case 'lg': 
      switch (breakpoints) {
        case 'xs' : return '1.2rem';
        case 'sm' : return '1.2rem';
        case 'md' : return '1.5rem';
        case 'lg' : return '1.5rem';
        case 'xl' : return '1.5rem';
        case 'xxl': return '1.5rem';
      }
  }
};