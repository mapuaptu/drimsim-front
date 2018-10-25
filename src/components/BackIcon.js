import React from 'react';

const BackIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="24" y1="6.5" x2="4" y2="6.5" stroke={fill} />
      <path d="M8.52372e-07 6.5L6.75 0.870835L6.75 12.1292L8.52372e-07 6.5Z" fill={fill} />
    </svg>
  );
};

export default BackIcon;
