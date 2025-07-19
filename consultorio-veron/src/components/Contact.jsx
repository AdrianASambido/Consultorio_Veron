import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { FaEnvelope } from 'react-icons/fa';

const Section = styled.section`
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  padding: 40px 24px 32px 24px;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactIcon = styled(FaEnvelope)`
  color: #3985AF;
  font-size: 2.5rem;
  margin-bottom: 12px;
`;
const Title = styled.h2`
  color: #1a3c5a;
  margin-bottom: 8px;
  font-size: 2rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-weight: 800;
`;
const Subtitle = styled.p`
  color: #3985AF;
  margin-bottom: 18px;
  font-size: 1.1rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  text-align: center;
`;
const Info = styled.div`
  margin-bottom: 14px;
  color: #1a3c5a;
  font-size: 1.08rem;
  text-align: center;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;
const InfoStrong = styled.span`
  font-weight: 700;
  color: #1a3c5a;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1.5px solid #b0c4d9;
  font-size: 1rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;
const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1.5px solid #b0c4d9;
  font-size: 1rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
`;
const Button = styled.button`
  background: #3985AF;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  transition: background 0.2s;
  &:hover {
    background: #1a3c5a;
  }
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
      const templateParams = {
        name: currentForm.name.value,
        email: currentForm.email.value,
        message: currentForm.message.value,
        reply_to: currentForm.email.value,
      };

      const notificationPromise = emailjs.send('service_gwu2u2t', 'template_n996u3t', templateParams, '1LuijfR8L4qznPf37');
      const autoReplyPromise = emailjs.send('service_gwu2u2t', 'template_em6d48m', templateParams, '1LuijfR8L4qznPf37');

      Promise.all([notificationPromise, autoReplyPromise])
        .then((responses) => {
            console.log('Emails sent successfully:', responses);
            setIsSent(true);
            currentForm.reset();
            setErrors({});
        }, (error) => {
            console.log('Failed to send emails:', error);
            setSendError('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        })
        .finally(() => {
            setIsSending(false);
        });
    }
  };

  return (
    <Section id="contacto">
      <ContactIcon />
      <Title>Contacto</Title>
      <Subtitle>¿Listo para dar el siguiente paso? ¡Escribinos y te ayudamos a transformar tu bienestar!</Subtitle>
      <Info>
        ¿Tenés dudas? Escribinos a:<br/>
        <InfoStrong>Email:</InfoStrong> soma.readaptacion@gmail.com<br/>
        <InfoStrong>Teléfonos:</InfoStrong> (221) 319-7336 / (221) 317-2975<br/>
        <span>¡Estamos para ayudarte!</span>
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
