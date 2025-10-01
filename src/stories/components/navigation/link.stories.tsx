import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryTheme } from '../../../theme/convoi-energy';
import { ConvoiLink } from '../../../components/navigation/link/link';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiLink> = {
  component: ConvoiLink,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'Navigation/Link'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Link: Story = {
  args: {
    href: '#',
    label: 'Link'
  }
};