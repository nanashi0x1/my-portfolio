import React, { useState } from 'react';
import { Github, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      'service_l6tgm6r', // Your provided service ID
      'template_5fa0a2v', // Your provided template ID
      formData,
      'oIZvTyxrOuXHGa69M' // Your public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setMessageSent(false), 5000); // Hide message after 5 seconds
      }, (error) => {
        console.error('Failed to send email:', error);
        alert(`Failed to send message. Error: ${error.text}`);
      });
  };

  const SuccessMessage = () => (
    <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-500">
      Message sent successfully!
    </div>
  );

  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nanashi0x1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/nanashi0x1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        {messageSent && <SuccessMessage />}
      </div>
    </section>
  );
}