import React from 'react';

function CancelIcon({ ref ,width, height = width, classname}) {
  return (
    <svg ref={ref} className={classname} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="cancel">
        <path id="Vector" d="M16.773 8.28772L8.28777 16.773C7.99785 17.0629 7.51702 17.0629 7.22711 16.773C6.93719 16.4831 6.93719 16.0023 7.22711 15.7123L15.7124 7.22706C16.0023 6.93715 16.4831 6.93715 16.773 7.22706C17.063 7.51698 17.063 7.99781 16.773 8.28772Z" />
        <path id="Vector_2" d="M16.773 16.7729C16.4831 17.0628 16.0023 17.0628 15.7124 16.7729L7.22711 8.28765C6.93719 7.99774 6.93719 7.51691 7.22711 7.22699C7.51702 6.93708 7.99785 6.93708 8.28777 7.22699L16.773 15.7123C17.063 16.0022 17.063 16.483 16.773 16.7729Z" />
      </g>
    </svg>

  )
}

export default CancelIcon;