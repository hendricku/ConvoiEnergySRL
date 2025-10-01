import { ConvoiAccordionProps } from './interfaces';
import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary, StyledExpandMoreIcon } from './elements';
import { ConvoiHeading } from '../heading/heading';
import { ConvoiText } from '../text/text';

export const ConvoiAccordion = ({
  items
}: ConvoiAccordionProps) => {
  return (
    <div>
      {
        items && items.map( ({ heading, content }, index) => {
          return (
            <StyledAccordion key={index}>
              <StyledAccordionSummary
                expandIcon={<StyledExpandMoreIcon />}
                aria-controls={`panel${index+1}-content`}
                id={`panel${index+1}-header`}
              >
                <ConvoiHeading headingContent={<>{heading}</>}/>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <ConvoiText size="sm">{content}</ConvoiText>
              </StyledAccordionDetails>
            </StyledAccordion> 
          )
        })
      }          
    </div>
  )
}