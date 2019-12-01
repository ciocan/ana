import React from 'react'
import { Layout } from '~components/Layout'
import { Content } from '~components/content'
import UnderstandImage from './images/understand.svg'
import DefineImage from './images/define.svg'
import BuildImage from './images/build.svg'
import DeliverImage from './images/deliver.svg'

import { Container, Title, Subtitle, Text, Chapter, Process } from './styles'

export default () => (
  <Layout>
    <Content>
      <Title>“Tell me about yourself”</Title>
      <Container>
        <Text isBold>
          I’m a UX Designer with a hybrid background in engineering and design, who's craving
          curiosity set me out to explore and understand human psychology, neuroscience, and
          behaviorism.
        </Text>
        <Text>
          I'm an advocate of inclusiveness, accessibility, and diversity and I feel that as a
          designer I have a great responsibility to make sure these three are included from the very
          start of each project I am involved in.
        </Text>
      </Container>
      <Title>Design Principles</Title>
      <Container>
        <DesignPrinciple chapter="A" title="MY PHILOSOPHY">
          Learn, experiment, fail, succeed, repeat. And have a lot of fun while doing it.
        </DesignPrinciple>
        <DesignPrinciple chapter="B" title="EMPATHY & COMPASSION ARE KEY ">
          UX design thought me the real value of empathy, and the more I harness this “tool", the
          more I fall in love with UX research. It enables me to understand people better, to work
          in a more collaborative way and to tell more compelling stories through my design process.
          Compassion on the other hand, it provides me with the intent to helps the people I’m
          designing for.
        </DesignPrinciple>
        <DesignPrinciple
          chapter="C"
          title='I’M A KEEN TO UNDERSTAND THE “WHY”,” HOW” AND 
“WHAT" BEFORE DESIGNING'
        >
          What problem are we solving? Why are we solving this issue? How can storytelling foster
          empathy between diverse teams? I enjoy getting closer to the answers through collaboration
          with people from various disciplines.
        </DesignPrinciple>
        <DesignPrinciple chapter="D" title='I LOVE TO TRAIN MY "BRAIN MUSCLES"'>
          This means I approach problem-solving both creatively and constructively. Getting out of
          my comfort zone to accommodate innovative solutions to various problems it’s what helps me
          thrive and grow.
        </DesignPrinciple>
      </Container>
      <Title>Design Process</Title>
      <Container>
        <DesignProcess title="I. Understand" subtitle="Research" img={<UnderstandImage />} />
        <DesignProcess title="II. Define" subtitle="Three pillars product" img={<DefineImage />} />
        <DesignProcess title="III. Build" subtitle="Bring ideas to life" img={<BuildImage />} />
        <DesignProcess title="IV. Deliver" subtitle="Delivered Product" img={<DeliverImage />} />
      </Container>
    </Content>
  </Layout>
)

const DesignPrinciple = ({ chapter, title, children }) => (
  <>
    <Chapter>{chapter}</Chapter>
    <Text>
      <Subtitle>{title}</Subtitle>
      {children}
    </Text>
  </>
)

const DesignProcess = ({ title, subtitle, img }) => (
  <Process>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    {img}
  </Process>
)
