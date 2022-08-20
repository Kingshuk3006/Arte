import Link from 'next/link';
import React from 'react';

const AuthenticatedScreen = () => {
  return (
    <div>
      <div className="bg-[#0F0F0F] h-[65vh] flex justify-center items-center">
        <div className="flex flex-col justify-center space-y-4 items-center">
          <img src="/images/security.png" />
          <Link href='/auth/signin'>
            <h1 className="text-[#f9dbb3b4] md:text-3xl text-xl font-Roboto_flex font-medium cursor-pointer hover:underline hover:underline-offset-3 hover:text-[#F9DBB3]">
              *Please Sign In First to get Started !
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedScreen;
