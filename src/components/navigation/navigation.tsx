import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ConvoiNavigationDesktop } from './desktop/navigation-desktop';
import { ConvoiNavigationMobile } from './mobile/navigation-mobile';
import { MainNavigationProps } from './interfaces';

export const ConvoiNavigation = ({
  links
}: MainNavigationProps) => {
  const theme = useTheme();
  const isMobileMode = useMediaQuery(theme.breakpoints.down('md'));

  return (    
    isMobileMode 
      ? <ConvoiNavigationMobile links={links}/>
      : <ConvoiNavigationDesktop links={links}/>
  );
};