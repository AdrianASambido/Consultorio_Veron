import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;
const Title = styled.h1`
  color: #3985AF;
  font-size: 2.2rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  text-align: center;
`;
const List = styled.ul`
  color: #1a3c5a;
  font-size: 1.1rem;
  line-height: 1.7;
`;

export default function Fuentes() {
  return (
    <Page>
      <Title>Fuentes</Title>
      <List>
        <li><b>Soberanes Fernández, R. et al. (2009).</b> Funcionalidad en adultos mayores y su calidad de vida. Revista Médica del ISSSTE.</li>
        <li><b>García Molina, M. et al. (2010).</b> Beneficios de la actividad física en adultos mayores. Revista Andaluza de Medicina del Deporte.</li>
        <li><b>Poblete Valderrama, G. (2016).</b> Nivel de actividad física y funcionalidad en adultos mayores. Tesis, Universidad Austral de Chile.</li>
        <li><b>Fragala, M. S. et al. (2017).</b> Entrenamiento de fuerza para adultos mayores. American College of Sports Medicine.</li>
        <li><b>Aranda, R. M. (2018).</b> Actividad física y calidad de vida en el adulto mayor. Una revisión narrativa. Revista Habanera de Ciencias Médicas, 17(5), 813</li>
      </List>
    </Page>
  );
} 