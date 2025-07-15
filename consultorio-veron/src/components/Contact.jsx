import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8em;
  margin: 0;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  text-align: center;
`;

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          return 'El nombre solo debe contener letras.';
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          return 'El email no es válido.';
        }
        break;
      case 'message':
        if (!value.trim()) {
          return 'El mensaje no puede estar vacío.';
        }
        break;
      default:
        break;
    }
    return '';
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(false);
    setSendError('');
    const currentForm = form.current;
    const newErrors = {};
    let hasErrors = false;

    ['name', 'email', 'message'].forEach(fieldName => {
      const error = validate(fieldName, currentForm[fieldName].value);
      if (error) {
        newErrors[fieldName] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      setIsSending(true);
      emailjs.sendForm('service_f5us5e3', 'template_em6d48m', form.current, '1LuijfR8L4qznPf37')
        .then((result) => {
            console.log(result.text);
            setIsSent(true);
            currentForm.reset();
            setErrors({});
        }, (error) => {
            console.log(error.text);
            setSendError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        })
        .finally(() => {
            setIsSending(false);
        });
    }
  };

  return (
    <Section id="contacto">
      <Title>Contacto</Title>
      <Info>
        Email: soma.readaptacion@gmail.com<br/>
        Teléfonos: (221) 317-2975 - (221) 319-7336
      </Info>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="name" placeholder="Nombre" />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <Input type="email" name="email" placeholder="Email" />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <TextArea rows="3" name="message" placeholder="Mensaje" />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        <Button type="submit" disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar'}
        </Button>
        {isSent && <SuccessMessage>¡Mensaje enviado con éxito!</SuccessMessage>}
        {sendError && <ErrorMessage>{sendError}</ErrorMessage>}
      </Form>
    </Section>
  );
};

export default Contact;
