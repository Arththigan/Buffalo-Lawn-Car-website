export const IconLeaf = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 19c0-8.837 5.163-14 14-14 1 8.837-5.163 14-14 14Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M5 19c2-4.5 5.5-8 9.5-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const IconRuler = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect
      x="2.8"
      y="8.5"
      width="18.4"
      height="7"
      rx="1.5"
      transform="rotate(-15 12 12)"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M9 10.3l1 2M12 9.5l1 2M15 8.7l1 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export const IconFilter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 5h16l-6 7.5V19l-4 2v-8.5L4 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
)

export const IconArrow = ({ direction = 'right', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d={direction === 'right' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const IconMower = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="7" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M4.5 15.5h13l1.5-5h-3.2L14 6h-3l-1 4.5H6.8l-2.3 5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M15.5 6h3.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const IconDroplet = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3s6 6.8 6 11a6 6 0 1 1-12 0c0-4.2 6-11 6-11Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconSparkle = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
)

export const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.5Z" />
  </svg>
)
