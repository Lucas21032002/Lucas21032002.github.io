import React from "react";
import {
  DesktopOutlined,
  UserOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { Layout, Row, Col } from "antd";
import { Card } from "../Card/Card";
import {
  FlexAbout,
  FlexPresentation,
  FlexNavigation,
} from "./PageContainer.style";

const { Content } = Layout;

export const PageContainer: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "gray" }}>
      <Row style={{ width: "100%" }}>
        <Col
          span={12}
          style={{
            backgroundColor: "#031c30",
            justifyContent: "center",
            width: "50%",
            position: "fixed",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            color: "black",
            background:
              "radial-gradient(circle at top left, rgba(3, 28, 48, 0.4), rgba(3, 28, 48) 70%)",
          }}
        >
          <FlexPresentation>
            <h1>Lucas Ferreira</h1>
            <h3>Desenvolvedor Frontend</h3>
            <p>
              Desenvolvedor frontend com experiência em React e outras
              tecnologias JavaScript.
            </p>
          </FlexPresentation>
          <FlexNavigation>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-ferreira-24693315a/"
                  target="blank"
                >
                  <LinkedinOutlined />
                </a>
              </li>
              <li>
                <a href="https://github.com/Lucas21032002" target="blank">
                  <GithubOutlined />
                </a>
              </li>
              <li>
                <a href="">
                  <MailOutlined />
                </a>
              </li>
            </ul>
          </FlexNavigation>
        </Col>
        <Col
          span={12}
          style={{
            backgroundColor: "#031c30",
            color: "white",
            justifyContent: "center",
            marginLeft: "50%",
            height: "100vh",
            overflow: "auto",
            paddingTop: "150px",
            display: "flex",
          }}
        >
          <Content
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <FlexAbout>
              <p>
                Me chamo Lucas, tenho 22 anos e estudo programação desde os 19.
                Minha jornada na tecnologia começou com um bootcamp intensivo de
                um ano focado em JavaScript, onde consolidei meus conhecimentos
                em desenvolvimento web. Esse período inicial foi crucial para me
                preparar para desafios mais complexos na área.
              </p>
              <p>
                Após o bootcamp, ingressei no programa Newbies da Levva, que
                durou 8 meses e aprofundou meus conhecimentos em React e C# para
                backend. Participei de aulas teóricas e práticas, desenvolvendo
                projetos que reforçaram minha compreensão dessas tecnologias. Ao
                final do programa, trabalhei em um projeto real, criando um
                aplicativo móvel para a ONG Amigos do Bem com uma equipe
                talentosa, o que aprimorou minhas habilidades técnicas e de
                colaboração.
              </p>
              <p>
                Concluído o projeto, fui contratado como Analista de
                Desenvolvimento Júnior na Levva. Atualmente, trabalho
                principalmente com frontend, utilizando React e outras
                linguagens JavaScript, criando interfaces de usuário eficientes
                e integrando-as com funcionalidades backend.
              </p>
            </FlexAbout>

            <Card
              date="09/2021 - 10/2022"
              description="Bootcamp intensivo de um ano focado em JavaScript, onde consolidei meus conhecimentos em desenvolvimento web."
              tecnologies={["React", "Node", "Express", "TypeScript"]}
              title="Trybe - Desenvolvimento Web"
            />
            <Card
              date="02/2023 - 10/2023"
              description="Programa de formação de desenvolvedores da Levva, com duração de 8 meses. Aprofundei meus conhecimentos em React e C# para backend."
              tecnologies={["React", "Node", "C#", "TypeScript"]}
              title="Programa Newbies - Levva"
            />
            <Card
              date="10/2023 - Atualmente"
              description="Analista de Desenvolvimento Júnior na Levva, trabalhando principalmente com frontend, utilizando React e outras linguagens JavaScript, criando interfaces de usuário eficientes e integrando-as com funcionalidades backend."
              tecnologies={["React", "Node", "C#", "TypeScript"]}
              title="Desenvolvedor Frontend Jr - Levva"
            />
            <Card
              date="10/10/2021"
              description="Descrição do projeto"
              tecnologies={["React", "Node", "MongoDB"]}
              title="Projeto 4"
            />
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};
