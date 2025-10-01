import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { MainNavigationProps } from '../interfaces';
import { ConvoiLink } from '../link/link';
import { StyledBox, StyledLinkWrapper, StyledList, StyledMenuIcon } from './elements';

export const ConvoiNavigationMobile = ({
  links
}: MainNavigationProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <StyledBox role="presentation" onClick={toggleDrawer(false)}> 

      <StyledList>
        {links.map((link, linkIndex) => (
          <StyledLinkWrapper key={linkIndex}>          
            <ConvoiLink label={link.label} href={link.href}/>
          </StyledLinkWrapper>
        ))}
      </StyledList>
    </StyledBox>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} aria-expanded={open} aria-label="Open menu" sx={{ padding: '0 !important' }}>
        <StyledMenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}