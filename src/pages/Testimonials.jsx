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
            <p className="text-2xl">References ▲</p>
          ) : (
            <p className="text-2xl">References ▼</p>
          )}
        </button>
        {showTestimonials && (
          <>
            <div className="text-lg text-gray-700">
              <br />
              <div className="text-md text-gray-700 p-6 inline-flex flex-wrap justify-evenly ">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="border-2 border-b-8 border-r-8 m-4 p-4 md:w-[400px]"
                  >
                    <img
                      src={testimonial.author_image}
                      alt=""
                      className="w-[150px] float-left rounded-full grayscale mx-4"
                    />
                    <span className="font-medium text-sm  ">
                      <a
                        href={testimonial.author_linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold"
                      >
                        <p>{testimonial.author_name}</p>
                      </a>
                      <p className="capitalize ">
                        {testimonial.author_role}
                        <a
                          href={testimonial.workplace_url}
                          target="_blank"
                          rel="noreferrer"
                          className=""
                        >
                          <p className="">{testimonial.workplace}</p>
                        </a>{" "}
                      </p>
                    </span>
                    <br />
                    <br />
                    <br />
                    <span className="font-medium text-sm italic ">
                      <p className=" block mt-8">
                        "{testimonial.testimonial_text}"
                      </p>
                    </span>
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
