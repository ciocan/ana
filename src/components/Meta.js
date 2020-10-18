import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

const defaultTitle = 'Ana State'
const defaultDescription =
  'Londond based technical product designer, raving about the connection between human psychology, business and design.'

export function Meta({ title, description }) {
  const { route } = useRouter()

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="AnaState" />
      <meta property="og:url" content={`https://anastate.com${route}`} />
      <meta property="og:type" content="website" />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}
