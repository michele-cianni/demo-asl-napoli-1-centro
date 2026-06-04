import React from 'react';

// Simple line icons in Bootstrap Italia spirit (Bootstrap Icons-like)
const Icon = ({ name, size = 20, color = 'currentColor', stroke = 1.8, className, style }) => {
  const p = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...(className && { className }),
    ...(style && { style }),
  };
  switch (name) {
    case 'search':
      return (
        <svg {...p}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...p}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...p}>
          <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
        </svg>
      );
    case 'users':
      return (
        <svg {...p}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M17 11a3 3 0 1 0 0-6M22 20c0-2.8-1.8-5-4-5.7" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...p}>
          <path d="M5 3h4l2 5-2.5 2a11 11 0 0 0 5.5 5.5l2-2.5 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case 'location':
      return (
        <svg {...p}>
          <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg {...p}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case 'arrow-up-right':
      return (
        <svg {...p}>
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      );
    case 'chevron-down':
      return (
        <svg {...p}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case 'chevron-right':
      return (
        <svg {...p}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...p}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      );
    case 'close':
      return (
        <svg {...p}>
          <path d="M6 6l12 12M6 18 18 6" />
        </svg>
      );
    case 'info':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v.01M11 12h1v5h1" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...p}>
          <path d="M12 3 2 20h20L12 3z" />
          <path d="M12 10v4M12 17.5v.01" />
        </svg>
      );
    case 'document':
      return (
        <svg {...p}>
          <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path d="M14 3v5h5M9 13h7M9 17h5" />
        </svg>
      );
    case 'pill':
      return (
        <svg {...p}>
          <rect x="2" y="9" width="20" height="6" rx="3" transform="rotate(-45 12 12)" />
          <path d="m8.5 8.5 7 7" />
        </svg>
      );
    case 'hospital':
      return (
        <svg {...p}>
          <path d="M4 21V7l8-4 8 4v14" />
          <path d="M9 21v-6h6v6M12 8v4M10 10h4" />
        </svg>
      );
    case 'stethoscope':
      return (
        <svg {...p}>
          <path d="M6 3v6a4 4 0 0 0 8 0V3M8 3h-2M12 3h2" />
          <path d="M10 13v3a4 4 0 0 0 8 0v-1" />
          <circle cx="18" cy="13" r="2" />
        </svg>
      );
    case 'ambulance':
      return (
        <svg {...p}>
          <path d="M3 7h10v9H3zM13 10h5l3 3v3h-8z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M6 11h3M7.5 9.5v3" />
        </svg>
      );
    case 'target':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case 'book':
      return (
        <svg {...p}>
          <path d="M4 4h6a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H4zM20 4h-6a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3h6z" />
        </svg>
      );
    case 'star':
      return (
        <svg {...p}>
          <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9z" />
        </svg>
      );
    case 'check':
      return (
        <svg {...p}>
          <path d="m5 13 4 4 10-10" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case 'accessibility':
      return (
        <svg {...p}>
          <circle cx="12" cy="4" r="1.5" />
          <path d="M5 8h14M12 8v5M7 21l5-8 5 8M9 12h6" />
        </svg>
      );
    case 'car':
      return (
        <svg {...p}>
          <path d="M5 11 7.5 5h9L19 11" />
          <rect x="2" y="11" width="20" height="7" rx="1" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M2 14h20" />
        </svg>
      );
    case 'train':
      return (
        <svg {...p}>
          <rect x="6" y="2" width="12" height="15" rx="2" />
          <path d="M6 8h12M10 2v6M14 2v6M4 17l2 4h12l2-4" />
          <circle cx="9" cy="14" r="1" />
          <circle cx="15" cy="14" r="1" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
        </svg>
      );
    case 'moon':
      return (
        <svg {...p}>
          <path d="M20 15A8 8 0 0 1 9 4a8 8 0 1 0 11 11z" />
        </svg>
      );
    case 'external':
      return (
        <svg {...p}>
          <path d="M14 4h6v6M10 14 20 4M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
        </svg>
      );
    case 'microphone':
      return (
        <svg {...p}>
          <rect x="9" y="3" width="6" height="11" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
        </svg>
      );
    case 'play':
      return (
        <svg {...p}>
          <path d="M7 4v16l13-8z" />
        </svg>
      );
    case 'download':
      return (
        <svg {...p}>
          <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...p}>
          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4l0-8" />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
          <path d="M16.5 7.5v.01" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...p}>
          <path d="M7 10v4h3v7h4v-7h3l1-4h-4v-2a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2h-3" />
        </svg>
      );
    case 'x':
      return (
        <svg {...p}>
          <path d="M4 4l11.733 16h4.267l-11.733-16l-4.267 0" />
          <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...p}>
          <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-8" />
          <path d="M10 9l5 3-5 3l0-6" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...p}>
          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-10a4 4 0 0 1-4-4l0-10" />
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 1 0-4 0" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...p}>
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      );
    case 'rss':
      return (
        <svg {...p}>
          <path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <path d="M4 11a9 9 0 0 1 9 9" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

export { Icon };
