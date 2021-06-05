import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page"></meta>
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
