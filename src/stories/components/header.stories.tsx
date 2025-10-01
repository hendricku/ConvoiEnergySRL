import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiHeader } from '../../components/header/header';
import { PrimaryTheme } from '../../theme/convoi-energy';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiHeader> = {
  component: ConvoiHeader,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/Header'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  parameters: {
    layout: 'fullscreen'
  }
};