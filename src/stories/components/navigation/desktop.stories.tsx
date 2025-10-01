import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiNavigationDesktop } from '../../../components/navigation/desktop/navigation-desktop';
import { PrimaryTheme } from '../../../theme/convoi-energy';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiNavigationDesktop> = {
  component: ConvoiNavigationDesktop,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  title: 'navigation/Menu'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    links: [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'About',
        href: '/about'
      },
      {
        label: 'Item #3',
        href: '#'
      },
      {
        label: 'Item #4',
        href: '#'
      }
    ]
  },
};