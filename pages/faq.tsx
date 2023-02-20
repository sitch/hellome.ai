import Head from 'next/head'
import styles from '@/styles/Faq.module.css'

// # FAQ
// ## What does HelloMe.ai do?
// ## How is HelloMe.ai different from competitors?
// ## What technology does HelloMe.ai use?
// ## How does HelloMe.ai protect my privacy?
// ## How does HelloMe.ai protect artists?
// ## How does HelloMe.ai compensate artists?
// ## How does HelloMe.ai compensate artists?

export default function FAQ() {
  return (
    <>
      <Head>
        <title>HelloMe.ai</title>
        <meta name="description" content="AI with Authenticity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} data-cy="FaqPage">
        <section className={styles.section}>
          <h1>FAQ</h1>
          <h2>What does HelloMe.ai do?</h2>
          <p>...</p>
          <h2>How is HelloMe.ai different from competitors?</h2>
          <p>...</p>
          <h2>What technology does HelloMe.ai use?</h2>
          <p>...</p>
          <h2>How does HelloMe.ai protect my privacy?</h2>
          <p>...</p>
          <h2>How does HelloMe.ai protect artists?</h2>
          <p>...</p>
          <h2>How does HelloMe.ai compensate artists?</h2>
          <p>...</p>
          <h2>How does HelloMe.ai compensate artists?</h2>
          <p>...</p>
        </section>
      </main>
    </>
  )
}
