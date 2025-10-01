import { StyledContainer } from "./elements"
import { ContainerProps } from "./interfaces"

export const ConvoiContainer = ({
  background,
  children
}: ContainerProps) => {
  return (
    <StyledContainer background={background}>
      {children}
    </StyledContainer>
  )
}