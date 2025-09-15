import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="h-9 w-9 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">E</span>
        </div>
        <h2 className="text-gray-900 font-bold text-2xl sm:text-3xl md:text-4xl max-w-2xl leading-tight">
          <span className="text-indigo-600">E-Voting</span>
        </h2>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Empowering creators worldwide with the most advanced AI content
          creation tools. Transform your ideas into reality.
        </p>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="https://prebuiltui.com">E-Voting</a> ©2025. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
