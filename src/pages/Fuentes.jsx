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
`;
const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,60,90,0.10);
  padding: 2.5rem 2rem;
  max-width: 950px;
  width: 100%;
  @media (max-width: 800px) {
    padding: 1.2rem 0.5rem;
    max-width: 99vw;
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
  font-size: 1.35rem;
  font-weight: 700;
  margin: 1.5rem 0 0.7rem 0;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;
const Paragraph = styled.p`
  color: #1a3c5a;
  font-size: 1.15rem;
  margin-bottom: 1.1rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
const List = styled.ul`
  color: #3985AF;
  font-size: 1.08rem;
  margin-bottom: 1.2rem;
  padding-left: 1.2em;
  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding-left: 1em;
  }
`;
const ListItem = styled.li`
  margin-bottom: 0.7em;
`;
const Highlight = styled.span`
  font-weight: bold;
  color: #246b8f;
`;
const Blockquote = styled.blockquote`
  border-left: 4px solid #3985AF;
  background: #f0f6fa;
  margin: 1.5rem 0;
  padding: 1rem 1.5rem;
  font-style: italic;
  color: #1a3c5a;
  font-size: 1.13rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.7rem 0.7rem;
  }
`;
const Separator = styled.hr`
  border: none;
  border-top: 2px solid #e0e7ef;
  margin: 2.2rem 0 2rem 0;
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

export default function Infancia() {
  return (
    <PageWrapper>
      <Card>
        <Title>Infancia</Title>
        <SubTitle>Entrenamiento de la fuerza en niños</SubTitle>
        <Blockquote>
          "Invertir en la fuerza durante la infancia es apostar por una vida más saludable, segura y activa."
        </Blockquote>
        <Paragraph>
          <Highlight>La fuerza es salud, confianza y futuro.</Highlight> El entrenamiento de fuerza en la infancia, cuando es planificado y supervisado por profesionales, es una de las mejores inversiones para el desarrollo integral de niños y adolescentes.
        </Paragraph>
        <Separator />
        <SubTitle>¿Por qué es fundamental entrenar la fuerza desde pequeños?</SubTitle>
        <TipsGrid>
          <TipCard>
            <Highlight>Desarrollo físico óptimo:</Highlight> Mejora la fuerza muscular, la postura y la coordinación motriz, preparando el cuerpo para la vida y el deporte.
          </TipCard>
          <TipCard>
            <Highlight>Prevención de lesiones:</Highlight> Un cuerpo fuerte es menos propenso a lesiones, tanto en la actividad física como en la vida cotidiana.
          </TipCard>
          <TipCard>
            <Highlight>Salud metabólica:</Highlight> Ayuda a regular el peso corporal, reducir la grasa y mejorar el perfil metabólico, especialmente en niños con sobrepeso.
          </TipCard>
          <TipCard>
            <Highlight>Bienestar emocional:</Highlight> La superación de desafíos físicos fortalece la confianza, la resiliencia y la motivación.
          </TipCard>
        </TipsGrid>
        <Separator />
        <SubTitle>¿Es seguro el entrenamiento de fuerza en la infancia?</SubTitle>
        <Paragraph>
          <Highlight>Absolutamente sí.</Highlight> La literatura científica es contundente: bajo supervisión profesional, con técnica adecuada y progresión gradual, el entrenamiento de fuerza es seguro y altamente beneficioso. No existe evidencia de que afecte negativamente el crecimiento ni que dañe huesos o articulaciones. Por el contrario, fortalece el sistema óseo y previene lesiones.
        </Paragraph>
        <Separator />
        <SubTitle>Respaldo científico</SubTitle>
        <List>
          <ListItem><Highlight>Adaptaciones neuromusculares:</Highlight> Incluso en niños preadolescentes, se observan mejoras significativas de fuerza y control motor (Faigenbaum, 2000; NSCA, 2009).</ListItem>
          <ListItem><Highlight>Mejoras metabólicas:</Highlight> Reducción de grasa corporal y mejor perfil metabólico, especialmente en poblaciones con sobrepeso (Casas et al., 2018; SAP, 2018).</ListItem>
          <ListItem><Highlight>Menor riesgo de lesión:</Highlight> El fortalecimiento de músculos y tejidos protege frente a lesiones y mejora la calidad del movimiento (Myer et al., 2013; Faigenbaum, 2011).</ListItem>
          <ListItem><Highlight>Impacto positivo integral:</Highlight> Salud ósea, confianza, adherencia al ejercicio y bienestar general (Lloyd et al., 2016; NSCA, 2009).</ListItem>
        </List>
        <Separator />
        <SubTitle>Desmitificando creencias</SubTitle>
        <TipsGrid>
          <TipCard>
            <Highlight>❌ "Entrenar con pesas detiene el crecimiento"</Highlight><br/>No hay evidencia que lo respalde. La infancia es una etapa ideal para estimular la masa ósea y el desarrollo físico.
          </TipCard>
          <TipCard>
            <Highlight>❌ "Es peligroso y provoca lesiones"</Highlight><br/>Las tasas de lesión en programas supervisados son muy bajas y, de hecho, menores que en deportes populares como fútbol o básquet.
          </TipCard>
          <TipCard>
            <Highlight>❌ "Antes de la pubertad no sirve hacer fuerza"</Highlight><br/>Los niños mejoran su fuerza mediante adaptaciones neuromusculares, aprendiendo técnica y hábitos atléticos desde temprana edad.
          </TipCard>
        </TipsGrid>
        <Separator />
        <SubTitle>Recomendaciones prácticas</SubTitle>
        <List>
          <ListItem><Highlight>Supervisión profesional constante.</Highlight></ListItem>
          <ListItem><Highlight>Técnica y control antes que carga.</Highlight></ListItem>
          <ListItem><Highlight>Progresión gradual y adaptada.</Highlight></ListItem>
          <ListItem><Highlight>Entorno seguro, motivador y lúdico.</Highlight></ListItem>
          <ListItem><Highlight>Planificación individual según edad biológica y experiencia motriz.</Highlight></ListItem>
        </List>
        <Blockquote>
          "El entrenamiento de fuerza en la infancia es una herramienta poderosa para el desarrollo físico, mental y social. Apostar por la fuerza desde pequeños es invertir en salud y calidad de vida para el futuro."
        </Blockquote>
        <FloatingHomeButton to="/" title="Volver al inicio">
          <FaHome />
        </FloatingHomeButton>
      </Card>
    </PageWrapper>
  );
} 