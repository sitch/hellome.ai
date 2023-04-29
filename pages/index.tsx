import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import BrandLogo from '@/components/ui/BrandLogo/BrandLogo'

// Avoids "document not found" issue
const RequestAccessModal = dynamic(
  () => import('@/components/ui/RequestAccessModal/RequestAccessModal'),
  {
    ssr: false,
    // suspense: true,
  }
)

const font = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>HelloMe.ai</title>
        <meta name="description" content="AI with Authenticity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Suspense fallback={<AppLoading />}> */}
      {/* <HomePage font={inter} /> */}
      {/* </Suspense> */}

      <main className={styles.main} data-cy="HomePage">
        <div className={styles.description}>
          {/* <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div> */}
        </div>

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}

        <div className={styles.center}>
          <BrandLogo />
        </div>

        <div className={styles.grid}>
          {/* ############################################################## */}

          {/* <Link className={styles.card} href="/learn-more">
            <h2 className={font.className}>
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 mb-1 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </h2>
            <p className={font.className}>
              Find out about us and what we do at HelloMe.ai.
            </p>
          </Link> */}

          {/* ############################################################## */}

          <RequestAccessModal className={styles.card}>
            <h2 className={font.className}>
              Artist or Educator
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mb-1 ml-1 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </h2>
            <p className={font.className}>Join the Waitlist</p>
          </RequestAccessModal>

          {/* ############################################################## */}

          {/* <Link className={styles.card} href="/faq">
            <h2 className={font.className}>
              FAQ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 mb-1 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </h2>
            <p className={font.className}>
              Read answers to our frequently asked questions.
            </p>
          </Link> */}

          {/* ############################################################## */}

          {/* <Link className={styles.card} href="/privacy">
            <h2 className={font.className}>
              Privacy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 mb-1 inline h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </h2>
            <p className={font.className}>
              We never track you and will never use any of your photo's or sell
              any of your data.
            </p>
          </Link> */}

          {/* ############################################################## */}

          {/* <a
            href="https://store.hellome.ai"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={font.className}>
              //  Store <span>-&gt;</span> 
              Visit our Store
            </h2>
            <p className={font.className}>
              Check out our AI personalized children's books.
            </p>
          </a> */}

          {/* ############################################################## */}

          {/* <a
            href="https://store.hellome.ai"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={font.className}>
              Learn More
            </h2>
            <p className={font.className}>
              Find out how we work with artists to put the <b>AI</b> in <b>Authenticity</b>
            </p>
          </a> */}

          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={font.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={font.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={font.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={font.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={font.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={font.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={font.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={font.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </>
  )
}
