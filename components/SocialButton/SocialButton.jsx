import React from 'react';

const SocialButton = ({
  textColor,
  buttonText,
  buttonColor,
  onClick,
  Icon,
}) => {
  return (
    <button
      className={`rounded-md drop-shadow-lg w-fit ${buttonColor}`}
      onClick={onClick}
      aria-label="social button"
    >
      <div className="flex flex-row space-x-2 items-center px-4 py-2 drop-shadow-lg">
        {Icon}
        <h3 className={`font-extrabold ${textColor}`}>{buttonText}</h3>
      </div>
    </button>
  );
};

export default SocialButton;
