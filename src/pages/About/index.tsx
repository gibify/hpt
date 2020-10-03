import React from 'react';

import LogoImg from '../../assets/Logo.svg';

import { 
  Container,
  Content,
  Info,
  BackgroundImage,
} from './styles';

import Header from '../../components/Header';

const About: React.FC = () => {
  return (
      <Container>
          <Header title="Voltar" route="/" />

          <Content>
            <Info>
                <p>
                  A página, Hebraico pra todos é destinada aos interessados em aprender o Hebraico Moderno. 
                  Criada em 2007, desde a época do Orkut, junta pessoas de toda parte para trocar conhecimento do idioma, 
                  o Hebraico Moderno. Não se trata de um curso, nem de aulas por parte dos participantes. 
                  A sua proposta é para que haja troca de informação e conhecimento do idioma, 
                  nesse grupo há pessoas disposta a compartilhar o seu conhecimento na língua, 
                  ele é totalmente gratuito, nosso focu nesse grupo é, o ensino através de experiências 
                  vividas por pessoas que estão aprendendo o idioma e outras que já são fluentes. 
                  O grupo é grátis e para qualquer pessoa que esteja interessado em aprender um novo idioma.
              </p>
            </Info>

            <BackgroundImage>
                    <img src={LogoImg} alt="Logo do Site"/>
            </BackgroundImage>
          </Content>
      </Container>
  )
}

export default About;