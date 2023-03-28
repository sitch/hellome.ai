export const ZapIcon = () => (
  <svg
    className="h-10 w-10 text-deep-purple-accent-400"
    stroke="currentColor"
    viewBox="0 0 52 52"
  >
    <polygon
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      points="29 13 14 29 25 29 23 39 38 23 27 23"
    />
  </svg>
)

export const DotTextureIcon = () => (
  <svg
    viewBox="0 0 52 24"
    fill="currentColor"
    className="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-blue-gray-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
  >
    <defs>
      <pattern
        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
        x="0"
        y="0"
        width=".135"
        height=".30"
      >
        <circle cx="1" cy="1" r=".7" />
      </pattern>
    </defs>
    <rect
      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
      width="52"
      height="24"
    />
  </svg>
)

export const ArrowRightIcon = () => (
  <svg
    className="w-8 rotate-90 transform text-gray-700 lg:rotate-0"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12" />
    <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 " />
  </svg>
)

export const FeatureCheckIcon = () => (
  <svg
    className="h-4 w-4 text-teal-accent-400"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeWidth="2"
  >
    <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
    <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
  </svg>
)

export const LogoIcon = () => (
  <svg
    className="w-8 text-deep-purple-accent-400"
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    strokeWidth="2"
    strokeLinecap="round"
    strokeMiterlimit="10"
    stroke="currentColor"
    fill="none"
  >
    <rect x="3" y="1" width="7" height="12" />
    <rect x="3" y="17" width="7" height="6" />
    <rect x="14" y="1" width="7" height="6" />
    <rect x="14" y="11" width="7" height="12" />
  </svg>
)
