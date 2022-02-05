import * as React from 'react';

type Props = {
  width: number;
  height: number;
  color: string;
};

const Loading = ({ width, height, color }: Props) => (
  <svg className="svgLoader" viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
    <path stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill={color} transform="rotate(179.719 50 51)">
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="linear"
        values="0 50 51;360 50 51"
        keyTimes="0;1"
        dur="1s"
        begin="0s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default Loading;
