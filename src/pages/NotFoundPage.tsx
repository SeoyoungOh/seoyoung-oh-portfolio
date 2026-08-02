import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Seoyoung Oh Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFF] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#20243C] text-[#A0A1F8] flex items-center justify-center text-2xl font-black mb-6 border border-[#D9DDEE]">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-[#20243C] mb-3">Page Not Found</h1>
      <p className="text-base text-[#626A7C] max-w-md mb-8">
        The requested URL does not match any research dispatch or portfolio route.
      </p>
      <Link
        to="/"
        className="bg-[#20243C] hover:bg-[#9091DF] text-[#FBFBFF] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-colors shadow-xs"
      >
        Return to Homepage
      </Link>
    </div>
  );
};
