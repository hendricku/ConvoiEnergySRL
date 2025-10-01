import { ThemeProvider } from '@mui/material/styles'
import type { Meta, StoryObj } from '@storybook/react'

import { ConvoiFooter } from '../../components/footer/footer'
import { PrimaryTheme } from '../../theme/convoi-energy'

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiFooter> = {
  component: ConvoiFooter,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Components/Footer'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {
  parameters: {
    layout: 'fullscreen'
  }
};