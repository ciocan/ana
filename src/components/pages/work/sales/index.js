import React from 'react'
import { Layout } from '~components/Layout'
import { Content } from '~components/content'

import { Box, Title, Subtitle } from './styles'

export default () => (
  <Layout>
    <Content>
      <Box color="#F2C53B">
        <Title isBold>Sales meets Research & Data Science</Title>
        <Subtitle>
          Leverage UX Research and Analytics to build better tools for a more effective
          cross-selling process.
        </Subtitle>
      </Box>
    </Content>
  </Layout>
)
