import React from 'react';

export default function Dribbble(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M71,205.3A160.1,160.1,0,0,1,208,128c5.4,0,10.7.3,16,.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M188,53.1A159.8,159.8,0,0,1,64,112a165.2,165.2,0,0,1-30.1-2.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M85.9,41.7a160.5,160.5,0,0,1,74.3,176.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  );
}
