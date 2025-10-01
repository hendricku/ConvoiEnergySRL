import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiCtaBanner } from '../../components/cta-banner/banner/cta-banner';
import { PrimaryTheme } from '../../theme/convoi-energy';
import background from '../../assets/panels+buildings.jpg';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiCtaBanner> = {
  component: ConvoiCtaBanner,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/CTA/Banner'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CTABanner: Story = {
  args: {
    backgroundImage: background.src
  },
  parameters: {
    layout: 'fullscreen'
  }
};