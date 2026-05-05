export function CompassLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label="Purveyor of Curiosities antique brass compass logo"
    >
      <defs>
        <radialGradient id="compassGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#d7ad55" stopOpacity="0.38" />
          <stop offset="60%" stopColor="#8a6428" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0d0b08" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="48" cy="48" r="45" fill="#0d0b08" stroke="#b98d3a" strokeWidth="3" />
      <circle cx="48" cy="48" r="35" fill="url(#compassGlow)" stroke="#6f4f21" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="4" fill="#d7ad55" />

      <path
        d="M48 12 L53 38 L48 34 L43 38 Z"
        fill="#d7ad55"
        stroke="#f5ead2"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M48 84 L43 58 L48 62 L53 58 Z"
        fill="#8a6428"
        stroke="#d7ad55"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M12 48 L38 43 L34 48 L38 53 Z"
        fill="#8a6428"
        stroke="#d7ad55"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M84 48 L58 53 L62 48 L58 43 Z"
        fill="#d7ad55"
        stroke="#f5ead2"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      <path
        d="M30 30 L66 66"
        stroke="#b98d3a"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M66 30 L30 66"
        stroke="#b98d3a"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />

      <text x="48" y="23" textAnchor="middle" fill="#d7ad55" fontSize="8" fontWeight="700">
        N
      </text>
      <text x="48" y="80" textAnchor="middle" fill="#d7ad55" fontSize="8" fontWeight="700">
        S
      </text>
      <text x="18" y="51" textAnchor="middle" fill="#d7ad55" fontSize="8" fontWeight="700">
        W
      </text>
      <text x="78" y="51" textAnchor="middle" fill="#d7ad55" fontSize="8" fontWeight="700">
        E
      </text>
    </svg>
  );
}
