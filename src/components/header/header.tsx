'use client'

import { useEffect, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';


import {
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderWrapper,
  StyledNavigation
} from "./elements"
import { ConvoiButton } from '../buttons/button'
import { ConvoiContainer } from '../container/container';
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
        <ConvoiContainer>
          <StyledHeaderWrapper>
            <StyledHeaderLogo scroll={scroll}>
              <ConvoiLogo alt='logo' href='/' src={logo.src}/>
            </StyledHeaderLogo>

            <StyledNavigation>
             
              <ConvoiButton href="/lavori" label="lavori"  />
               <ConvoiButton href="/contatti" label="Contatti" startIcon={<EmailIcon />}/>
            </StyledNavigation>
          
          </StyledHeaderWrapper>    
        </ConvoiContainer>
      </StyledHeaderContainer>
  )
}