import React from "react";

const UserRectangle = (props = {}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="#000000"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM72.57,200a64,64,0,0,1,110.86,0ZM216,200H201.33a80.14,80.14,0,0,0-43.69-42.28,48,48,0,1,0-59.28,0A80.14,80.14,0,0,0,54.67,200H40V56H216V200Z"></path>
    </svg>
  );
};

export default UserRectangle;
