import { useGSAP } from "@gsap/react";
import BannerGrid from "./BannerGrid";
import gsap from "gsap/gsap-core";

const Banner = () => {
  useGSAP(() => {
    gsap.from("#btn", {
      y: 300,
      duration: 2,
      repeat: 0,
      ease: "power3.inOut",
    });
  });
  return (
    <div className="flex justify-between items-center h-[80vh] relative overflow-hidden mb-20 ">
      <div className="w-[50%] flex justify-end items-end h-full">
        <BannerGrid />
      </div>
      <div className="flex flex-col justify-center w-[55%] h-full px-20 ">
        <div className="text-right">
          <h3 className="text-3xl font-bold">Empowering Brands</h3>
          <h3 className="text-3xl font-bold">Across the Globe</h3>
        </div>
        <h5 className="text-wrap text-right text-xl font-semibold opacity-70">
          StoreHippo ecommerce platform builds extraordinary solutions to power
          brands across 15 countries and 30+ industries. Add your brand to the
          long list of brands that trust StoreHippo.
        </h5>
        <div className="fixed top-[60%] -right-[6.2rem] transform ">
          <button
            id="btn"
            className="bg-green-600  hover:bg-green-700 text-white font-semibold uppercase w-[15rem] text-xl h-10 transform rotate-270 rounded-lg"
            style={{ rotate: "270deg" }}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
