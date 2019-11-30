import React from 'react'
import { Content, Headline, Subhead } from '~components/content'
import { Layout } from '~components/Layout'
import { Project } from './project'
import Project1 from './images/project1.svg'
import Project2 from './images/project2.svg'

import {
  HomeContainer,
  Explore,
  ExploreText,
  ArrowIcon,
  Description,
  B,
  Projects,
  Title,
} from './styles'

export default () => (
  <Layout>
    <HomeContainer>
      <Headline>Ana State </Headline>
      <Subhead>Multi-disciplinary Designer</Subhead>
      <Description>
        I’m a <B> digital designer </B> who works at the intersection of UX|UI, business,
        engineering and human psychology to build web & mobile products.
      </Description>
    </HomeContainer>
    <Content>
      <Explore>
        <ExploreText>Explore projects </ExploreText>
        <ArrowIcon />
      </Explore>
      <Projects>
        <Title>Selected Projects</Title>
        <Project
          icon={<Project1 />}
          color="#44AB96"
          title="Smart Mobile Banking"
          year="2018"
          type="Mobile App"
        >
          Rethinking the onboarding mobile experience of a secure banking app used to sign &
          authorize transactions.
        </Project>

        <Project
          icon={<Project2 />}
          color="#F2C53B"
          title="Sales meets Research & Data Science"
          year="2018"
          type="Research"
        >
          Rethinking the onboarding mobile experience of a secure banking app used to sign &
          authorize transactions.
        </Project>

        <Project
          icon={<Project2 />}
          color="#4484AB"
          title="Smart Mobile Banking"
          year="2018"
          type="Research"
        >
          Rethinking the onboarding mobile experience of a secure banking app used to sign &
          authorize transactions.
        </Project>
      </Projects>
    </Content>
  </Layout>
)
