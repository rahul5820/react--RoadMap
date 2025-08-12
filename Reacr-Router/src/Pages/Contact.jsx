import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    
    setFormData({ name: '', email: '', message: '' });
  };
 const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        /><br />

        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        /><br />

        <label>Message:</label><br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        /><br />

        <button type="submit" onClick={()=>navigate('/contact/form-submit')}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
