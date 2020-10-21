import React, { useState } from 'react';
import { Description, Card as CardComponent, Title, Icon } from './card.style';

const Card = ({ onClick, title, description, id, activeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    onClick(id);
  };

  React.useEffect(() => {
    setIsOpen(activeId === id);
  }, [activeId, id, isOpen]);

  return (
    <>
      <CardComponent onClick={toggle} opened={isOpen}>
        <Title>
          <Icon>{isOpen ? '-' : '+'}</Icon>
          {title}
        </Title>
      </CardComponent>
      {isOpen && <Description>{description}</Description>}
    </>
  );
};

export default Card;
