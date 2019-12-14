import React from 'react'
import { Layout } from '~components/Layout'
import { Content } from '~components/content'
import Persona1 from './images/persona1.png'
import Persona2 from './images/persona2.png'
import Storyboard from './images/storyboard.png'

import {
  Intro,
  Headline,
  Title,
  Subtitle,
  Illustration,
  ProjectImage,
  Box,
  Column,
  Text,
  Section,
  No,
  Image,
  Foot,
} from './styles'

export default () => (
  <Layout>
    <Content>
      <Intro color="#F2C53B">
        <Illustration>
          <ProjectImage />
        </Illustration>
        <Headline isBold>Sales meets Research & Data Science</Headline>
        <Subtitle>
          Leverage UX Research and Analytics to build better tools for a more effective
          cross-selling process.
        </Subtitle>
      </Intro>

      <Box>
        <Column>
          <Title>Timeline</Title>
          <Text>September - October 2019</Text>
        </Column>
        <Column>
          <Title>Team</Title>
          <Text>
            UX Designer Product owner UX Researcher Data - science engineers Solution architect ​
          </Text>
        </Column>
        <Column>
          <Title>Role</Title>
          <Text>Lead UX Research together with the UX Researcher</Text>
        </Column>
        <Column>
          <Title>Key Goal</Title>
          <Text>
            Help sales agents improve the cross-selling process by providing them with the tools to
            build and maintain a 360-degree customer profile.
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
              Banking sales agents are having high time costs collecting customer data relevant to
              the cross-selling process. The current sales workflow was slow due to the need of
              using multiple tools when gathering data to prepare the sales process in advance.
            </b>
          </Text>
          <Title>The Need</Title>
          <Text>
            The sales agents needed a tool to make the cross-selling process effortless, giving them
            the ability to build and maintain a 360-degree customer profile which would facilitate
            the sales process and closing deals in a more profitable and efficient manner. 
          </Text>
          <Title>The Goal</Title>
          <Text>
            The project had two main goals: to leverage analytics data from the main banking app
            called Smart banking in order to build machine learning models that would help improve
            the existing sale tool (and therefore increase the number of sold products ) and to
            create customized product campaigns in the Smart banking app for targeted types of
            users.
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

      <Section>
        <Headline size="36">
          <No>02.</No>My Role
        </Headline>
        <div>
          <Text>
            <b>
              As the sole UX designer of this project, I had the opportunity to pair up with a UX
              Researcher and a Product Owner to define how we will approach the research phase and
              what outcomes are we looking for.
            </b>
          </Text>
          <Title>User Research</Title>
          <Text>
            User interviews <br />
            Stakeholder interviews <br />
            Personas <br />
            Storyboard
          </Text>
          <Title>Lean UX Process</Title>
          <Text>
            Before diving into the research phase, we had a kick-off meeting where the PO, Agile
            Coach, Data Science team and Ito get to a collective understanding and alignment about
            the current cross-selling process, what are the frictions sales agents are facing during
            the process and what needs do they have.
          </Text>
        </div>
      </Section>

      <Section light>
        <Headline size="36">
          <No>03.</No>Understanding the User
        </Headline>
        <div>
          <Title>The Need</Title>
          <Text>
            We conducted <b>10 in-person user interviews</b> during <b>2 weeks</b> to better
            understand how the sales agents interact with clients, how do they collect data and keep
            trail of customer interactions. At the same time, this setup gave us the chance to
            observe the colleagues of the interviewees "in action".
          </Text>
        </div>
      </Section>
      <Section>
        <div></div>
        <div>
          <Title>User Personas</Title>
          <Text>We narrowed down the Personas to two as it can be seen below:</Text>
          <Image src={Persona1} />
          <Image src={Persona2} />
          <Title>Storyboard</Title>
          <Text>
            In order to capture in a more realistic way the cross-selling process, I built a
            storyboard. This helped the team to be on the same page and have the same understanding
            of the process.
          </Text>
          <Image src={Storyboard} />
        </div>
      </Section>

      <Section>
        <Headline size="36">
          <No>04.</No>Research Takeaways & Implications
        </Headline>
        <div>
          <Title>01. Using multiple sales tools simultaneously spares attention</Title>
          <Text>
            Sales agents often have to check customer information during their client meetings. The
            direct implication of this is that they get disrupted from the task at hand and the
            clients feel they are not being paid attention to.
          </Text>
          <Title>02. Using visual cues makes the process smoother</Title>
          <Text>
            A lot of the agents we interviewed mentioned the tools they currently use are
            providing a lot of information, but they rarely use it. When asked why they replied:
            "It's simply too much information in one small space. I'd rather have some visual cues
            to show me what's indeed important to know about a certain client". 
          </Text>
          <Title>03. Fewer functionalities used in a more efficient way</Title>
          <Text>
            This one was not surprising at all. Giving the age of information we live and the
            cognitive overload we confront, I've fully empathized with the agents when they've told
            they need tools should have fewer functionalities yet allowing them to do their work in
            a more efficient way.
          </Text>
          <Title>04. Clients come first</Title>
          <Text>
            In order to be able to serve the clients better, agents need to have enough time to
            conduct client-centered interactions. This means allowing for quality time with each of
            them to fully understand their needs short-term and long term.
          </Text>
        </div>
      </Section>

      <Section light>
        <Headline size="36">LESSONS LEARNED</Headline>
        <div>
          <Title>1. What would I do differently next time?</Title>
          <Text>
            I wish the User research phase could have been done more carefully, as this part of the
            project is crucial. Because the team aimed to get started multiple project phases at the
            same time, the research phase was done in a bit of a hurry and not as thorough I would
            have aimed for.
          </Text>
          <Title>2. Sense of ownership and teamwork</Title>
          <Text>
            We could see during the Research phase of the project that design sprints bring great
            value to our Agile process. For this reason, we decided  to keep using the Agile
            stand-ups as long as the team benefits from them. Involving both engineering, data
            science and design teams in this process helped  validate assumptions, test ideas in a
            safe space and keep everybody aligned on the outcomes we wanted to achieve together.
          </Text>
          <Title>3. Over-communication is key</Title>
          <Text>
            I can not stress enough how important this one is. Being involved in different projects
            at the same time I had to make sure both teams I was being part of were aware of my
            workload and involvement with the other project. Promoting intense collaboration at all
            times and never letting the ball drop was key during my involvement with Analytics
            Digital Lab.
          </Text>
        </div>
      </Section>
    </Content>
  </Layout>
)
