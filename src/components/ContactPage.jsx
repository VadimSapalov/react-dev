import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email має містити символ "@"';
    }
    if (formData.message.length < 10) {
      newErrors.message = 'Повідомлення має бути довше 10 символів';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Дякуємо! Повідомлення надіслано.');
      console.log('Дані форми:', formData);
      setFormData({ name: '', email: '', message: '' }); //Очищення форми
      setErrors({});
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2>Зв'язатися з нами</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Ім'я</label>
          <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Повідомлення</label>
          <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} />
          {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Надіслати</button>
      </form>
    </div>
  );
}

export default ContactPage;