import React from "react";
import supabase from "../../supabase";
import { useEffect, useState } from "react";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from("Portfolio_testimonials")
        .select("*");
      console.log("supabase testimonials fetch ok");
      console.log("testimonials data", data);

      if (error) {
        console.error("Error fetching data from testimonials:", error);
      } else {
        setTestimonials(data || []);
      }
    }

    fetchTestimonials();
  }, []);

  const toggleTestimonials = () => {
    setShowTestimonials((prevState) => !prevState);
  };

  /*
  <div className="text-xl text-gray-700">
        Instagram
        <a
          href="https://www.instagram.com/klissclaes/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./src/assets/klissclaes_qr.png "
            alt=""
            className="w-[150px]"
          />
        </a>
      </div>
  */

  return (
    <>
      <div className="full-width-container">
        <button
          onClick={toggleTestimonials}
          className="text-2xl w-full text-gray-700 bg-[#90d7ff] py-2"
        >
          {showTestimonials ? (
            <p className="text-2xl">Testimonials ▲</p>
          ) : (
            <p className="text-2xl">Testimonials ▼</p>
          )}
        </button>
        {showTestimonials && (
          <>
            <div className="text-lg text-gray-700">
              <br />
              <div className="text-md text-gray-700 ">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id}>
                    <span className="font-bold italic">
                      "{testimonial.testimonial_text}"
                    </span>
                    <br />

                    <span className="font-medium  ">
                      - 
                      <a
                        href={testimonial.author_linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline"
                      >
                        {testimonial.author_name}
                      </a>
                      , {testimonial.author_role},{" "}
                      <a
                        href={testimonial.workplace_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline"
                      >
                        {testimonial.workplace}
                      </a>
                    </span>
                    <br />
                    <br />
                    {testimonial.testimonial}
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default About;
