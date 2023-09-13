import React from "react";
import supabase from "../../supabase";
import { useEffect, useState } from "react";
import linkedin from "../assets/LinkedIn_logo_initials.png";

const Testimonials = ({ currentLanguage }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from("Portfolio_testimonials")
      .select("*")
      .order("id", { ascending: false });
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
              <div className="text-md text-gray-700 inline-flex flex-wrap justify-evenly ">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="rounded-lg border-2 border-b-8 border-r-8 m-2 p-4 my-2 md:p-4 h-fit md:h-auto w-[300px] md:w-[360px] md:hover:border-[#90d7ff] md:grayscale md:hover:grayscale-0 transition duration-1000 ease-in-out hover:scale-110 hover:greyscale-0"
                  >
                    <div className="h-32 md:h-40">
                      <img
                        src={testimonial.author_image}
                        alt=""
                        className="w-[100px] md:w-[150px] mr-2 float-left rounded-full  "
                      />
                      <span className="font-medium text-xs md:text-sm  ">
                        <a
                          href={testimonial.author_linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className=" text-sm font-semibold flex "
                        >
                          <p>{testimonial.author_name} </p>
                          <img src={linkedin} className="w-4 h-4" />
                        </a>
                        <p className="capitalize ">
                          {currentLanguage === "english"
                            ? testimonial.author_role_english
                            : testimonial.author_role}
                          <a
                            href={testimonial.workplace_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 font-semibold"
                          >
                            <p className="">{testimonial.workplace}</p>
                          </a>{" "}
                        </p>
                      </span>
                    </div>
                    <div className="">
                      <p className=" block font-medium text-sm italic ">
                        {currentLanguage === "english"
                          ? testimonial.testimonial_text_english
                          : testimonial.testimonial_text}
                      </p>
                    </div>
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
