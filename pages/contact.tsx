import Head from 'next/head'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  return (
    <>
      <Head>
        <title>HelloMe.ai</title>
        <meta name="description" content="AI with Authenticity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} data-cy="ContactPage">
        <section className={styles.section}>
          <h1>Contact</h1>
          <p>Coming Soon...</p>
        </section>
      </main>
    </>
  )
}
