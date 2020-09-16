import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

interface HeaderProps {
    title: string;
    route: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
      <Container>
          { props.title === 'Voltar' && <FiArrowLeft color="#33A6F2"/> }
          <Link to={props.route}>{props.title}</Link>
      </Container>
  )
}

export default Header;