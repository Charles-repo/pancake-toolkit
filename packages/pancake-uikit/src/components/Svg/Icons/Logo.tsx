import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <defs>
        <filter id="Rectangle_1" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse">
          <feOffset dy="3" in="SourceAlpha"/>
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feFlood flood-opacity="0.161"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Group_3" data-name="Group 3" transform="translate(2 -2)">
        <g id="Group_1" data-name="Group 1" transform="translate(7 8)">
          <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_1)">
            <rect id="Rectangle_1-2" data-name="Rectangle 1" width="116" height="116" rx="22" transform="translate(9 6)" fill="#fff"/>
          </g>
          <g id="Group_1-2" data-name="Group 1" transform="translate(36.261 35.524)" opacity="0.999" style={{isolation: "isolate"}}>
            <text id="Dx" transform="translate(-0.261 36.476)" font-size="45" font-family="Bahnschrift" font-weight="600"><tspan x="0" y="0">Dx</tspan></text>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
