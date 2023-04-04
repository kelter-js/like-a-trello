import { CardContainer } from "./styles";

type CardProps = {
  text: string;
  id: string;
}

export const Card = ({ text }: CardProps): JSX.Element => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  );
}

export default Card;