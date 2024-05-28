import React from "react";
import { HeaderCard, DescriptionCard, CardContainer } from "./Card.style";

type CardProps = {
  title?: string;
  date?: string;
  description: string;
  tecnologies?: string[];
};

export const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  tecnologies,
}) => {
  return (
    <CardContainer>
      <HeaderCard>
        <span>{date}</span>
        <h3>{title}</h3>
      </HeaderCard>
      <DescriptionCard>
        <p>{description}</p>
      </DescriptionCard>
      <ul>
        {tecnologies?.map((tecnology) => (
          <li key={tecnology}>{tecnology}</li>
        ))}
      </ul>
    </CardContainer>
  );
};
