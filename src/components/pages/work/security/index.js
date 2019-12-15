import React from 'react'
import { Layout } from '~components/Layout'
import { Content, NextProject } from '~components/content'
import Avatar from './images/avatar.svg'
import Understanding from './images/understanding.png'
import Persona1 from './images/persona1.png'
import Persona2 from './images/persona2.png'
import Storyboard from './images/storyboard.png'
import Challenge from './images/challenge.png'
import UserFlow from './images/user-flow.png'

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
  Image,
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
      <Section light>
        <Headline size="36">
          <No>03.</No>User Research
        </Headline>
        <div>
          <Text>
            <b>
              We first surveyed the app’s reviews for the current design putting a special focus on
              customer complaints. I also discussed with the call center support specialists to get
              more insights on customer complaints. Next, we conducted 16 User interviews to
              uncover pain points. This led to the development of Personas targeted for different
              groups from our target audience and a Storyboard.
            </b>
          </Text>
          <Image src={Understanding} />
        </div>
      </Section>
      <Section>
        <Headline size="36">
          <No>04.</No>Understanding the user
        </Headline>
        <div>
          <Title>USER KEY PAIN POINT</Title>
          <Text>
            <b>Understanding user's context</b>​ became crucial at this point in the process. We
            could clearly see that <b>onboarding flow was confusing and cluttered</b>, so we needed
            to find a way to reconcile user's needs with the legal compliance constraints we had to
            obey.
          </Text>
          <Text isBold italic>
            01. Why do I need a separate app to sign & authorize transactions?​
          </Text>
          <Text isBold italic>
            02. How does the activation process of the sign & authorize transactions app works?
          </Text>
          <Text isBold italic>
            03. Call centers get countless numbers of customer complaints about the above-mentioned
            issues.
          </Text>
          <Title>User Personas</Title>
          <Text>
            We narrowed down to personas to two main buckets: <b>tech-savvy</b> and{' '}
            <b>non-tech savvy</b> users.
          </Text>
          <Image src={Persona1} alt="Persona" />
          <Image src={Persona2} alt="Persona" />
          <Title>Storyboard</Title>
          <Text>
            Going through a user scenario in the form of a storyboard helped the team empathize with
            users so that we could better address their pain points and frustrations.
          </Text>
          <Image src={Storyboard} alt="Storyboard" />
          <Title>Preliminary user testing</Title>
          <Text>
            We designed a prototype and recruited 4 users to ask them to go through the current
            onboarding flow of the eSecurity app. During testing, I was able to validate personas'
            assumptions and spot even new users’ pain points.
          </Text>
        </div>
      </Section>
      <Section light>
        <Headline size="36">Design Challenge</Headline>
        <div>
          <Text italic>
            How might we create a <b>simple to use</b> and integrated banking <b>app</b> to sign &
            authorize transactions that{' '}
            <b>
              provides value for the users and reduces the number of complaints to call-centers?
            </b>
          </Text>
          <Image src={Challenge} alt="Design Challenge" />
        </div>
      </Section>
      <Section>
        <Headline size="36">
          <No>05.</No>Design Sprint Proces
        </Headline>
        <div>
          <Text>
            <b>eSecurity redesign used DESIGN SPRINT week iterations.</b> We employed a design
            process that
            <b>uses tools as human-centered design and Lean UX design thinking</b>, where
            collaborative work between design, engineering and business teams made the process
            faster and more efficient.
          </Text>
          <h4>Monday - Tuesday</h4>
          <Title>Understand</Title>
          <Text>
            We had an Iteration Planning Meeting with business stakeholders, Product owner, and
            Design each Monday to understand where we’re at and prioritize tasks according to the
            results from the prior week's usability testing making sure the users and business goals
            are still aligned
          </Text>
          <h4>Tuesday - Wednesday</h4>
          <Title>Refine Ideas & Decide</Title>
          <Text>
            We used the analyzed data from usability testing to refine improvement ideas and decide
            what to test next.
          </Text>
          <h4>Thursday</h4>
          <Title>Prototype</Title>
          <Text>
            Using the refined flows we created Invision prototypes to test with, on Friday. This was
            also an iterative process as we used various fidelity prototypes in various stages of
            the project.
          </Text>
          <h4>Friday</h4>
          <Title>Test & Validate</Title>
          <Text>
            After usability testing occurred we gathered and analyzed to findings in order to
            validate our Monday assumptions and used the learnings for the next planning meeting.
          </Text>
          <Image src={UserFlow} alt="User Flow" />
        </div>
      </Section>
      <Section>
        <Headline size="36">
          <No>06.</No>Usability Testing Takeaways & Solutions
        </Headline>
        <div>
          <h4>01</h4>
          <Title>Security comes first</Title>
          <Text>
            During the redesign process, we had to comply with legal and security regulations given
            by the PSD2 EU directive. When we asked our test participants what's their opinion on
            the security matter, they all replied:{' '}
            <b>
              <i>
                "I don't care that much how the app looks like as long as it's secure, though
                looking nice would be an added bonus".
              </i>
            </b>
          </Text>
          <h4>02</h4>
          <Title>Use familiar patterns when (re)designing</Title>
          <Text>
            Being accustomed to the apps they use daily, users were looking for known patterns while
            trying out our designs. 12 out of 16 participants we tested with were murmuring:{' '}
            <b>
              <i>"I know this [e.g. pattern}, it looks like Facebook/Whatsapp/ING/Revolut" etc.</i>
            </b>
          </Text>
          <h4>03</h4>
          <Title>Use visual cues</Title>
          <Text>
            During a part of the testing sessions, we noticed a trend. Users were going through the
            flow very fast and when I and the Product owner asked them why, almost all of them
            replied:{' '}
            <b>
              <i>"It's easy, I have that icon there that tells me what to do".</i>
            </b>
          </Text>
          <h4>04</h4>
          <Title>Users will get distracted very easily</Title>
          <Text>
            I was tempted while designing to use animations in the activation flow. So I decided
            during one testing session, to perform a preference test. Users were distracted by it
            and as such, they couldn't perform properly the task at hand. Therefore, I decided to{' '}
            <b>focus on functionality.</b>
          </Text>
        </div>
      </Section>
      <Section light>
        <Headline size="36">LESSONS LEARNED</Headline>
        <div>
          <Title>This project left me with great insights. Here's what I learned:</Title>
          <h4>01</h4>
          <Title>Designing for security and legal is complex</Title>
          <Text>
            One of the biggest challenges the PO and I faced throughout the project was how to deal
            with the legal/security aspect of the design. Partly, because we needed to go back and
            forth with the Legal team to find solutions that would comply with the regulations, yet
            would also appeal to the user. There were frustrating times when we'll get the approval,
            and days later I had to go back to the drawing board for various reasons.
          </Text>
          <h4>02</h4>
          <Title>Make sure everyone sees the "elephant"</Title>
          <Text>
            The <b>elephant</b> represents <b>the product</b>. Working on a product with a big
            ecosystem isn't always seamless, as everyone is involved in a different part of it.
            <b> Having a common understanding of the</b> whole <b>product</b> within the team and
            company, not just the part you are supposed to work on, <b>it's crucial</b> in order{' '}
            <b>to keep</b> the cross-team design <b>consistency</b>, awareness,{' '}
            <b>business goals and overarching user experience across product.</b>
          </Text>
          <h4>03</h4>
          <Title>Think + Design + Build + Validate</Title>
          <Text>
            Working with <b>short feedback loops</b> / sprints and <b>intense collaboration</b> with
            stakeholders
            <b>made the progress</b> very <b>much apparent at the end of each iteration.</b> It
            ensured that assumptions would become certainties quickly and made "pivoting" a natural
            part of the process.
          </Text>
          <h4>04</h4>
          <Title>Designing our own process</Title>
          <Text>
            Creating and improving our lean UX process combined with ideation/decision workshops
            from Design Sprints brought a fast and collective understanding of our day-to-day work.​
          </Text>
        </div>
      </Section>
      <NextProject to="/work/research" />
    </Content>
  </Layout>
)
