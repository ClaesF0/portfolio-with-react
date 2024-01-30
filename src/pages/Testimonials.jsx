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

  const HighlightedText = ({ text, wordsToHighlight }) => {
    const wordRegex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");

    const highlightedText = text.split(wordRegex).map((part, index) => {
      const isHighlighted = wordsToHighlight.includes(part.toLowerCase());
      return isHighlighted ? (
        <span key={index} className="highlighted-word">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      );
    });

    return <div className="highlighted-text">{highlightedText}</div>;
  };

  const wordsToHighlightNorwegian = [
    "Claes",
    "strekker seg langt",
    "talent, lidenskap og arbeidsmoral",
    "konsekvent imponert",
    "eksepsjonelle ferdigheter i problemløsning og å finne klare løsninger",
    "imponerende tekniske evner",
    "dedikert og hardtarbeidende",
    "fortjener anerkjennelse for sine prestasjoner",
    "en verdifull ressurs for ethvert team",
    "en positiv innvirkning uansett hvor han går",
    "virkelig rydde opp i et system som hadde store utfordringer",
    "Claes en redning",
    "headhuntet",
    "Jeg vil anbefale Claes Folkestad ",
    "gjennomgående orden og struktur",
    "rolig",
    "gode vesen",
    "faglige tyngde",
    "et godt tilskudd",
    "en formidabel jobb",
    "veldig organisert",
    "til å stole p",
    "godt likt av både kolleger og gjester",
    "en av de mest hardtarbeidende og ansvarsfulle idealistene",
    "sier aldri nei",
    "initiativ",
    "forbedre",
    "utvikle",
    "meget god digital kompetanse",
    "gode tilbakemeldinger",
    "jobbet godt både selvstendig",
    "fleksibilitet",
    "engasjert",
    "ansvarlig",
    "verdifull tillegg",
    "utført sine arbeidsoppgaver på en meget tilfredsstillende måte",
    "gode humør",
    "pålitelig",
    "flink til å ta vare på menneskene rundt seg",
    "sosial",
    "beste anbefalinger",
    "utadvendt",
    "glede å anbefale",
    "pliktoppfyllende",
    "hardtarbeidende",
    "ansvarsbevisst",
    "bidratt til et godt arbeidsmiljø",
    "punktlig",
    "effektiv",
    "optimal",
    "positiv atmosfære",
    "veldig godt likt",
    "godt likt",
    "godt likt av kolleger samt klientell",
    "varmeste anbefalinger",
    "klok",
    "tillitsverdig",
    "fungerer bra i varierte og tidvis hektiske situasjoner",
    "utmerket",
    "absolutt fantastisk",
    "engasjert",
    "lære veldig raskt",
    "tilpasningsdyktighet",
    "samarbeidsvillig",
    "samarbeide",
    "ryddig",
    "viktig lagspiller",
    "anbefale",
    "anbefal",
    "varmeste anbefalinger",
    "oppnå ønsket resultat uten mye prøving og feiling",
    "kreativ, nøyaktig, kvalitetsbevisst og oppmerksom på sine medmennesker med høy sosial intelligens",
  ];

  const wordsToHighlight = [
    "two years",
    "consistently impressed",
    "has demonstrated exceptional skills",
    "talent",
    "passion",
    "work ethic",
    "problem-solving",
    "finding clear solutions",
    "impressive technical abilities",
    "deserves recognition for his achievements",
    "a valuable asset to any team",
    "i am confident that he will make a positive impact wherever he goes",
    "hard-working",
    "performs tasks with consistent order and structure",
    "pleasant demeanor",
    "professional expertise",
    "tackles challenges head-on",
    "ensure an optimal work environment for everyone ",
    "dedicated",
    "outstanding",
    "a lifesaver",
    "headhunted by our department manager",
    "resolving issues for",
    "significant challenges with their system",
    "can be relied upon",
    "highly recommend",
    "calm",
    "highly organized",
    "outgoing",
    "committed",
    " initiative",
    "responsible",
    "valuable addition",
    "engaged",
    "reliable",
    "documentation",
    "digital infection tracking program",
    "very good digital competence",
    "receives good feedback",
    "worked well",
    "both independently ",
    "and together with his colleagues ",
    "shown great",
    "flexibility",
    "tracking",
    "guidance",
    "good at taking care of the people around him",
    "pleasure to recommend",
    "conscientious",
    "punctual",
    "efficient",
    "sociable ",
    "well liked by both colleagues and guests",
    "well liked by colleagues and clientele",
    "works well",
    "willing to cooperate",
    "performed his work tasks in an excellent manner",
    "my best recommendations",
    "our best recommendations",
    "warmest recommendations",
    "well-liked",
    "wise",
    "trustworthy",
    "excellent manner",
    "fantastic",
    "engaged",
    "cooperative",
    "warmest recommendations",
  ];

  const handleCardTouch = (event) => {
    const card = event.currentTarget;
    card.classList.toggle("touched");
  };
  /* 
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
  */

  return (
    <>
      <div id="references" className="container my-8">
        <p className="text-center text-2xl">References:</p>

        {!showTestimonials && (
          <>
            <div className="text-lg text-gray-700">
              <br />
              <div className="text-md text-gray-700 inline-flex flex-wrap justify-evenly ">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="testimonial-card rounded-lg border-2 border-b-8 
                    border-r-8 p-4 md:m-2 md:p-4 h-fit md:h-auto 
                    w-full sm:w-1/2 md:w-[400px] hover:border-[#90d7ff]
                     hover:bg-white hover:opacity-100 md:grayscale 
                     md:hover:grayscale-0 transition duration-1000 
                     ease-in-out hover:scale-110 hover:greyscale-0
                     "
                    onTouchStart={handleCardTouch}
                    onTouchEnd={handleCardTouch}
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
                        <HighlightedText
                          text={
                            currentLanguage === "english"
                              ? testimonial.testimonial_text_english
                              : testimonial.testimonial_text
                          }
                          wordsToHighlight={
                            currentLanguage === "english"
                              ? wordsToHighlight
                              : wordsToHighlightNorwegian
                          }
                        />
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
