import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_clsu24g",
        "template_ba0kten",
        form.current,
        "ZnHtRI5xUFt5gvFCL"
      )
      .then(
        (result) => {
          console.log("email seemingly successful", result.text);
        },
        (error) => {
          console.log("error occured in sending email", error.text);
        }
      );
  };

  return (
    <form
      id="contact"
      className="w-[40px] mx-auto flex-col"
      ref={form}
      onSubmit={sendEmail}
    >
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
