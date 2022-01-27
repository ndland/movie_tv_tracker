import React from 'react';

export const SocialButton = ({ socialPlatform, onClick, className, Icon }) => {
  return (
    <button className={className} onClick={onClick} aria-label="social button">
      <div className="flex flex-row space-x-2 items-center px-4 py-2 drop-shadow-lg">
        {Icon}
        <h3 className="text-white font-extrabold">{socialPlatform}</h3>
      </div>
    </button>
  );
};
