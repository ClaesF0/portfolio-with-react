import React from "react";
import supabase from "../../supabase";
import { useEffect, useState } from "react";

const Testimonials = ({ currentLanguage }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from("Portfolio_testimonials")
      .select("*");
    if (error) {
      console.error("Error fetching data from testimonials:", error);
    } else {
      setTestimonials(data || []);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, [currentLanguage]);

  const toggleTestimonials = () => {
    setShowTestimonials((prevState) => !prevState);
  };

  return (
    <>
      <div id="references" className="container my-8">
        <p className="text-center text-2xl">References:</p>
        <button onClick={toggleTestimonials} className="text-sm">
          {showTestimonials ? (
            <p className="text-sm bg-[#90d7ff] p-2 border-2 border-black rounded-lg text-black">
              View references
            </p>
          ) : (
            <p className="text-sm bg-[#e0644c] p-2 border-2 border-black rounded-lg text-white">
              Hide references
            </p>
          )}
        </button>
        {!showTestimonials && (
          <>
            <div className="text-lg text-gray-700">
              <br />
              <div className="text-md text-gray-700 md:p-6 inline-flex flex-wrap justify-evenly ">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="rounded-lg border-2 border-b-8 border-r-8 p-4 my-2 md:m-4 md:p-4 h-fit md:h-auto w-[300px] md:w-[400px]"
                  >
                    <img
                      src={testimonial.author_image}
                      alt=""
                      className="w-[100px] md:w-[150px] mr-2 float-left rounded-full grayscale "
                    />
                    <span className="font-medium text-xs md:text-sm  ">
                      <a
                        href={testimonial.author_linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold"
                      >
                        <p>{testimonial.author_name}</p>
                      </a>
                      <p className="capitalize ">
                        {currentLanguage === "english"
                          ? testimonial.author_role_english
                          : testimonial.author_role}
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
                      <p className=" block">
                        {currentLanguage === "english"
                          ? testimonial.testimonial_text_english
                          : testimonial.testimonial_text}
                      </p>
                    </span>
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

export default Testimonials;
