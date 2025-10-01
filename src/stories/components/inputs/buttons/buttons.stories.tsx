import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiButton } from '../../../../components/buttons/button';
import { PrimaryTheme } from '../../../../theme/convoi-energy';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiButton> = {
  component: ConvoiButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Inputs/Buttons',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {    
    backgroundColor: 'secondary',
    href: '#',
    label: 'Primary Button',
    textColor: 'dark',
    variant: 'contained'
  },
};

export const SecondaryButton: Story = {
  args: {
    endIcon: <ChevronRightIcon />,
    href: '#',
    label: 'Secondary Button',
    variant: 'outlined'
  },
};