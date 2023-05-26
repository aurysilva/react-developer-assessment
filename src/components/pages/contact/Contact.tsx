import React from 'react';
import styles from './ContactStyle.module.css';
import PageTile from '../../page-tile/PageTile';

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

      <div className={styles.contactPageContainer}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Submit</button>
        </form>

        <div className={styles.mapContainer}>
          {/* Add your map component or embed code here */}
          <p>Map goes here</p>
        </div>

      </div>
    </>
  );
};

export default ContactPage;
