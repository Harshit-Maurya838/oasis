import React from 'react';

function ArrowUpIcon({ width, height = width, boxFill, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={boxFill} xmlns="http://www.w3.org/2000/svg">
      <g id="arrow-up">
        <path id="Vector" d="M18.0701 10.32C17.8801 10.32 17.6901 10.25 17.5401 10.1L12.0001 4.56L6.46012 10.1C6.17012 10.39 5.69012 10.39 5.40012 10.1C5.11012 9.81 5.11012 9.33 5.40012 9.04L11.4701 2.97C11.7601 2.68 12.2401 2.68 12.5301 2.97L18.6001 9.04C18.8901 9.33 18.8901 9.81 18.6001 10.1C18.4601 10.25 18.2601 10.32 18.0701 10.32Z" fill={fill} />
        <path id="Vector_2" d="M12 21.25C11.59 21.25 11.25 20.91 11.25 20.5V3.67001C11.25 3.26001 11.59 2.92001 12 2.92001C12.41 2.92001 12.75 3.26001 12.75 3.67001V20.5C12.75 20.91 12.41 21.25 12 21.25Z" fill={fill} />
      </g>
    </svg>

  )
}

export default ArrowUpIcon;