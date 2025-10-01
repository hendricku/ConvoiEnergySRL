import { StyledText } from "./elements"
import { ConvoiTextProps } from "./interfaces"

export const ConvoiText = ({    
  children,  
  align = 'left',
  color = 'main',
  display = 'block',
  noMargin = false,
  size = 'md'
}: ConvoiTextProps) => {
  return (
    <StyledText align={align} color={color} display={display} noMargin={noMargin} size={size}>
      {children}
    </StyledText>
  )
}