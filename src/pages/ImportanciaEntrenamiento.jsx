import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f8fb;
  padding: 1rem;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  padding: 2.5rem 2rem;
  max-width: 800px;
  width: 100%;
  @media (max-width: 600px) {
    padding: 1.2rem 0.5rem;
    max-width: 98vw;
  }
`;
const Title = styled.h1`
  color: #3985AF;
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
const SubTitle = styled.h2`
  color: #1a3c5a;
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
const List = styled.ul`
  color: #1a3c5a;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  padding-left: 1.5em;
  list-style-type: '✓ ';
  @media (max-width: 600px) {
    font-size: 1rem;
    padding-left: 1em;
  }
`;
const ListItem = styled.li`
  margin-bottom: 0.7em;
  color: #3985AF;
`;
const Paragraph = styled.p`
  color: #1a3c5a;
  font-size: 1.13rem;
  text-align: center;
  margin: 1rem 0;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const Blockquote = styled.blockquote`
  border-left: 4px solid #3985AF;
  background: #f0f6fa;
  margin: 2rem 0;
  padding: 1rem 1.5rem;
  font-style: italic;
  color: #1a3c5a;
  font-size: 1.13rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.7rem 0.7rem;
  }
`;
const Highlight = styled.span`
  font-weight: bold;
  color: #246b8f;
`;
const Separator = styled.hr`
  border: none;
  border-top: 2px solid #e0e7ef;
  margin: 2.2rem 0;
`;
const FloatingHomeButton = styled(Link)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  background: #3985AF;
  color: #fff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(26,60,90,0.18);
  font-size: 2rem;
  z-index: 1000;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #246b8f;
    transform: scale(1.08);
  }
`;

export default function ImportanciaEntrenamiento() {
  return (
    <PageWrapper>
      <Card>
        <Title>Importancia del Entrenamiento</Title>
        <Blockquote>
          ¿Sabías que la actividad física es una de las herramientas más efectivas para conservar la funcionalidad e independencia en la vejez?
        </Blockquote>
        <Paragraph>
          El entrenamiento de fuerza y control postural puede ayudarte a:
        </Paragraph>
        <List>
          <ListItem>Mejorar el equilibrio y la coordinación.</ListItem>
          <ListItem>Fortalecer huesos y músculos.</ListItem>
          <ListItem>Prevenir enfermedades como la osteoporosis, la hipertensión y la diabetes tipo II.</ListItem>
          <ListItem>Elevar tu energía y bienestar diario.</ListItem>
        </List>
        <Paragraph>
          En SOMA diseñamos entrenamientos específicos para cada persona, con foco en la funcionalidad, la seguridad y la confianza en el movimiento.
        </Paragraph>
        <Separator />
        <SubTitle>¿Respirar bien te hace rendir más?</SubTitle>
        <Paragraph>
          Sí. Y la ciencia lo demuestra. En este post te contamos cómo la respiración diafragmática y la presión intraabdominal pueden mejorar tu estabilidad central, potenciar tus levantamientos y reducir el riesgo de lesión.
        </Paragraph>
        <Blockquote>
          Aprendé qué es el bracing, cómo usarlo en tus entrenamientos y por qué el entrenamiento del diafragma es una herramienta clave para tu rendimiento físico y tu salud postural. Todo respaldado por evidencia científica.
        </Blockquote>
        <Paragraph>
          <Highlight>En SOMA entrenamos con criterio. Respirar bien también se entrena.</Highlight>
        </Paragraph>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
}
