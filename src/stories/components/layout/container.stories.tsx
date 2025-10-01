import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiContainer } from '../../../components/container/container';
import { PrimaryTheme } from '../../../theme/convoi-energy';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiContainer> = {
  component: ConvoiContainer,
  decorators: [
    () => (
      <ThemeProvider theme={theme}> 
        <ConvoiContainer>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </ConvoiContainer>       
      </ThemeProvider>
    ),
  ],
  title: 'Layout/Container',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Container: Story = {
  parameters: {
    layout: 'fullscreen'
  }
};