export interface ConvoiAccordionProps {
  items: Array<ConvoiAccordionItemsProps>
}

interface ConvoiAccordionItemsProps {
  heading: string,
  content: React.ReactElement
}