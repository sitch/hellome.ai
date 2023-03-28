import { MDXRemote } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'
import Layout from '@/components/mdx/Layout'
import { site } from '@/data/siteConfig'
import { getFileBySlug, MDXPageProps } from '@/lib/mdx'
import Hero from '@/components/mdx/Hero'

type AboutProps = MDXPageProps

export default function About({ content, frontMatter }: AboutProps) {
  return (
    <Layout
      HeroComp={() => (
        <Hero
          heroData={{ title: 'About NextVita Template Next JS Boilerplate' }}
        />
      )}
    >
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
            <MDXRemote {...content} />
          </div>
        </aside>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const props = await getFileBySlug('policies', 'privacy-policy')
  return { props: props }
}
