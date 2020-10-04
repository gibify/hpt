import React from 'react';
import { Link } from 'react-router-dom'

import { 
    Container, 
    Content, 
    Info, 
    Title, 
    HomeButton,
    Background,
    Image,
    Links
} from './styles';

import LogoImg from '../../assets/Logo.svg';
import LogoHPT from '../../assets/Logo-HPT.svg';
import LogoFacebook from '../../assets/Logo-Facebook.svg';
import LogoInstagram from '../../assets/Logo-Instagram.svg';

import Header from '../../components/Header';

const Home: React.FC = () => {
    const facebook = "https://www.facebook.com/groups/hebraicoparatodos";
    const instagram = "https://www.instagram.com/hebraicooficial/";

  return (
      <Container>
        <Header title="Quem somos" route="about" />
            
        <Content>
            <Info>
                <Title>
                    <h2>Seja bem vindo ao</h2>
                    <img src={LogoHPT} alt="logo"/>
                </Title>

                <Link to="/rules">
                    <HomeButton>Participar</HomeButton>
                </Link>

            </Info>

            <Background>
                <Image >
                    <img src={LogoImg} alt="Logo do Site"/>
                </Image>

                <Links>
                    <a href={facebook} target="_blank"  rel="noopener noreferrer" >
                        <img src={LogoFacebook} alt="Facebook"/>
                    </a>
                    <a href={instagram} target="_blank"  rel="noopener noreferrer"> 
                        <img src={LogoInstagram} alt="Intagram"/>
                    </a>
                </Links>
            </Background>

        </Content>

      </Container>
  )
}

export default Home;