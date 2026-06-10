type FlagProps = {
  className?: string;
};

export function UsaFlag({ className }: FlagProps) {
  return (
    <svg
      viewBox="0 0 22 16"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <rect width="22" height="16" fill="#B22234" />
      <rect y="1.23" width="22" height="1.23" fill="#fff" />
      <rect y="3.69" width="22" height="1.23" fill="#fff" />
      <rect y="6.15" width="22" height="1.23" fill="#fff" />
      <rect y="8.62" width="22" height="1.23" fill="#fff" />
      <rect y="11.08" width="22" height="1.23" fill="#fff" />
      <rect y="13.54" width="22" height="1.23" fill="#fff" />
      <rect width="9.5" height="8.62" fill="#3C3B6E" />
      <circle cx="1.6" cy="1.4" r="0.45" fill="#fff" />
      <circle cx="3.4" cy="1.4" r="0.45" fill="#fff" />
      <circle cx="5.2" cy="1.4" r="0.45" fill="#fff" />
      <circle cx="7" cy="1.4" r="0.45" fill="#fff" />
      <circle cx="2.5" cy="2.8" r="0.45" fill="#fff" />
      <circle cx="4.3" cy="2.8" r="0.45" fill="#fff" />
      <circle cx="6.1" cy="2.8" r="0.45" fill="#fff" />
      <circle cx="1.6" cy="4.2" r="0.45" fill="#fff" />
      <circle cx="3.4" cy="4.2" r="0.45" fill="#fff" />
      <circle cx="5.2" cy="4.2" r="0.45" fill="#fff" />
      <circle cx="7" cy="4.2" r="0.45" fill="#fff" />
      <circle cx="2.5" cy="5.6" r="0.45" fill="#fff" />
      <circle cx="4.3" cy="5.6" r="0.45" fill="#fff" />
      <circle cx="6.1" cy="5.6" r="0.45" fill="#fff" />
      <circle cx="1.6" cy="7" r="0.45" fill="#fff" />
      <circle cx="3.4" cy="7" r="0.45" fill="#fff" />
      <circle cx="5.2" cy="7" r="0.45" fill="#fff" />
      <circle cx="7" cy="7" r="0.45" fill="#fff" />
    </svg>
  );
}

export function CanadaFlag({ className }: FlagProps) {
  return (
    <svg
      viewBox="0 0 22 16"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <rect width="22" height="16" fill="#FF0000" />
      <rect x="5.5" width="11" height="16" fill="#fff" />
      <path
        fill="#FF0000"
        d="M11 3.2 9.1 6.1 5.8 6.6l2.4 2.3-.6 3.3L11 10.4l3.4 1.8-.6-3.3 2.4-2.3-3.3-.5L11 3.2z"
      />
    </svg>
  );
}
