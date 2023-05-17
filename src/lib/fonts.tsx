import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/**
 * Font fix
 * @link https://levelup.gitconnected.com/how-to-make-next-js-13s-optimized-fonts-work-with-tailwind-css-c3c5e57d38aa
 */
export const FontFix = () => (
  <style jsx={true} global={true}>
    {`
      :root {
        --font-sans: ${fontSans.style.fontFamily};
        --font-mono: ${fontMono.style.fontFamily};
      }
    `}
  </style>
)
