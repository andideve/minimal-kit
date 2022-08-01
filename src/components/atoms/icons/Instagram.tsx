import React from 'react';

export default function Instagram(props: React.SVGProps<SVGSVGElement>) {
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
        r="40"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <circle cx="180" cy="76" r="12" />
    </svg>
  );
}
