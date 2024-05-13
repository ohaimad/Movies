import React from 'react';

export const SearchImage = ({ onClick }) => {
  return (
    <div
      style={{ position: 'relative', width: '42px', height: '42px', cursor: 'pointer'}}
      onClick={onClick} // Attach onClick event handler to the div
    >
      {/* <img
        src="/path/to/search_bg.png" // Replace "/path/to/search_bg.png" with the actual path to your PNG image
        alt="Search Background"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
      /> */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: "#1f2123" }}
      >
        <path
          d="M29.8594 29.8594L39.4219 39.4219"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z"
          stroke="white"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
