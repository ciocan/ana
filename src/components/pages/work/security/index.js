import React from 'react'
import { Layout } from '~components/Layout'
import { Content } from '~components/content'
import Avatar from './images/avatar.svg'

import { ProjectImage } from './styles'

import {
  Intro,
  Headline,
  Title,
  Subtitle,
  Illustration,
  Box,
  Column,
  Text,
  Section,
  No,
  Foot,
  List,
  ListContainer,
  Row,
} from '~components/pages/work/common'

export default () => (
  <Layout>
    <Content>
      <Intro color="#4484AB">
        <Illustration>
          <ProjectImage />
        </Illustration>
        <Headline isBold>eSecurity redesign</Headline>
        <Subtitle>
          A redesign project to learn how to integrate a sign & authorize transactions banking
          solution within a mobile banking app.
        </Subtitle>
      </Intro>

      <Box>
        <Column>
          <Title>Timeline</Title>
          <Text>August - October 2019</Text>
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

      <Section light>
        <Headline size="36">
          <No>01.</No>The Problem
        </Headline>
        <div>
          <Text>
            <b>
              Due to legal /security constraints of the PSD2 EU directive, the banks have to employ
              security solutions that allow users to sign and authorize transactions safely. This
              leads to users' frustration who have to use two apps instead of one: the main mobile
              banking app and the associated security solution that allows them to sign and
              authorize transactions.
            </b>
          </Text>
          <Foot>
            Please note: To comply with my non-disclosure agreement, I have omitted and obfuscated
            confidential information in this case study as final mockups for e.g. All information in
            this case study is my own and does not necessarily reflect the views of the company I
            worked for. I have replaced the original company and product names with the alias,
            “eSecurity”.
          </Foot>
        </div>
      </Section>

      <ListContainer>
        <Headline>Desired Business Outcomes</Headline>
        <List left color="#44ab96">
          <Column>
            <ul>
              <li>
                01. Integration of the eSecurity solution with the existing main banking flow of the
                existing native app.
              </li>
              <li>02. A 35% drop in the number of customer care complaints</li>
              <li>03. Implementations of the new design to be ready by the end of Q4.</li>
              <li>04. Transfer the development responsibility in-house</li>
              <li>
                05. Scalable design/development components should be integrated as configurable
                components within the existent design system
              </li>
            </ul>
          </Column>
          <Column>
            <Avatar />
          </Column>
        </List>
      </ListContainer>

      <ListContainer right>
        <Headline>Challenges</Headline>
        <List right color="#F2C53B">
          <Column>
            <Avatar />
          </Column>
          <Column>
            <ul>
              <li>01. The need to integrate the flows of 2 apps as one</li>
              <li>02. No in-house dedicated front-end development team</li>
              <li>
                03. Very tight timelines for design - compressing 3-months planning & designing into
                a 3-weeks chunk
              </li>
              <li>
                04. My involvement as a designer in 2 other projects at the same time ( challenging
                workload )
              </li>
              <li>
                05. Continuous changes in business requirements from the Legal & Security team.
              </li>
            </ul>
          </Column>
        </List>
      </ListContainer>

      <Section>
        <Headline size="36">
          <No>02.</No>My Role
        </Headline>
        <div>
          <Text>
            <b>
              As the lead UX designer of this project, I owned the global onboarding eSecurity
              redesign and login integration within the main mobile banking app. In addition to
              these flows, we also had to account for pending transactions flow, and sign &
              authorize transaction flow.
            </b>
          </Text>
          <Row>
            <Column>
              <Title>Design</Title>
              <Text>
                UI Design
                <br />
                Sketches
                <br />
                Wireframes
                <br />
                Hi-fi Mockups
                <br />
                Interactive Prototype
                <br />
                Design Iterations
              </Text>
            </Column>
            <Column>
              <Title>User Research</Title>
              <Text>
                User interviews <br />
                Stakeholder interviews <br />
                Personas <br />
                Storyboard
              </Text>
            </Column>
          </Row>
        </div>
      </Section>
    </Content>
  </Layout>
)
