import { CardContainer } from "./styles";

type CardProps = {
  text: string;
}

export const Card = ({ text }: CardProps): JSX.Element => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  );
}

export default Card;