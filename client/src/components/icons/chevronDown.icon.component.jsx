import React from 'react'

function ChevronDown({ width, height = width, boxFill , classname }) {
  return (
    <svg className={classname} width={width} height={height} viewBox="0 0 24 24" fill={boxFill} xmlns="http://www.w3.org/2000/svg">
      <g id="chevron-down">
        <path id="Vector" d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" />
      </g>
    </svg>

  )
}

export default ChevronDown