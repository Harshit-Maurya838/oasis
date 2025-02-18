import React from "react";

function UserIcon({ classname, width, height = width - 1, boxFill, fill }) {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M18.5 20C18.5 18.4087 17.8679 16.8826 16.7426 15.7574C15.6174 14.6321 14.0913 14 12.5 14M12.5 14C10.9087 14 9.38258 14.6321 8.25736 15.7574C7.13214 16.8826 6.5 18.4087 6.5 20M12.5 14C14.7091 14 16.5 12.2091 16.5 10C16.5 7.79086 14.7091 6 12.5 6C10.2909 6 8.5 7.79086 8.5 10C8.5 12.2091 10.2909 14 12.5 14ZM22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z"
        stroke="#55575F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default UserIcon;
