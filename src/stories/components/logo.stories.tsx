import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryTheme } from '../../theme/convoi-energy';
import { ConvoiLogo } from '../../components/logo/logo';
import logo from '../../assets/logo.svg'

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiLogo> = {
  component: ConvoiLogo,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}> 
        <Story />       
      </ThemeProvider>
    ),
  ],
  title: 'Components/Logo',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {
    alt: 'logo',
    href: '/',
    src: logo.src
  }  
};