import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { setIn } from "formik";
import kaffebilde from "../assets/Taenkaffe.png";

const Contact = ({ currentLanguage, switchLanguage }) => {
  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [isInputClicked, setInputClicked] = useState(false); // State to track if the input was clicked
  const [inputValid, setInputValid] = useState(false); // State to track if the input is valid

  /*
  const validateForm = () => {
    const errors = {};

    // Validate form fields
    if (form.current.from_name.value.trim() === "") {
      errors.from_name = "Name is required";
    }
    if (
      isInputClicked &&
      (form.current.from_email.value.trim() === "" ||
        !isValidEmail(form.current.from_email.value))
    ) {
      errors.from_email = "Email is required";
      setInputValid(false);
    } else if (!isValidEmail(form.current.from_email.value)) {
      errors.from_email = "Invalid email";
      setInputValid(false);
    } else {
      setInputValid(true);
    }
    if (form.current.message.value.trim() === "") {
      errors.message = "Message is required";
    }

    setErrors(errors);

    // Return true if no errors, false otherwise
    return Object.keys(errors).length === 0;
  };
*/

  const validateName = () => {
    const name = form.current.from_name.value.trim();
    if (name === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        from_name: "Name is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        from_name: "",
      }));
    }
  };

  const validateEmail = () => {
    const email = form.current.from_email.value.trim();
    if (isInputClicked && (email === "" || !isValidEmail(email))) {
      setInputValid(false);
      return "Email is required";
    } else if (!isValidEmail(email)) {
      setInputValid(false);
      return "Invalid email";
    }
    setInputValid(true);
    return "";
  };

  const validateMessage = () => {
    const message = form.current.message.value.trim();
    if (message === "") {
      return "Message is required";
    }
    return "";
  };

  const validateForm = () => {
    const nameError = validateName();
    const emailError = validateEmail();
    const messageError = validateMessage();

    setErrors({
      from_name: nameError,
      from_email: emailError,
      message: messageError,
    });

    // Return true if no errors, false otherwise
    return !nameError && !emailError && !messageError;
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

  return (
    <div className="py-8 ">
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
          className=" shadow-md rounded-md py-6 border-2 border-blue-300 col-span-1 w-full md:w-2/3 bg-cover bg-center bg-no-repeat bg-opacity-90 relative mx-auto"
          //style={{
          //  backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG')`,
          //}}
        >
          <div className="grid col-span-1 w-full md:grid-cols-2 gap-4 ">
            <div className="mb-4">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                className={`w-full px-3 py-2 border-2 rounded-md bg-white
                 focus:text-black focus:outline-none focus:border-4 focus:border-blue-500 focus:bg-white 
                ${
                  isInputClicked
                    ? errors.from_name
                      ? "border-2 border-red-500"
                      : ""
                    : "border-2 "
                }
                `}
                onClick={() => {
                  setInputClicked(true);
                  console.log("Input Clicked: true");
                }} // Set input clicked to true when clicked
                onKeyDown={() => {
                  validateName();
                  console.log("onKeyDown: true");
                }}
                onBlur={() => {
                  console.log("Input Blurred");
                  setInputClicked(false); // Set input clicked to false on blur
                  {
                    validateName();
                  } // Trigger validation on blur
                  console.log("Input Clicked: false");
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
                className={`w-full px-3 py-2 border rounded-md bg-white
                 focus:text-black focus:outline-none focus:border-4 focus:border-blue-500 focus:bg-white  ${
                   isInputClicked
                     ? errors.from_email
                       ? "border-2 border-red-500"
                       : ""
                     : "border-2 "
                 }`}
                onClick={() => setInputClicked(true)} // Set input clicked to true when clicked
                onBlur={() => {
                  setInputClicked(false); // Set input clicked to false on blur
                  validateForm(); // Trigger validation on blur
                }}
              />
              {errors.from_email && (
                <div className="text-red-500 text-sm mt-1 p-1 font-bold bg-white rounded-md">
                  {errors.from_email}
                </div>
              )}
            </div>
          </div>

          <label className="mt-6 hidden">Message</label>
          <textarea
            color="black"
            name="message"
            placeholder="Message"
            className={`w-full px-3 py-2 border rounded-md 
            bg-white
            focus:text-black focus:outline-none focus:border-4 focus:border-blue-500 focus:bg-white ${
              isInputClicked
                ? errors.from_message
                  ? "border-2 border-red-500"
                  : "border-gray-100 "
                : "border-2 "
            } `}
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

        <div className="hidden col-span-1 border-2 border-red-500 rounded-md overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG"
            alt="Image"
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="text-center text-2xl mt-4">
        {currentLanguage === "english"
          ? "Press the green flag to start!"
          : "Trykk det grønne flagget for å starte!"}
      </p>
      <iframe
        className="w-[360px] md:w-[485px] mx-auto mt-8"
        src="https://scratch.mit.edu/projects/910884058/embed"
        allowtransparency="true"
        width="485"
        height="402"
        frameborder="0"
        scrolling="no"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Contact;
