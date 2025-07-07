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

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const validate = (name, value) => {
    switch (name) {
      case 'user_name':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          return 'El nombre solo debe contener letras.';
        }
        break;
      case 'user_email':
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
    const currentForm = form.current;
    const newErrors = {};
    let hasErrors = false;

    ['user_name', 'user_email', 'message'].forEach(fieldName => {
      const error = validate(fieldName, currentForm[fieldName].value);
      if (error) {
        newErrors[fieldName] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      emailjs.sendForm('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            setIsSent(true);
            currentForm.reset();
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <Section id="contacto">
      <Title>Contacto</Title>
      <Info>
        Email: soma.readaptacion@gmail.com - veronpatricio@gmail.com<br />
        Teléfonos: (221) 317-2975 - (221) 319-7336
      </Info>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="user_name" placeholder="Nombre" />
        {errors.user_name && <ErrorMessage>{errors.user_name}</ErrorMessage>}
        <Input type="email" name="user_email" placeholder="Email" />
        {errors.user_email && <ErrorMessage>{errors.user_email}</ErrorMessage>}
        <TextArea rows="3" name="message" placeholder="Mensaje" />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        <Button type="submit">Enviar</Button>
        {isSent && <p>¡Mensaje enviado con éxito!</p>}
      </Form>
    </Section>
  );
};

export default Contact;
