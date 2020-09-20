import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

interface HeaderProps {
    title: string;
    route: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
      <Container>
        { props.title === 'Voltar'  && <FiArrowLeft color="#33A6F2"/> }
        <Link to={props.route}>
          {props.title}
        </Link>
        { props.title === 'Quem somos'  && <FiArrowRight color="#33A6F2"/> }
      </Container>
  )
}

export default Header;