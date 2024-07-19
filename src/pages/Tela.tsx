import { FunctionComponent } from "react";
import styled from "styled-components";

const PlaceholderUm = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 125%;
  display: inline-block;
  width: 369px;
`;
const UserBio = styled.div`
  position: absolute;
  top: 214px;
  left: 64px;
  width: 369px;
  height: 140px;
`;
const FotoUsuarioIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 66.6px;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const UltimoAcessoChild = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-deepskyblue);
  width: 10px;
  height: 10px;
`;
const LtimoAcessoH = styled.div`
  position: absolute;
  top: 0px;
  left: 18px;
`;
const UltimoAcesso = styled.div`
  position: absolute;
  top: 35px;
  left: 0px;
  width: 183px;
  height: 15px;
`;
const Placeholder = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray);
`;
const HeaderInfo = styled.div`
  position: absolute;
  top: 0px;
  left: 186px;
  width: 183px;
  height: 50px;
`;
const EditButtonChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 4px;
  background-color: #c6c6c6;
  width: 183px;
  height: 32px;
`;
const EditarPerfil = styled.div`
  position: absolute;
  top: 9px;
  left: 59px;
`;
const EditButton = styled.div`
  position: absolute;
  top: 82px;
  left: 185px;
  width: 183px;
  height: 32px;
  color: var(--color-white);
`;
const Header = styled.div`
  position: absolute;
  top: 32px;
  left: 64px;
  width: 369px;
  height: 150px;
  font-size: var(--font-size-xs);
  color: var(--color-deepskyblue);
`;
const HobbieItemChild = styled.div`
  position: absolute;
  top: 7px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-gray);
  width: 5px;
  height: 5px;
`;
const DesenvolvimentoWeb = styled.div`
  position: absolute;
  top: 0px;
  left: 13px;
`;
const HobbieItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 183px;
  height: 19px;
`;
const HobbieItem1 = styled.div`
  position: absolute;
  top: 31px;
  left: 0px;
  width: 90px;
  height: 19px;
`;
const HobbieItemIcon = styled.img`
  position: absolute;
  top: 38px;
  left: 0px;
  width: 5px;
  height: 5px;
`;
const HobbieItem2 = styled.div`
  position: absolute;
  top: 66px;
  left: 0px;
  width: 133px;
  height: 19px;
`;
const HobbieItem3 = styled.div`
  position: absolute;
  top: 101px;
  left: 0px;
  width: 107px;
  height: 19px;
`;
const HobbieList = styled.div`
  position: absolute;
  top: 55px;
  left: 0px;
  width: 183px;
  height: 120px;
`;
const Hobbies = styled.div`
  position: absolute;
  top: 0px;
  left: 44px;
`;
const HobbiesTitleChild = styled.div`
  position: absolute;
  top: 33px;
  left: 47px;
  background-color: var(--color-deepskyblue);
  width: 85px;
  height: 2px;
`;
const IconeHobbies = styled.img`
  position: absolute;
  top: 4px;
  left: 0px;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const HobbiesTitle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 170px;
  height: 39px;
  font-size: 32px;
`;
const Hobbies1 = styled.div`
  position: absolute;
  top: 386px;
  left: 64px;
  width: 183px;
  height: 175px;
`;
const TelaRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-gray);
  font-family: var(--font-inter);
`;

const Tela: FunctionComponent = () => {
  return (
    <TelaRoot>
      <UserBio>
        <PlaceholderUm>
          Placeholder é um desenvolvedor web júnior com habilidades em HTML,
          CSS, JavaScript, TypeScript, ReactJS, NextJS e jQuery. Também possui
          experiência com NodeJS e bancos de dados como MySQL, PostgreSQL e
          MongoDB. Atualmente cursa Análise e Desenvolvimento de Sistemas.
        </PlaceholderUm>
      </UserBio>
      <Header>
        <FotoUsuarioIcon alt="" src="/fotousuario@2x.png" />
        <HeaderInfo>
          <UltimoAcesso>
            <UltimoAcessoChild />
            <LtimoAcessoH>Último acesso há 30 minutos</LtimoAcessoH>
          </UltimoAcesso>
          <Placeholder>Placeholder</Placeholder>
        </HeaderInfo>
        <EditButton>
          <EditButtonChild />
          <EditarPerfil>Editar perfil</EditarPerfil>
        </EditButton>
      </Header>
      <Hobbies1>
        <HobbieList>
          <HobbieItem>
            <HobbieItemChild />
            <DesenvolvimentoWeb>Desenvolvimento WEB</DesenvolvimentoWeb>
          </HobbieItem>
          <HobbieItem1>
            <HobbieItemChild />
            <DesenvolvimentoWeb>Fotografia</DesenvolvimentoWeb>
          </HobbieItem1>
          <HobbieItemIcon alt="" src="/hobbieitem.svg" />
          <HobbieItem2>
            <HobbieItemChild />
            <DesenvolvimentoWeb>Livros de ficção</DesenvolvimentoWeb>
          </HobbieItem2>
          <HobbieItem3>
            <HobbieItemChild />
            <DesenvolvimentoWeb>Caminhadas</DesenvolvimentoWeb>
          </HobbieItem3>
        </HobbieList>
        <HobbiesTitle>
          <Hobbies>Hobbies</Hobbies>
          <HobbiesTitleChild />
          <IconeHobbies alt="" src="/iconehobbies.svg" />
        </HobbiesTitle>
      </Hobbies1>
    </TelaRoot>
  );
};

export default Tela;
