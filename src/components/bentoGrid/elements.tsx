import { styled } from "@mui/material/styles";

interface StyledBentoGridItemProps {
  isPortrait?: boolean;
  isTextBlock?: boolean;
}

export const StyledBentoGridContainer = styled('div')(
  ({ theme: { breakpoints, spacing } }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: '200px',
    gap: '24px',    
    // padding: 0,
    width: '100%',

    [breakpoints.down('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridAutoRows: '180px',
    },

    [breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridAutoRows: '160px',
    },

    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gridAutoRows: '200px',
    },
  })
);

export const StyledBentoGridItem = styled('div')<StyledBentoGridItemProps>(
  ({ theme: { spacing, breakpoints, palette }, isPortrait, isTextBlock }) => ({
    // borderRadius: spacing(1),
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: 'none',
    cursor: 'pointer',
    backgroundColor: isTextBlock ? '#f8f9fa' : 'transparent',


    '&:nth-of-type(1)': {
      gridColumn: 'span 1',
      gridRow: 'span 2',
    },
    '&:nth-of-type(2)': {
      gridColumn: 'span 1',
      gridRow: 'span 1',
    },
    '&:nth-of-type(3)': {
      gridColumn: 'span 1',
      gridRow: 'span 2',
    },
    '&:nth-of-type(4)': {
      gridColumn: 'span 1',
      gridRow: 'span 2',
    },
    '&:nth-of-type(5)': {
      gridColumn: 'span 1',
      gridRow: 'span 2',
    },
    '&:nth-of-type(6)': {
      gridColumn: 'span 1',
      gridRow: 'span 1',
    },
    '&:nth-of-type(7)': {
      gridColumn: 'span 2',
      gridRow: 'span 1',
    },
    '&:nth-of-type(8)': {
      gridColumn: 'span 2',
      gridRow: 'span 2', // Portrait
    },
    '&:nth-of-type(9)': {
      gridColumn: 'span 2',
      gridRow: 'span 2', // Portrait
    },
 


    [breakpoints.down('lg')]: {
      '&:nth-of-type(7)': {
        gridColumn: 'span 2',
      },
    },

    [breakpoints.down('md')]: {
      '&:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(5), &:nth-of-type(6)': {
        gridColumn: 'span 1',
        gridRow: 'span 1',
      },
      '&:nth-of-type(4), &:nth-of-type(8), &:nth-of-type(9)': {
        gridColumn: 'span 1',
        gridRow: 'span 2',
      },
      '&:nth-of-type(7)': {
        gridColumn: 'span 2',
        gridRow: 'span 1',
      },
    },

    [breakpoints.down('sm')]: {
      '&:nth-of-type(n)': {
        gridColumn: 'span 1',
        gridRow: 'span 1',
      },
    },

    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      zIndex: 1,
    },

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },

    '& .text-content': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none',
      },
    },

    '& .text-content h2': {
      fontSize: '4rem',
      fontWeight: 800,
      color: '#ffffff',
      margin: 0,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      zIndex: 1,

      [breakpoints.down('md')]: {
        fontSize: '3rem',
      },

      [breakpoints.down('sm')]: {
        fontSize: '2.5rem',
      },
    },
  })
);