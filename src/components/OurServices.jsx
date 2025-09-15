import React from "react";

function OurServices() {
  const companyLogos = [
    "/image/cu.png",
    "/image/du.jpg",
    "/image/jamuna.png",
    "/image/ju.png",
    "/image/megna.jpeg",
    "/image/squire.png",
  ];
  
  return (
    <div className="mt-20 mb-10">
      {/* HEADER */}
      <div className="mb-8 sm:mb-10 md:mb-12 mt-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Who Take Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 text-center mt-3 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto leading-relaxed">
          Our platform eliminates barriers to voting. Experience a faster, more
          secure, and more convenient way to participate in elections.
        </p>
      </div>

      {/* COMPANY MARQUEE */}
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div
          className="marquee-inner flex will-change-transform min-w-[200%]"
          style={{ animationDuration: "15s" }}
        >
          <div className="flex items-center">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <img
                key={index}
                src={company}
                alt={`Company logo ${index + 1}`}
                className="h-12 w-auto object-contain mx-6 sm:mx-8 md:mx-10 flex-shrink-0"
                draggable={false}
              />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}

export default OurServices;