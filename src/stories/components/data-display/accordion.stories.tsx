import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiAccordion } from '../../../components/accordion/accordion';
import { PrimaryTheme } from '../../../theme/convoi-energy';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiAccordion> = {
  component: ConvoiAccordion,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Surfaces/Accordion'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Accordion: Story = {
  args: {
    items: [
      {
        heading: 'Accordion 1',
        content: <>{'Accordion 1 content'}</>
      }
    ]
  }
};