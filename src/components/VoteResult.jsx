import React from "react";

function VoteResult() {
  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12">
      {/* HEADER */}
      <div className="mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
          See LeaderBoard
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-500 text-center mt-3 sm:mt-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto leading-relaxed">
          And you wouldn't be surprised to see his name on a college tournament
          or on a colony leaderboard soon.
        </p>
      </div>

      {/* RESULT */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
          <div className="relative border-[3px] border-blue-500 rounded-lg">
            <img
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded object-cover"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
              alt="userImage1"
            />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-2 flex items-center justify-center h-5 w-10 sm:h-6 sm:w-12 bg-blue-500 rounded-full">
              <p className="text-white text-xs font-medium uppercase">125</p>
            </div>
          </div>
          
          <div className="relative border-[3px] border-red-500 rounded-lg">
            <img
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
              alt="userImage2"
            />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-2 flex items-center justify-center h-5 w-10 sm:h-6 sm:w-12 bg-red-500 rounded-full">
              <p className="text-white text-xs font-medium uppercase">98</p>
            </div>
          </div>
          
          <div className="relative border-[3px] border-yellow-500 rounded-lg">
            <img
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
              alt="userImage3"
            />
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-2 flex items-center justify-center h-5 w-10 sm:h-6 sm:w-12 bg-yellow-500 rounded-full">
              <p className="text-white text-xs font-medium uppercase">87</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoteResult;