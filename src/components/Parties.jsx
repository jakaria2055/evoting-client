import React from "react";

function Parties() {
  const [stopScroll, setStopScroll] = React.useState(false);
  const cardData = [
    {
      title: "National Citizen Party",
      image:
        "/image/party.jpg",
    },
    {
      title: "Bangladesh National Party",
      image:
        "/image/party2.jpg",
    },
    {
      title: "People Democratic Party",
      image:
        "/image/party.jpg",
    },
    {
      title: "2ND LEAGUE ASSOCIATION",
      image:"/image/party2.jpg",
    },
  ];
  return (
    <div className="bg-indigo-50">
      {/* HEADER */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          Democracy in Action
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 text-center mt-3 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto leading-relaxed">
          Choose from the parties below to exercise your democratic right.Please
          examine your options carefully before casting your vote.
        </p>
      </div>

      {/* AVAILABLE PARTIES */}
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
      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto mb-5"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: cardData.length * 2500 + "ms",
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <div
                key={index}
                className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-lg font-semibold text-center">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}

export default Parties;
