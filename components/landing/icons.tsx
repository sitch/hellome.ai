import { SVGProps } from 'react'

export const ZapIcon = (props: SVGProps<SVGSVGElement> = {}) => (
  <svg
    className="h-10 w-10 text-deep-purple-accent-400"
    stroke="currentColor"
    viewBox="0 0 52 52"
    {...props}
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

export const DotTextureIcon = (props: SVGProps<SVGSVGElement> = {}) => (
  <svg
    className="absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 text-blue-gray-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
    viewBox="0 0 52 24"
    fill="currentColor"
    {...props}
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

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement> = {}) => (
  <svg
    className="w-8 rotate-90 text-gray-700 lg:rotate-0"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12" />
    <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 " />
  </svg>
)

export const FeatureCheckIcon = (props: SVGProps<SVGSVGElement> = {}) => (
  <svg
    className="h-4 w-4 text-teal-accent-400"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeWidth="2"
    {...props}
  >
    <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
    <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
  </svg>
)

export const LogoIcon = (props: SVGProps<SVGSVGElement> = {}) => (
  <svg
    className="w-8 text-deep-purple-accent-400"
    viewBox="0 0 24 24"
    strokeLinejoin="round"
    strokeWidth="2"
    strokeLinecap="round"
    strokeMiterlimit="10"
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <rect x="3" y="1" width="7" height="12" />
    <rect x="3" y="17" width="7" height="6" />
    <rect x="14" y="1" width="7" height="6" />
    <rect x="14" y="11" width="7" height="12" />
  </svg>
)

export const TwitterIcon = (props: SVGProps<SVGSVGElement> = {}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
  </svg>
)

export const FacebookIcon = (props: SVGProps<SVGSVGElement> = {}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
  </svg>
)
