import Head from 'next/head'
// import styles from '@/styles/Privacy.module.css'
import styles from '@/styles/Home.module.css'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>HelloMe.ai</title>
        <meta name="description" content="AI with Authenticity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Privacy Policy</h1>
        <p>Coming Soon...</p>
      </main>
    </>
  )
}
