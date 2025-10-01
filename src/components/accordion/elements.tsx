import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";

export const StyledAccordion = styled(Accordion)(
  ({ theme: { palette } }) => ({
    boxShadow: 'none !important',
    borderBottom: `1px ${palette.secondary.dark} solid`,
    borderRadius: '0 !important',
    margin: '0 !important',
    padding: '2rem 0 0 0',
    background: 'none',

    '&:first-child': {
      borderTop: `1px ${palette.secondary.dark} solid`,
    }
  })
);

export const StyledAccordionDetails = styled(AccordionDetails)({
  marginBottom: '2rem',
  padding: 0,

  fontSize: '14px',

  'p': {
    marginBottom: '2rem',
  }
});

export const StyledAccordionSummary = styled(AccordionSummary)({
  boxShadow: 'none',
  minHeight: 'unset !important',
  marginBottom: '2rem',
  padding: 0,

  fontSize: '18px',

  '.MuiAccordionSummary-content': {
    margin: '0 !important',
  }
});

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)(
  ({ theme: { palette } }) => ({
    '*': {
      color: palette.secondary.dark
    }
  })
)