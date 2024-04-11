import { useState, useEffect } from "react";

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const typewriterPhrases = [
    "Multilingual marketplace",
    "Virtual marketplace",
    "Horizontal marketplace",
    "B2B commerce",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const delay = 200;

  useEffect(() => {
    const interval = setInterval(() => {
      if (characterIndex < typewriterPhrases[phraseIndex].length) {
        setTypewriterText(
          (prevText) =>
            prevText + typewriterPhrases[phraseIndex][characterIndex]
        );
        setCharacterIndex((prevIndex) => prevIndex + 1);
      } else if (phraseIndex < typewriterPhrases.length - 1) {
        setPhraseIndex((prevIndex) => prevIndex + 1);
        setCharacterIndex(0);
        setTypewriterText("");
      } else {
        setPhraseIndex(0);
        setCharacterIndex(0);
        setTypewriterText("");
      }
    }, delay);

    return () => clearInterval(interval);
  }, [characterIndex, phraseIndex]);

  return (
    <div className="">
      <div
        className="flex justify-evenly bg-gradient-to-t from-gray-400 to-white"
        style={{ height: "81vh" }}
      >
        <div className="flex flex-col justify-center w-[50%] p-5 h-full">
          <span className="font-bold pb-5 text-5xl text-wrap">
            Next Gen Enterprise Ecommerce Platform
          </span>
          <span
            className="font-semibold pb-5 text-2xl text-wrap"
            style={{ fontWeight: 700 }}
          >
            Build whitelabelled{" "}
            <span className="text-green-800 capitalize">{typewriterText}|</span>
          </span>
          <span className="text-bold pb-5 text-xl" style={{ fontWeight: 600 }}>
            Designed for diverse B2B and B2C business models
          </span>
          <button className="uppercase font-semibold bg-green-600 w-[30%] rounded-full p-2 text-white hover:text-green-700 hover:bg-white hover:border-gray-300 border-2 border-transparent">
            Schedule a Demo
          </button>
        </div>
        <div className="">
          <img
            className="h-full"
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
