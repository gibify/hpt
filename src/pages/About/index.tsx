import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

const About: React.FC = () => {
  return (
      <Container>
          <Header title="Voltar" route="/" />
      </Container>
  )
}

export default About;