import  { useState } from 'react';
import   '../App.css';
import   phoneImg from   "../assets/phone.jpg";
import  emailImg from    "../assets/email.png";
import  websiteImg from  "../assets/website.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
 
  };

  return (
    <section id="contact-section">
      <header>
        <h1>Contact Me</h1>
      </header>
      <hr />
      <h3 className="contact-title">Wanna Work on a Project?</h3>
      <h2 className="contact-subtitle">Let's Connect!</h2>
      <div className="contact-info-item">
        <img id="contact-img" src={phoneImg} alt="Phone image" />
        <h4>Phone</h4>
        <p>+1(226)-504-7410</p>
      </div>
      <div className="contact-info-item">
        <img id="contact-img" src={emailImg} alt="Email image" />
        <h4>Email</h4>
        <p>sambhav.timalsina@gmail.com</p>
      </div>
      <div className="contact-info-item">
        <img id="contact-img" src={websiteImg} alt="website image" />
        <h4>Website</h4>
        <p>www.sambhavPortfolio.me</p>
      </div>
      <h3 className="contact-title">SEND ME AN EMAIL</h3>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-item col-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-item col-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-item col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-item col-12">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                rows="5"
                cols="50"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
