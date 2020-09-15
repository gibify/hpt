import React from 'react';

import { 
    Container, 
    Header,
    Title, 
    Content, 
    Info, 
    Background,
    Image,
    Links
} from './styles';

import LogoImg from '../../assets/Logo.svg';
import LogoFacebook from '../../assets/Logo-Facebook.svg';
import LogoInstagram from '../../assets/Logo-Instagram.svg';

import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
      <Container>
        <Header>
            <a href="#">Quem somos ?</a>
        </Header>

        <Content>
            <Info>
                <Title>
                    <h2>Seja bem vindo ao</h2>
                    <h1>HEBRAICO PRA TODOS</h1>
                </Title>
            
                <Button type="submit">Participar</Button>
                
            </Info>

            <Background>
                <Image >
                    <img src={LogoImg} alt="Logo do Site"/>
                </Image>

                <Links>
                    <a href="https://www.facebook.com/gibify">
                        <img src={LogoFacebook} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/gibify_official/">
                        <img src={LogoInstagram} alt="Intagram"/>
                    </a>
                </Links>
            </Background>

        </Content>

      </Container>
  )
}

export default Home;