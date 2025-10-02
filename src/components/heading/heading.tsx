import { ConvoiHeadingProps } from './interfaces';
import { StyledHeading } from './elements';

export const ConvoiHeading = ({  
  headingContent,
  variant,
  width,  
  align = 'left',

  color = 'dark',
  noMargin = false
}: ConvoiHeadingProps) => {
  return (
    <StyledHeading align={align} color={color} noMargin={noMargin} variant={variant} width={width}>{headingContent}</StyledHeading>
  );
}