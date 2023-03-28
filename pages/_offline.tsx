import { NextSeo } from 'next-seo'

const Fallback = () => (
  <>
    <NextSeo
      title="Offline"
      description="Offline Fallback Page"
      nofollow
      noindex
    />
    <>
      <h1>This is offline fallback page</h1>
      <h2>When offline, any page route will fallback to this page</h2>
    </>
  </>
)

export default Fallback
