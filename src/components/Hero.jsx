import { Link } from "react-router-dom";


export default function Hero() {

  return (
    <section className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] min-h-screen">
      <main className="flex flex-col md:flex-row items-center max-md:text-center justify-between mt-16 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
            Preferred choice of leaders in{" "}
            <span className="text-indigo-600">every industry</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            Transparent elections build trust in institutions, reducing political cynicism and apathy. Leaders elected through fair processes enjoy greater legitimacy and authority.
          </p>
          

          <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
            <Link
              className="bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition-colors group"
              to={"/user/nid-reg"}
            >
              <span>Apply to Registered NID</span>
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              className="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
              to={"/user-home"}
            >
              Lets Voting
            </Link>
          </div>
        </div>

        <div
          aria-label="Photos of leaders"
          className="mt-12 grid grid-cols-2 gap-6 pb-6"
        >
          <div className="w-36 h-44 rounded-lg hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-lg bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center p-4">
            <img
              alt="Business leader portrait"
              className="w-full h-full object-contain"
              src="/icon/hero1.svg"
            />
          </div>
          <div className="w-36 h-44 rounded-lg hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
            <img
              alt="Professional woman portrait"
              className="w-full h-full object-contain"
              src="/icon/hero2.svg"
            />
          </div>
          <div className="w-36 h-44 rounded-lg hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
            <img
              alt="Business executive portrait"
              className="w-full h-full object-contain"
              src="/icon/hero3.svg"
            />
          </div>
          <div className="w-36 h-44 rounded-lg hover:scale-105 transition-transform duration-300 flex-shrink-0 shadow-lg bg-gradient-to-br from-violet-50 to-violet-100 flex items-center justify-center p-4">
            <img
              alt="Professional leader portrait"
              className="w-full h-full object-contain"
              src="/icon/hero4.svg"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
