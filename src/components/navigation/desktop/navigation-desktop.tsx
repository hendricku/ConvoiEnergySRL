import { usePathname } from "next/navigation";

import { StyledNavigationListItem } from "./elements";
import { StyledNavigationList } from "./elements";
import { MainNavigationProps } from "../interfaces";
import { ConvoiLink } from "../link/link";

export const ConvoiNavigationDesktop = ({ links }: MainNavigationProps) => {
  const currentPath = usePathname();

  return links.length > 0 ? (
    <StyledNavigationList>
      {links.map((link, index) => (
        <StyledNavigationListItem key={index} active={currentPath === link.href}>
          <ConvoiLink label={link.label} href={link.href} />
        </StyledNavigationListItem>
      ))}
    </StyledNavigationList>
  ) : null;
};