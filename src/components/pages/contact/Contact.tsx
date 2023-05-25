import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTile from '../../page-tile/PageTile';

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactForm = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 8px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 8px 16px;
    background-color: #f8e256;
    color: #333;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
`;

const MapContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: #f2f2f2;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <PageTile
        pageTile="Get in Touch"
        pageSubTile="We aim to get back to you within 1 working day"
        bgImage="https://calliedoart.files.wordpress.com/2015/02/cropped-paralax-background-3.jpg"
      />

      <ContactPageContainer>
        <h2>Contact Us</h2>
        <ContactForm onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </ContactForm>

        <MapContainer>
          {/* Add your map component or embed code here */}
          <p>Map goes here</p>
        </MapContainer>

        <Link to="/">Go back to home</Link>
      </ContactPageContainer>
    </>
  );
};

export default ContactPage;
