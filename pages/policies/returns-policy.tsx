import { MDXRemote } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'
import Layout from '@/components/mdx/Layout'
import { site } from '@/data/siteConfig'
import { processMDXPage, MDXPageProps } from '@/lib/mdx'
import Hero from '@/components/mdx/Hero'

type AboutProps = MDXPageProps

export default function About({ source, data }: AboutProps) {
  return (
    <Layout>
      <NextSeo
        title="About Us - NextVita"
        description="About Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download."
        canonical={`${site.url}/about`}
        openGraph={{
          url: `${site.url}/about`,
          title: 'About Us - NextVita',
          description:
            'About Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download.',
        }}
      />
      <section>
        <aside>
          <div>
            <MDXRemote {...source} />
          </div>
        </aside>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const props = await processMDXPage('policies', 'privacy-policy')
  return { props: props }
}
