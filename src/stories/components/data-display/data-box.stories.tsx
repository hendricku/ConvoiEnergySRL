import ApartmentIcon from '@mui/icons-material/Apartment';
import StoreIcon from '@mui/icons-material/Store';
import VillaIcon from '@mui/icons-material/Villa';
import { ThemeProvider } from '@mui/material/styles';
import type { Meta, StoryObj } from '@storybook/react';

import { ConvoiDataBox } from '../../../components/data-box/data-box';
import { PrimaryTheme } from '../../../theme/convoi-energy';

const theme = PrimaryTheme;

const meta: Meta<typeof ConvoiDataBox> = {
  component: ConvoiDataBox,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Surfaces/Data Box',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DataBoxPrimary: Story = {
  args: {
    backgroundColor: 'primary',
    callToAction: {
      label: 'Per la casa',
      url: '#'
    },    
    content: 'Miglioriamo l’efficienza energetica delle nostre abitazioni e riduciamo i consumi utilizzando fonti di energia rinnovabile.',    
    icon: <VillaIcon />,
    heading: <>Privati</>,
    textColor: 'accent',
  },
};

export const DataBoxSecondary: Story = {
  args: {
    backgroundColor: 'secondary',
    callToAction: {
      label: 'Per le imprese',
      url: '#'
    },
    content: 'Investiamo sul futuro con una soluzione ideale e concreta grazie all’abbattimento dei costi energetici e all’ottenimento delle agevolazioni fiscali nel rispetto dell’ambiente.',  
    icon: <StoreIcon />,
    heading: <>Aziende</>
  },
};

export const DataBoxTertiary: Story = {
  args: {
    backgroundColor: 'tertiary',
    callToAction: {
      label: 'Collabora',
      url: '#'
    },
    content: 'Otteniamo l’indipendenza energetica grazie alla condivisione dell’energia green prodotta dalla comunità',    
    icon: <ApartmentIcon />,
    heading: <>Comunità energetica rinnovabile</>,
  },
};