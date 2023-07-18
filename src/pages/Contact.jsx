import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    const errors = {};

    // Validate form fields
    if (form.current.from_name.value.trim() === "") {
      errors.from_name = "Name is required";
    }
    if (form.current.from_email.value.trim() === "") {
      errors.from_email = "Email is required";
    } else if (!isValidEmail(form.current.from_email.value)) {
      errors.from_email = "Invalid email";
    }
    if (form.current.message.value.trim() === "") {
      errors.message = "Message is required";
    }

    setErrors(errors);

    // Return true if no errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Perform email validation here (regex, library, etc.)
    // Return true if email is valid, false otherwise
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
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
            form.current.reset(); // Reset the form after successful submission
            setErrors({});
            setShowAlert(true);
          },
          (error) => {
            console.log("error occurred in sending email", error.text);
          }
        );
    }
  };

  useEffect(() => {
    let timeoutId;
    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 10000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAlert]);

  return (
    <>
      <p className="text-lg text-center mt-4">Get in touch with me!</p>
      {showAlert && (
        <div className="success-alert">
          Email success! 😃👍 <span className="green-bar" />
        </div>
      )}
      <div className="container">
        <form id="contact" ref={form} onSubmit={sendEmail}>
          <div className="w-full md:w-1/2 mx-auto flex flex-col md:flex-row justify-between sm:justify-apart">
            <div className=" ">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className="w-full  mb-4 md:mb-0"
              />
              {errors.from_name && (
                <div className="error">{errors.from_name}</div>
              )}
            </div>
            <div className="w-[40px] lg:hidden"></div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="E-mail"
                className="w-full"
              />
              {errors.from_email && (
                <div className="error">{errors.from_email}</div>
              )}
            </div>
          </div>

          <label>Message</label>
          <textarea name="message" className="w-full md:w-1/2 mb-4" />
          {errors.message && <div className="error">{errors.message}</div>}

          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
