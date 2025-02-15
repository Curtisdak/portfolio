import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImSpinner3 } from "react-icons/im";

const Contact = () => {

  const [isLoading, setIsLoading]= useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const serviceId = import.meta.env.VITE_APP_SERVICE_ID;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true)

    setTimeout(()=>{

    emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_APP_TEMPLATE_ID, // Replace with your EmailJS template ID
        formData,
        import.meta.env.VITE_APP_PUBLIC_KEY // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred, please try again");
        }
      );
      setIsLoading(false)
    },2000)

    setFormData({ name: "", email: "", message: "" });  
  };

  return (
    <div className="contact-page">
      <div id="contact-form">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button type="submit" disabled={isLoading} > {isLoading? <span className="downlaoding"><ImSpinner3 className="spinner" /> Sending </span> :"Send"} </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
