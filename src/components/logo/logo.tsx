import { StyledLogoImage } from "./elements"
import { ConvoiLogoProps } from "./interfaces"

export const ConvoiLogo = ({
  alt,
  href,
  src,
  variation = ''
}: ConvoiLogoProps) => {
  return (
    <a href={href}>
      <StyledLogoImage src={src} alt={alt} variation={variation}/>
    </a>
  )
}