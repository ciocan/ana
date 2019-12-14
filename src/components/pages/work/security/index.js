import React from 'react'
import { Layout } from '~components/Layout'
import { Content } from '~components/content'

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
    </Content>
  </Layout>
)
