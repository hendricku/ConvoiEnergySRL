import { ButtonCustomProps } from './interfaces';
import { StyledButton } from './elements';

export const ConvoiButton = ({
  endIcon,
  href,
  isLoading,
  label,  
  onClick,
  startIcon,
  variant,
  align = "center",
  backgroundColor = "",
  iconSize = "sm",
  noPadding = false,
  textColor = "dark"
}:ButtonCustomProps) => (
  <StyledButton
    align={align}
    backgroundColor={backgroundColor}
    endIcon={endIcon}
    href={href}
    iconSize={iconSize}
    loading={isLoading}
    noPadding={noPadding}
    onClick={onClick}
    startIcon={startIcon}
    textColor={textColor}
    variant={variant}>
      {label}
  </StyledButton>
)
