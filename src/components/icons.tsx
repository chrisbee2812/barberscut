import type { SVGProps } from "react";

export const CombIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 8l-4-4-2 2-1-1-1 1-1-1-1 1-1-1-1 1-1-1-1 1-2-2-4 4" />
    <path d="M22 12l-4.5 4.5" />
    <path d="M16 18H2" />
    <path d="M14 20H2" />
    <path d="M12 16H2" />
  </svg>
);

export const StraightRazorIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.66 6.58 3.9 5.34a1.36 1.36 0 0 1 1.93 0l.88.88a1.36 1.36 0 0 1 0 1.93l-1.24 1.24" />
      <path d="m7.36 12.8 3.5-3.5" />
      <path d="m10.86 9.3 2.05-2.05a2.83 2.83 0 0 1 4 0l1.06 1.06a2.83 2.83 0 0 1 0 4l-2.05 2.05" />
      <path d="M16.28 16.28 12.5 20a2.12 2.12 0 0 1-3 0L3 13.5a2.12 2.12 0 0 1 0-3Z" />
      <path d="M11.88 12.12 7.63 7.87" />
    </svg>
);
