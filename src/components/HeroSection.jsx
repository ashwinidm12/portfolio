import React from "react";
import HomeImage from "../assets/images/dp-bg-reg.png";

const HeroSection = () => {
  return (
    <section className="bg-[#F4F4F4] py-16 md:py-24" id="home">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left ">
            <h1 className="text-4xl font-bold text-secondary mb-4 md:mt-0 mt-6 ">
              Ashwini D M
            </h1>
            <p className="text-xl font-semibold text-[#606060] mb-4">
              Student at Malnad College Of Engineering
            </p>
            <p className="text-secondary mb-6 text-justify">
              I believe technology and research help us solve many problems,
              but they are just tools. What truly matters are the people behind them, 
              working together with passion and care. Teamwork and dedication bring ideas to life and create great results. 
              Without people’s hard work, even the best tools can’t make a difference.
            </p>
            {/* Call to Action Button */}
            <a
              href="ASHWINI D M-CSE(f).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-[#F4F4F4] hover:text-primary hover:border-primary border transition-all"
              title="Download Resume">
              Download Resume
            </a>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={HomeImage}
              alt="Ashwini D m - Software Developer"
              className="w-full h-auto rounded-lg shadow-lg"
              title="Ashwini D M"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
