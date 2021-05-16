import React from 'react';

import Header from '../../components/Header';

import { 
  Container, 
  Content,
  Form,
  RegisterButton,
  BackgroundImage,
} from './styles';

import LogoImg from '../../assets/Logo.svg';



const Register: React.FC = () => {
  return (
      <Container>
          <Header title="Voltar" route="/" /> 

      <Content>
        <Form>

          <fieldset>
            <legend>Preencha o formulário</legend>

            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite seu Nome completo"/>

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite seu Email"/>

            <label htmlFor="phone">Telefone</label>
            <input type="tel" placeholder="Digite seu Telefone com o DDD"/>

            <label htmlFor="text">Onde nos encontrou?</label>
            <input type="text" placeholder="Nos fale, onde encontrou o grupo"/>
          </fieldset>

          <RegisterButton outlined>Registrar</RegisterButton>

        </Form>

          <BackgroundImage>
              <img src={LogoImg} alt="Logo do Site"/>
          </BackgroundImage>

        </Content>   
         
      </Container>
  )
}

export default Register;
