
import { StyledNavigationLink } from "./elements";
import { LinkCustomProps } from "./interfaces";
import { ConvoiText } from "../../../components/text/text";

export const ConvoiLink = ({  
  href,
  label,
  linkColor = "dark",
  size = "md",
  target = "_self"
}:LinkCustomProps) => {
  return (
    <StyledNavigationLink linkColor={linkColor} href={href} size={size} target={target}>
      {label}
    </StyledNavigationLink>
  )
};