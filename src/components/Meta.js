import PropTypes from 'prop-types'
import Head from 'next/head'

const defaultDescription = 'Ana State personal portfolio website'
const defaultTitle = 'Ana State'

export function Meta({ title, description, url }) {
  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content="AnaState" />
      <meta property="og:url" content={url || 'https://anastate.com'} />
      <meta property="og:type" content="website" />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
}
