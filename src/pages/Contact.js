import React, { useState } from "react";
import styled from "styled-components";


const ContactSection = styled.section`
  padding: 40px;
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
`;


const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;


const ContactInfo = styled.div`
  width: 45%;
`;

const ContactInfoTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContactListItem = styled.li`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;

  strong {
    color: #333;
  }
`;


const ContactForm = styled.div`
  width: 45%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;


const MapContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const MapIframe = styled.iframe`
  width: 100%;
  max-width: 1200px;
  height: 450px;
  border: 0;
  border-radius: 8px;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <ContactSection>
      <Title>Контакты</Title>
      <Description>Свяжитесь с нами, и мы с радостью поможем вам с любыми вопросами. Мы всегда на связи!</Description>

      <ContactDetails>
        <ContactInfo>
          <ContactInfoTitle>Наши координаты</ContactInfoTitle>
          <ContactList>
            <ContactListItem><strong>Телефон:</strong>+996 554 412 238 <br /> +996 550 390 390 <br /> +996 703 444 888 </ContactListItem>
            <ContactListItem><strong>Email:</strong> info@company.com</ContactListItem>
            <ContactListItem><strong>Tik Tok</strong></ContactListItem>
            <ContactListItem><strong>Адрес:</strong> Кыргызстан, Чуйская область, Исык Атинский район, с. Ново Покровка, ул. Ленина 78</ContactListItem>
          </ContactList>
        </ContactInfo>

        <ContactForm>
          <FormTitle>Оставьте сообщение</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Ваш email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Отправить</SubmitButton>
          </form>
        </ContactForm>
      </ContactDetails>

      <MapContainer>
        <h2>Наш офис</h2>
        <MapIframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30645.882216342634!2d74.73994187113799!3d42.878340156911655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb162a438006b%3A0x965c6cd127d265fc!2z0JrQpSDQotCw0LfQsNC20LDQvQ!5e0!3m2!1sru!2skg!4v1731774587438!5m2!1sru!2skg"
        />
      </MapContainer>
    </ContactSection>
  );
};

export default Contact;
