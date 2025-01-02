import React from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <SocialLinks />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}