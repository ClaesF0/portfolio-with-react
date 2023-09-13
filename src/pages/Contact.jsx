import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = ({ currentLanguage, switchLanguage }) => {
  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [isInputClicked, setInputClicked] = useState(false); // State to track if the input was clicked

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
            alert("An error occurred, please try again", error.text);
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
  /*
  return (
    <>
      <p className="text-center text-2xl">
        {currentLanguage === "english"
          ? "Coffee, chat and a handshake?"
          : "Skal vi ta en kaffe?"}
      </p>
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

          <label className="mt-6">Message</label>
          <textarea name="message" className="w-full md:w-1/2 mb-4" />
          {errors.message && <div className="error">{errors.message}</div>}

          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
};

export default Contact;
*/

  return (
    <div className="py-8">
      <p className="text-center text-2xl mb-4">
        {currentLanguage === "english"
          ? "Coffee, chat and a handshake?"
          : "Skal vi ta en kaffe?"}
      </p>
      {showAlert && (
        <div className="success-alert bg-green-100 text-green-700 py-2 px-4 rounded-md mb-4">
          Email sent successfully! 😃👍 <span className="green-bar" />
        </div>
      )}

      <div className="container mx-auto grid-cols-2 gap-4 justify-items-center  md:flex">
        <form
          id="contact"
          ref={form}
          onSubmit={sendEmail}
          className=" shadow-md rounded-md py-6 border-2 border-blue-500 col-span-1 w-2/3 bg-cover bg-center bg-no-repeat bg-opacity-90 relative"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG')`,
          }}
        >
          <div className="grid col-span-1 w-full md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.from_name
                    ? "border-red-500 border-4 bg-white"
                    : "border-gray-300 bg-purple-400"
                } text-black focus:outline-none focus:border-2 focus:border-blue-500 focus:bg-white focus:bg-opacity-50`}
                style={{
                  backgroundColor: errors.from_name
                    ? "rgba(255, 1, 1, 1)" // No background color when there are errors
                    : "rgba(0, 0, 0, 0.1)", // Translucent white background
                }}
                onClick={() => setInputClicked(true)} // Set input clicked to true when clicked
                onBlur={() => {
                  setInputClicked(false); // Set input clicked to false on blur
                  validateForm(); // Trigger validation on blur
                }}
              />
              {errors.from_name && (
                <div className="text-red-500 text-sm font-bold bg-white mt-1">
                  {errors.from_name}
                </div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="from_email"
                placeholder="E-mail"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.from_email
                    ? "border-red-500 border-4 bg-white"
                    : "border-gray-100 "
                } text-black focus:outline-none focus:border-2 focus:border-blue-500 focus:bg-white focus:bg-opacity-1`}
                style={{
                  backgroundColor: errors.from_email
                    ? "rgba(255, 1, 1, 1)" // No background color when there are errors
                    : "rgba(0, 0, 0, 0.1)", // Translucent white background
                }}
                onClick={() => setInputClicked(true)} // Set input clicked to true when clicked
                onBlur={() => {
                  setInputClicked(false); // Set input clicked to false on blur
                  validateForm(); // Trigger validation on blur
                }}
              />
              {errors.from_email && (
                <div className="text-red-500 text-sm mt-1 p-1 font-bold text-center bg-white rounded-md">
                  {errors.from_email}
                </div>
              )}
            </div>
          </div>

          <label className="mt-6 block">Message</label>
          <textarea
            placeholder="Message"
            className={`w-full px-3 py-2 border rounded-md ${
              errors.from_message
                ? "border-red-500 border-4 bg-white"
                : "border-gray-100 "
            } text-black focus:outline-none focus:border-2 focus:border-blue-500 focus:bg-white focus:bg-opacity-50`}
            style={{
              backgroundColor: errors.from_message
                ? "rgba(255, 1, 1, 1)" // No background color when there are errors
                : "rgba(0, 0, 0, 0.1)", // Translucent white background
            }}
            onClick={() => setInputClicked(true)} // Set input clicked to true when clicked
            onBlur={() => {
              setInputClicked(false); // Set input clicked to false on blur
              validateForm(); // Trigger validation on blur
            }}
            rows="4"
          />
          {errors.message && (
            <div className="text-red-500 bg-white rounded-md p-1 text-sm mt-1 font-bold">
              {errors.message}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 transition duration-300 active:bg-white active:text-blue-500 active:border-blue-500 active:border-2"
          >
            Send
          </button>
        </form>
        <div className="col-span-1 border-2 border-red-500 rounded-md overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG"
            alt="Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
