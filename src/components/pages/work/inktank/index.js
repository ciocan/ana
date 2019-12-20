import React from 'react'
import { Layout } from '~components/Layout'
import { Content, NextProject } from '~components/content'
import ProjectImage from './images/inktank.png'
import Analysis from './images/analysis.png'
import DesingProcess from './images/design-process.png'
import Persona1 from './images/persona1.png'
import Persona2 from './images/persona2.png'
import CustomerJourney from './images/customer-journey.png'
import Sitemap from './images/sitemap.png'
import PaperSketch from './images/paper-sketch.png'
import LofiWireframe from './images/lofi-wireframe.png'
import UsabilityTest from './images/usability-test.png'
import ScreenFav from './images/screen-fav.png'
import ScreenBook1 from './images/screen-book1.png'
import ScreenBook2 from './images/screen-book2.png'
import PolishedDesign from './images/polished-design.png'

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
  ListContainer,
  List,
  Img,
  Row,
  Image as FullscreenImage,
  Caption,
} from '~components/pages/work/common'

export default () => (
  <Layout
    title="Ink Tank Project |"
    description="Platform to help tattoo seekers find tattoo inspiration"
    keywords="tattoo seekers platform, ux research, project design"
  >
    <Content>
      <Intro color="#4484AB">
        <ImageContainer>
          <Image src={ProjectImage} alt="Ink Tank" />
        </ImageContainer>
        <Headline isBold>Ink Tank</Headline>
        <Subtitle>
          Build a PWA platform to help tattoo seekers find tattoo inspiration, and the right tattoo
          artist in an effort to minimise regret associated with the tattooing process.
        </Subtitle>
      </Intro>

      <Box>
        <Column>
          <Title>Timeline</Title>
          <Text>May 2018 - April 2019</Text>
        </Column>
        <Column>
          <Title>Team</Title>
          <Text>UX designer for end-to-end product design </Text>
        </Column>
        <Column>
          <Title>Role</Title>
          <Text>
            Research
            <br />
            Conception
            <br />
            Wireframing
            <br />
            Prototyping
            <br />
            Design system
          </Text>
        </Column>
        <Column>
          <Title>Key Goal</Title>
          <Text>
            Help tattoo seekers find  tattoo inspiration, and the matching tattoo artist in an
            effort to minimise regret associated with the tattooing process. 
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

      <ListContainer>
        <Headline>Competitive Analysis </Headline>
        <List left color="#4484AB">
          <Column>
            <ul>
              <li>01. Highest ranked competitors are Ink Hunter & TATTOODO</li>
              <li>02. Both use social media platforms as medium to interact with users</li>
              <li>03. Both platforms are present on European / US Market</li>
              <li>04. None of the two platforms has a dedicated tattoo-artist feedback system</li>
              <li>05. Ink Hunters structure is simpler than TATTOODOO’S</li>
            </ul>
          </Column>
          <Column>
            <Img src={Analysis} alt="Competitive Analysis" />
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
              As the lead UX designer of this project, I owned the end-to-end process, from
              competitive analysis & user research, to ideation, wireframing , information
              architecture & visual design.
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
                Storyboard <br />
                Usability testing
              </Text>
            </Column>
          </Row>
          <Title>Lean UX Process</Title>
          <Text>
            Altough I was responsible for the end-to-end process I applied a Lean UX approach to it.
          </Text>
        </div>
      </Section>

      <Section>
        <Headline size="36">
          <No>03.</No>Design Process
        </Headline>
      </Section>
      <Img src={DesingProcess} alt="design process" />
      <Section>
        <Headline size="36">Design Challenge</Headline>
        <Text>
          <i>
            How might we create a simple to use app that{' '}
            <b>allows its users to look for inspiration and find tattoo artists who can</b> not only
            bring their ideas to life but most importantly <b>understand their needs?</b>
          </i>
        </Text>
      </Section>
      <Section>
        <Headline size="28px">MVP requirements</Headline>
        <Text>
          <b>
            Simple and intuitive UI
            <br />
            Clear home page where users can access info about tattoos, studios, artists and
            aftercare
            <br />
            Make it easy to save tattoo designs & book appointments.
          </b>
        </Text>
      </Section>

      <Section light>
        <Headline size="36">
          <No>04.</No>Understanding the User
        </Headline>
        <div>
          <Title>Research Setup</Title>
          <Text>
            I first conducted <b>Competitor analysis of apps as Tattoodo & Ink Hunter.</b> Next,
            I've conducted <b>in-person and remote user interviews</b> with domain experts{' '}
            <b>(tattoo artists)</b> and potential users (novice & experienced <b>tattoo seekers</b>
            ).
          </Text>
          <Title>User Key Pain Points</Title>
          <Text>I was looking to find some answers to the following main questions:</Text>
          <Text isBold>
            <i>01  What was the user's process when searching for inspiration?</i>
          </Text>
          <Text isBold>
            <i>02  What are the main difficulties they encounter when searching for a tattoo?</i>
          </Text>
          <Text isBold>
            <i>03  What are the main channels used to find inspiration?</i>
          </Text>
          <Text isBold>
            <i>04  What matters the most to them throughout the process and after?</i>
          </Text>
        </div>
      </Section>
      <Section>
        <div></div>
        <div>
          <Title>User Personas​</Title>
          <Text>
            Using the data I've gathered in the user research phase I've built 3 personas. For the
            purpose of this study case I will list 2 personas ( tattoo-artist and tattoo-seeker) and
            1 Customer Journey Map (for the tattoo seeker).
          </Text>
          <FullscreenImage src={Persona1} alt="Persona" />
          <FullscreenImage src={Persona2} alt="Persona" />
          <Title>Customer Journey Map</Title>
          <Text>
            To bring Jullie's journey to life I've also built a user journey map to be able to
            understand better the user pain points while searching for tattoo designs/artists.
          </Text>
          <FullscreenImage src={CustomerJourney} alt="Customer Journey" />
        </div>
      </Section>

      <Column light>
        <Title spaced>User Research Learnings</Title>
        <Box>
          <Column blue>
            <Text>
              tattoo seekers rely heavily on social media platforms (Instagram, Pinterest or Google)
              when seeking tattoo inspiration.
            </Text>
          </Column>
          <Column blue>
            <Text>
              tattoo seekers need to be able to see  artist’s portfolio to decide if they want to
              work with him /her.
            </Text>
          </Column>
          <Column blue>
            <Text>
              Often tattoo seekers feel overwhelmed by the process of finding a suitable artist
            </Text>
          </Column>
          <Column blue>
            <Text>
              choosing the design is important, yet making sure they will not regret getting inked
              is key to tattooing process
            </Text>
          </Column>
        </Box>
      </Column>

      <Section>
        <Headline size="36">
          <No>05.</No>Information Architecture - <br /> - Sitemap
        </Headline>
        <div>
          <Text>
            I created the <b>draft version of the app's Information architecture sitemap</b> and{' '}
            <b>then conducted a live</b> (using post-it notes) and{' '}
            <b>remote card sorting session</b> (using optimalworkflow.com), asking users to organize
            different topics into categories that made sense to them.
          </Text>
          <Text>
            The <b>card sorting helped me identify patterns</b> and refine the initial version of
            the Information architecture, into a more simple, intuitive and easier to implement
            sitemap.
          </Text>
        </div>
      </Section>
      <FullscreenImage src={Sitemap} alt="Site map" />

      <Section>
        <Headline size="36">
          <No>A.</No>Ideate, Iterate
        </Headline>
        <div>
          <Title>Paper sketches</Title>
          <Text>
            Using insights gathered from User research I started to sketch the flows of the app
            using pencil and paper. During this phase I started sketching out possible solutions to
            be able to quickly see which idea would work best, using a mobile-first approach.
          </Text>
          <FullscreenImage src={PaperSketch} alt="Paper sketch" />
          <Caption>Early Paper Sketches & Potential solutions</Caption>
          <FullscreenImage src={LofiWireframe} alt="Lo-fi wireframe" />
          <Caption>Lo-Fi Wireframes of the Search Flow</Caption>
        </div>
      </Section>

      <Section>
        <Headline size="36">
          <No>B.</No>Prototype, Test, Validate
        </Headline>
        <div>
          <Title>Usabilitity test setup</Title>
          <Text>
            In order to get insights into the usefulness, usability, and desirability of the core
            functionalities of Ink Tank I created a prototype of the app using Invision and a
            usability test plan. <b>I moderated six usability tests, both in-person and remote.</b>{' '}
            Included in my usability test plan were demographic information, background and scenario
            tasks.
          </Text>
        </div>
      </Section>
      <FullscreenImage src={UsabilityTest} alt="Usability Test" />
      <Section>
        <div></div>
        <div>
          <Title>Tested Functionalities</Title>
          <Text italic>
            1. Mark a tattoo design as favourite
            <br />
            2. Book an appointment
            <br />
            3. Search for a tattoo design/artist
            <br />
          </Text>
          <Img src={ScreenFav} alt="Mark as favorite screen" />
          <Caption>Mark as favorite screen</Caption>
          <FullscreenImage src={ScreenBook1} alt="Book appointment screens" />
          <Img src={ScreenBook2} alt="Book appointment screens" />
          <Caption>Book appointment screens</Caption>
        </div>
      </Section>

      <Column light>
        <Title spaced>Usability Test Results</Title>
        <Box>
          <Column blue>
            <Text>
              Heart icon was used to mark designs as a favourite instead of the SAVE button.
            </Text>
          </Column>
          <Column blue>
            <Text>Users found the SEARCH functionality intuitive to use.</Text>
          </Column>
          <Column blue>
            <Text>Users found it confusing to BOOK an appointment.</Text>
          </Column>
          <Column blue>
            <Text>User will always look for known patterns from other apps they use</Text>
          </Column>
        </Box>
      </Column>

      <Section>
        <Headline size="36">
          <No>C.</No>Iterative Solutions
        </Headline>
        <div>
          <Title>01. Replace the SAVE button with the Heart icon​</Title>
          <Text>
            For the first usability issue, I noticed that test participants completely ignored the
            SAVE button. When asked why in the follow-up questions session, all of them mentioned
            the same thing:{' '}
            <b>
              "I am used to Instagram heart icon, I use that when I like something and I assumed it
              works the same way."
            </b>
          </Text>
          <Title>02. Strikethrough the Booked appointments</Title>
          <Text>
            The second usability issue proved to be more challenging, so I had to iterate several
            times until I came up with the idea of a strikethrough. When tested again with the users
            they all said:{' '}
            <b>"The strikethrough really catches my eye, it's impossible to miss it."</b>
          </Text>
          <Title>03. Perform additional A/B testing</Title>
          <Text>
            To make the solution No. 2 even more intuitive, I gathered an extra round of feedback
            from fellow designers and came up with <b>the calendar & slot picker</b> in one screenn
            for the last iteration. I performed a new A/B testing with the users, and{' '}
            <b>17 out of 19 participants gave positive feedback about the screen.</b>
          </Text>
        </div>
      </Section>

      <Section>
        <Headline size="36">
          <No>07.</No>Polished Mockups
        </Headline>
      </Section>
      <FullscreenImage src={PolishedDesign} alt="Hi-Fi Wireframes of the Search Flow" />
      <Caption>Hi-Fi Wireframes of the Search Flow</Caption>

      <Section light>
        <Headline size="36">LESSONS LEARNED</Headline>
        <div>
          <Title>This project left me with great and insights. Here's what I learned:</Title>
          <h4>01</h4>
          <Title>Get out of your comfort zone</Title>
          <Text>
            Designing for an industry in which I had 0 knowledge prior to taking the project was
            definitely one big challenge, which taught me a lot. It asked me to try to put myself in
            user's shoes and empathize with their challenges and struggles, with the indecision and
            fear they go through.
          </Text>
          <h4>02</h4>
          <Title>Avoid going straight to the solution​</Title>
          <Text>
            The hardest thing about this project was avoid thinking straight into solutions. I
            assumed most people use mobile devices when looking for inspiration and that was simply
            not true. During the research, I found out how I was wrong and I had to think about how
            to make the app available on multiple devices, starting with a mobile-first approach.
          </Text>
          <h4>03</h4>
          <Title>Iterate, iterate, iterate</Title>
          <Text>
            As often as possible, and as much as possible. I believe it's important to give yourself
            the space to try out different variations of the same idea or different ideas. This not
            only helps with sharpening the skills, but it helped me get out of my own way. 
          </Text>
        </div>
      </Section>

      <NextProject to="/work/security" />
    </Content>
  </Layout>
)
