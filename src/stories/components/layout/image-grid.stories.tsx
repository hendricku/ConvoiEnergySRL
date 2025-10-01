import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiImageGrid } from '../../../components/image-grid/image-grid';
import { PrimaryTheme } from '../../../theme/convoi-energy';

import Generation from '../../../assets/generation.jpg'
import PanelWork from '../../../assets/panel-work.jpg'
import Panels from '../../../assets/panels.jpg'
import Energy from '../../../assets/energy.jpg'

const theme = PrimaryTheme;

const images = [
  {
    alt: 'img1',
    src: Generation.src
  },
  {
    alt: 'img2',
    src: PanelWork.src
  },
  {
    alt: 'img3',
    src: Panels.src
  },
  {
    alt: 'img4',
    src: Energy.src
  }
]

const meta: Meta<typeof ConvoiImageGrid> = {
  component: ConvoiImageGrid,
  decorators: [
    () => (
      <ThemeProvider theme={theme}> 
        <ConvoiImageGrid images={images} />
      </ThemeProvider>
    ),
  ],
  title: 'Layout/Image Grid',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageGrid: Story = {};