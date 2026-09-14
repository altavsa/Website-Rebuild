type LogoProps = {
  className?: string;
};

/** Simple geometric AV monogram mark */
export function LogoMark({ className = "h-9 w-9" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#102a43" />
      <path
        d="M11 28 L20 10 L29 28"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M14.5 22 H25.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22.5 16 L28.5 28"
        stroke="#9fb3c8"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
