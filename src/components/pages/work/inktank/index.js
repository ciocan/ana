import React from 'react'
import { Layout } from '~components/Layout'
import { Content, NextProject } from '~components/content'
import ProjectImage from './images/inktank.png'

import { Image, ImageContainer } from './styles'

import {
  Intro,
  Headline,
  Title,
  Subtitle,
  Box,
  Column,
  Text,
  Section,
  No,
} from '~components/pages/work/common'

export default () => (
  <Layout>
    <Content>
      <Intro color="#44AB96">
        <ImageContainer>
          <Image src={ProjectImage} />
        </ImageContainer>
        <Headline isBold>Ink Tank </Headline>
        <Subtitle>Help tattoo seekers find the right artists</Subtitle>
      </Intro>

      <Box>
        <Column>
          <Title>Timeline</Title>
          <Text>May 2018 - April 2019</Text>
        </Column>
        <Column>
          <Title>Team</Title>
          <Text>
            UX Designer
            <br />
            Project manager
            <br />
            Product Owner
            <br />
            2 Front-end developers
            <br />
          </Text>
        </Column>
        <Column>
          <Title>Role</Title>
          <Text>
            Lead UX designer for end-to-end product redesign and research of a sign - authorise
            banking transactions solution
          </Text>
        </Column>
        <Column>
          <Title>Key Goal</Title>
          <Text>
            Help users understand why they need a separate solution to sign & authorize
            transactions and provide the integration with the main mobile banking app they already
            use.
          </Text>
        </Column>
      </Box>

      <Section>
        <Headline size="36">Tattoo Industry</Headline>
        <div>
          <Text>
            <b>
              Currently the tattoo industry (including tattoo removal) it's a more than 3$ billion
              industry. That's because daily, someone decides to get a tattoo, or on the contrary,
              to remove one.
            </b>
          </Text>
        </div>
      </Section>

      <Section light>
        <Headline size="36">
          <No>01.</No>The Problem
        </Headline>
        <div>
          <Text>
            <b>
              One of the central problems causing resentment of the tattoo seekers is not getting
              understood by the artists they choose to collaborate with. Most often than not, people
              regret getting inked due to the fact that what they receive as an end-product is not
              what they requested, paid for or imagined it will be.
            </b>
          </Text>
          <Title>The Challenge / opportunity</Title>
          <Text>
            The challenge of the project was to design a platform that would help its tattoo
            seeker find both the tattoo inspiration and the matching artist they are looking for in
            an effort to minimize regret associated with the tattooing process.
          </Text>
        </div>
      </Section>
      <NextProject to="/work/security" />
    </Content>
  </Layout>
)
