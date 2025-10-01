import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from "@mui/material/styles";

import { StyledButtonProps } from './interfaces';
import {
  getBackgroundColor,
  getBackgroundHoverColor,
  getIconSize,
  getTextColor,
  getTextHoverColor
} from '../../lib/utils/utils';

export const StyledButton = styled(LoadingButton)<StyledButtonProps>(
  ({ align, backgroundColor, iconSize, noPadding, textColor, theme: { palette, typography } }) => ({ 
    justifyContent: align,
    
    transition: 'all 0.2s ease-out',

    height: 'fit-content',
    border: backgroundColor === ''
      ? 'none'
      : `1px ${getBackgroundColor(backgroundColor, palette)} solid`,
    borderRadius: '50px',
    padding: noPadding
      ? '0'
      :'10px 35px',
    boxShadow: 'none',

    background: backgroundColor === ''
      ? 'none'
      : getBackgroundColor(backgroundColor, palette),
      
    color: getTextColor(textColor, palette),
    
    fontSize: '18px',
    fontFamily: typography.fontFamily,
    fontWeight: 'normal',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      border: backgroundColor === ''
        ? 'none'
        : `1px ${getBackgroundHoverColor(backgroundColor, palette)} solid`,
        

      background: backgroundColor === ''
        ? 'none'
        : getBackgroundHoverColor(backgroundColor, palette),

      color: getTextHoverColor(backgroundColor, palette),
    },  
    
    'svg': {
      fontSize: `${getIconSize(iconSize)} !important`,
    },

    'path': {
      fontSize: `${getIconSize(iconSize)} !important`,
    },
  })
)