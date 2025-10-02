'use client'

import { useEffect, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';

import {
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderWrapper,
  StyledNavigation,
  StyledHeaderContentContainer
} from "./elements"
import { ConvoiButton } from '../buttons/button'
import { ConvoiLogo } from '../logo/logo';
import logo from '../../assets/logo.svg'

export const ConvoiHeader = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {    
    const checkScroll = () => {
      const isScrolled = window.scrollY > 0;
      console.log('Scroll position:', window.scrollY, 'isScrolled:', isScrolled);
      setScroll(isScrolled);
    }

    // Set initial scroll state on mount
    checkScroll();
    
    window.addEventListener("scroll", checkScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  
  return (
      <StyledHeaderContainer scroll={scroll}>
        <StyledHeaderContentContainer>
          <StyledHeaderWrapper>
            <StyledHeaderLogo scroll={scroll}>
              <ConvoiLogo alt='logo' href='/' src={logo.src}/>
            </StyledHeaderLogo>

            <StyledNavigation>
             
              <ConvoiButton href="/lavori" label="Lavori"  />
               <ConvoiButton href="/contatti" label="Contatti" startIcon={<EmailIcon />}/>
            </StyledNavigation>
          
          </StyledHeaderWrapper>    
        </StyledHeaderContentContainer>
      </StyledHeaderContainer>
  )
}
