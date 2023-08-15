import React, { useState } from 'react';

function Contact() {
  const initialFormState = {
    name: '',
    email: '',
    message: '',
  };

  const initialErrorState = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialErrorState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form submitted successfully');
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {formErrors.message && <p className="error">{formErrors.message}</p>}

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
