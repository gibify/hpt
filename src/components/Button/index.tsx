import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ButtonProps {
  title: string;
  route: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container>
      <Link to={props.route}>{props.title}</Link>
    </Container>
  )
}

export default Button;