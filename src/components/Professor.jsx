import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 10px;
  text-align: center;
  font-size: 2.2rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 800;
`;

const Subtitle = styled.p`
  color: #3985AF;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.1rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #222;
  font-size: 1.08rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;

const List = styled.ul`
  color: #1a3c5a;
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.7em;
  color: #3985AF;
  display: flex;
  align-items: flex-start;
  text-align: left;

  &::before {
    content: '✓';
    color: #3985AF;
    font-weight: bold;
    margin-right: 0.7em;
    display: inline-block;
  }
`;

const SectionTitle = styled.h3`
  color: #1a3c5a;
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Separator = styled.hr`
  border: none;
  border-top: 2px solid #e0e7ef;
  margin: 1.5rem 0;
  width: 100%;
`;

const Professor = () => {
  return (
    <React.Fragment>
      <Title>Profesor Patricio Verón</Title>
      <Subtitle>Director y responsable de SOMA Evaluaciones</Subtitle>
      <Content>
        <Separator />
        <SectionTitle>Títulos</SectionTitle>
        <List>
          <ListItem>Especialista en Programación y evaluación del Ejercicio (UNLP)</ListItem>
          <ListItem>Profesor de Educación Física (UNLP)</ListItem>
        </List>
        <Separator />
        <SectionTitle>Experiencia Profesional</SectionTitle>
        <List>
          <ListItem>Preparador Físico Staff Selección Argentina en categorías Formativas</ListItem>
          <ListItem>Preparador Físico Selección Argentina U15 (2024) y U16 (2025) Femenino</ListItem>
          <ListItem>Coordinador del Área de Fuerza y preparación Física del club Estudiantes de La Plata</ListItem>
          <ListItem>Preparador Físico de la 1ra división de Estudiantes de la Plata (Liga Local, Liga Pre-Federal, Liga Federal)</ListItem>
          <ListItem>Preparador Físico de la categoría U23 en Estudiantes de La Plata</ListItem>
          <ListItem>Readaptador Físico en el Instituto Médico Argentino de Rehabilitación (IMAR)</ListItem>
          <ListItem>Investigador en Ciencias del Deporte, Actividad Física y Salud (UNLP)</ListItem>
        </List>
      </Content>
    </React.Fragment>
  );
};

export default Professor;
