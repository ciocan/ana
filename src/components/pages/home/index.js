import React from 'react'
import { Content, Headline } from '~components/content'
import { Layout } from '~components/Layout'
import { Project } from './project'
import Security from './images/project1.svg'
import Research from './images/project2.svg'
import Inktank from '~components/pages/work/inktank/images/inktank.png'

import {
  HomeContainer,
  Explore,
  ExploreText,
  ArrowIcon,
  Description,
  B,
  Projects,
  Image,
} from './styles'

export default () => (
  <Layout>
    <HomeContainer>
      <Headline>Hey, I'm Ana!</Headline>
      <Description>
        A <B>multi-disciplinary designer</B> who works at the intersection of UX|UI, business,
        engineering and human psychology to build web & mobile products.
      </Description>
    </HomeContainer>
    <Content>
      <Explore>
        <a id="work">
          <ExploreText>Explore projects</ExploreText>
        </a>
        <ArrowIcon />
      </Explore>
      <Projects>
        <Project
          icon={<Security />}
          color="#44AB96"
          title="eSecurity redesign"
          year="2019"
          type="Mobile App"
          link="/work/security"
        >
          Rethinking the onboarding mobile experience of a secure banking app used to sign &
          authorize transactions.
        </Project>

        <Project
          icon={<Research />}
          color="#F2C53B"
          title="Sales meets Research & Data Science"
          year="2019"
          type="Research"
          link="/work/research"
        >
          Leverage UX Research and Analytics to build better tools for a more effective
          cross-selling process.
        </Project>

        <Project
          icon={<Image src={Inktank} />}
          color="#4484AB"
          title="Ink Tank"
          year="2018"
          type="Mobile App"
          link="/work/inktank"
        >
          Help tattoo seekers find the right artist.
        </Project>
      </Projects>
    </Content>
  </Layout>
)
