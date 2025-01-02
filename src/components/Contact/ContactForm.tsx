import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_l6tgm6r',
        'template_contact',
        {
          to_name: 'Baha Eddin Mselmi',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'bahaeddinmselmi1@gmail.com'
        },
        'oIZvTyxrOuXHGa69M'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}