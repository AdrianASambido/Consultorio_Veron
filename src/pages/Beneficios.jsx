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

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0.7rem;
  }
`;

const TipCard = styled.div`
  background: #f4f8fb;
  border-left: 4px solid #3985AF;
  border-radius: 8px;
  padding: 1rem 1.2rem;
  color: #1a3c5a;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(26,60,90,0.04);
  @media (max-width: 600px) {
    font-size: 0.97rem;
    padding: 0.7rem 0.7rem;
  }
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

export default function Beneficios() {
  return (
    <PageWrapper>
      <Card>
        <Title>Beneficios del Ejercicio</Title>
        <Paragraph>
          El ejercicio físico regular es una de las mejores inversiones para tu salud física y mental. Aquí te mostramos por qué.
        </Paragraph>
        <Separator />
        <SubTitle>5 Beneficios Clave del Ejercicio</SubTitle>
        <TipsGrid>
          <TipCard>
            <Highlight>Mejora la salud cardiovascular y metabólica:</Highlight> ayudando a controlar la presión arterial y el azúcar en sangre.
          </TipCard>
          <TipCard>
            <Highlight>Aumenta la fuerza, la postura y el control corporal:</Highlight> reduciendo dolores por malas posiciones o sedentarismo, como la lumbalgia y la cervicalgia.
          </TipCard>
          <TipCard>
            <Highlight>Favorece la salud mental:</Highlight> reduciendo el estrés, la ansiedad y mejorando el estado de ánimo.
          </TipCard>
          <TipCard>
            <Highlight>Aumenta la energía y la productividad diaria:</Highlight> mejorando el rendimiento físico y cognitivo.
          </TipCard>
          <TipCard>
            <Highlight>Mejora la calidad del sueño:</Highlight> favoreciendo un descanso más profundo y reparador.
          </TipCard>
        </TipsGrid>
        <Separator />
        <Blockquote>
          "¿Por qué entrenar si estás sano? Porque podés estar mejor. En SOMA creemos que el movimiento es una herramienta poderosa para prevenir, fortalecer y transformar tu calidad de vida."
        </Blockquote>
        <SubTitle>Experimentá con el entrenamiento regular</SubTitle>
        <List>
          <ListItem>Más fuerza y energía para tu día a día.</ListItem>
          <ListItem>Menos estrés y mejor descanso.</ListItem>
          <ListItem>Huesos y articulaciones más sanas.</ListItem>
          <ListItem>Mejor postura y menos dolor.</ListItem>
          <ListItem>Mente más clara y positiva.</ListItem>
        </List>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
}
