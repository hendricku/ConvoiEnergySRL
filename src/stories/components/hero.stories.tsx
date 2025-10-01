import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiHero } from '../../components/hero/hero';
import { PrimaryTheme } from '../../theme/convoi-energy';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiHero> = {
  component: ConvoiHero,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/Hero'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  parameters: {
    layout: 'fullscreen'
  }
};