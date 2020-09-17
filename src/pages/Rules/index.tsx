import React from 'react';

import { 
  Container,
  Content,
  HeaderInfo,
  BodyInfo,
  FooterInfo,
  FooterButton
} from './styles';

import Header from '../../components/Header';


const Rules: React.FC = () => {
  return (
    <Container>
      <Header title="Voltar" route="/" />
        
      <Content>
        <HeaderInfo>
          <h1>Como funciona o grupo</h1>
          <p>
            O grupo do WhatsApp não é um curso de Hebraico, 
            ele é livre para os membros se comunicarem e 
            fazerrem perguntas sobre o Hebraico Moderno. 
            Há lições em slides e exercícios, que são passados periodicamente. 
          </p>
        </HeaderInfo>

        <BodyInfo>
          <h1>Importante Saber</h1>
          <p>
            Este grupo apoiao o estado de Israel e, ele é um grupo Judaico. 
            Por isso, não entre se você não gosta de Israel, de Judeus, 
            se é Antissemita, se é Antissionista, se apoia o Boicote do BDS, 
            se é Neonazista, Racista, Xenofóbico ou pertence a seitas que afrontam o Judaísmo. 
            Este grupo edentifica com os princípios da tolerância de Credo, de Costumes, Religiosas, 
            Racias, Étnicas, de Gênero (LGBT), etc. Qualquer um dos integrantes manifestar intolerãncia 
            com algum outro membrserá excluído.
        </p>
        </BodyInfo>

        <FooterInfo>
          <h1>As regras</h1>
          <p>
            O grupo não se destina a socialização, todas as mensagens deverão estar ligadas ao objetivo do grupo: 
            O Hebraico moderno. Perguntas com temática relegiosa, política ou que coloquem em risco a segurança 
            de Israel não são permitidas, mesmo que sejam ligadas ao Hebraico.<br /><br />
            Os administradores têm a prerrogativa de, criar qualquer regra a qualquer momento, 
            e não seguir algumas delas, se assim ele julgar conveniente.
            Não são permitidas postagens com mais de 15 linhas, 
            e não responderemos perguntas feitas no privado.<br /><br />
            Não é permitido postar mídias ou links sem prévia autorização de um dos administradores. 
            Nem pedir ou oferecer material no grupo ou por privado, gratuito ou pago.<br /><br />
            A comunicação no grupo é por mensagens escritas. As pronúncias são esclarecidas através das transliterações. 
            Os administradiores poderão enviar os áudios ou vídeos que julgarem necessários.<br /><br />
            É expressamente proibido mencionar os nomes de <strong>D’us</strong> em hebraico, seja em qualquer alfabeto, 
            especialmente na saudação <strong>Shalom Ad’nai</strong>.
            Não é permitido usar a escrita com <strong>Nikkud, os sinais vocálicos, chamados pontinhos</strong>.<br /><br />
            São proibidas postagens que contestam ações ou determinações da administração. 
            O descomprimento das regras, será excluido imeditamente.
            Os autores das postagens são os únicos responsáveis, civil e criminalmente, 
            por seus conteúdos.<br /><br /> Assim, não tem o grupo nem seus administradores qualquer responsabilidade por elas, 
            haja vista que o WhatsApp não disponibiliza exclusão de postagens até o momento, exceto por seus atores. 
            Qualquer membro pode ser excluído, mesmo imotivamente, a qualquer tempo.
          </p>
        </FooterInfo>

        <FooterButton>
          <div>
            <a href="https://api.whatsapp.com/send?phone=5548998463847" target="_blank"  rel="noopener noreferrer">Entrar</a>
          </div>
        </FooterButton>

      </Content>
    </Container>
  )
}

export default Rules;