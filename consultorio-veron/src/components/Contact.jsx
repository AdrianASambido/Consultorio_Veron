import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #f4f8fb;
  border-radius: 10px;
  padding: 24px 18px;
  margin: 20px 0;
`;

const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 12px;
`;

const Info = styled.div`
  margin-bottom: 14px;
  color: #222;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #b0c4d9;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #b0c4d9;
`;

const Button = styled.button`
  background: #1a3c5a;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  cursor: pointer;
  font-weight: bold;
`;

const Contact = () => (
  <Section>
    <Title>Contacto</Title>
    <Info>
      Email: consultorio@ejemplo.com<br />
      Teléfono: (011) 1234-5678
    </Info>
    <Form onSubmit={e => e.preventDefault()}>
      <Input type="text" placeholder="Nombre" required />
      <Input type="email" placeholder="Email" required />
      <TextArea rows="3" placeholder="Mensaje" required />
      <Button type="submit">Enviar</Button>
    </Form>
  </Section>
);

export default Contact; 