import React from 'react'
import { Content } from '~components/content'
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
  Headline,
  Projects,
  Image,
} from './styles'

export default () => (
  <Layout
    title="Multi-disciplinary Designer |"
    description="Multi-disciplinary designer who works at the intersection of business, user experience, engineering, & human psychology"
    keywords="multi-disciplinary designer, user experience"
  >
    <Content>
      <HomeContainer>
        <Headline>Hey, I'm Ana,</Headline>
        <Description>
          <b>a multi-disciplinary designer</b> who works at the intersection of business, user
          experience, engineering, & human psychology to build web & mobile products.
        </Description>
      </HomeContainer>
      <Explore href="#work">
        <ExploreText>Explore projects</ExploreText>
        <ArrowIcon />
      </Explore>
      <a id="work" />
      <Projects>
        <Project
          icon={<Security />}
          color="#44AB96"
          title="eSecurity redesign"
          year="2019"
          type="Mobile App"
          link="/work/security"
        >
          Redesigning the onboarding mobile experience of a security banking app used to sign &
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
          icon={<Image src={Inktank} alt="Ink Tank" />}
          color="#4484AB"
          title="Ink Tank"
          year="2018"
          type="PWA App"
          link="/work/inktank"
        >
          Build a PWA platform to help tattoo seekers find tattoo inspiration, and the right tattoo
          artist in an effort to minimise regret associated with the tattooing process.  
        </Project>
      </Projects>
    </Content>
  </Layout>
)
