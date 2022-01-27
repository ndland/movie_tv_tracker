import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const SocialButton = ({ socialPlatform, icon, altText, onClick }) => {
  return (
    <button
      className="bg-slate-400 rounded-md drop-shadow-md"
      onClick={onClick}
    >
      <div className="flex flex-row space-x-2 items-center px-4 py-1 w-fit drop-shadow-lg">
        <FontAwesomeIcon icon={icon} alt={altText} />
        <h3 className="text-white font-extrabold" aria-label="social button">
          {socialPlatform}
        </h3>
      </div>
    </button>
  );
};
