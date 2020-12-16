import { Meta } from '@components'
import { Heading, Text, Grid, VStack, Image, Divider } from '@chakra-ui/core'

import { Content, NextProject } from '@components/work'

export default function WebIntegration() {
  return (
    <>
      <Meta title="Technical Product Designer | Ana State" />
      <VStack
        maxW="1000px"
        mx="auto"
        mt={['80px', '150px']}
        // bg="lightBg"
        alignItems="flex-start"
        p={[4, 16]}
      >
        <Grid columns={[1, 3]} spacing={[2, 4]} templateColumns="1fr 1.5fr 2.5fr">
          <VStack alignItems="flex-start">
            <Text color="red" textTransform="uppercase">
              Year
            </Text>
            <Text>2020</Text>
          </VStack>
          <VStack alignItems="flex-start">
            <Text color="red" textTransform="uppercase">
              Deliverables
            </Text>
            <Text>UX</Text>
            <Text>Visual Design</Text>
            <Text>Creative Direction</Text>
            <Text>Development</Text>
            <Text>3D Illustration</Text>
            <Text color="red" textTransform="uppercase" pt="4">
              Team
            </Text>
            <Text>UX Designer</Text>
            <Text>Project manager</Text>
            <Text>Product Owner</Text>
            <Text>2 Front-end devs</Text>
          </VStack>
          <VStack>
            <Heading variant="project" mb="4">
              A web app that makes on-demand pay accesible to everyone
            </Heading>
            <Text>
              A project focused on building a web app that integrated Earnd mobile app and a Payroll
              provider app in one seamless flow.
            </Text>
          </VStack>
        </Grid>

        <Image src="/images/work/web-integration-1.jpg" alt="mobile app" />
        <Content title="The challenge">
          <Text>
            The challenge of the project was to integrate Earnd native app & a Payroll provider app
            into a web view <b>using</b> the <b>payroll</b> provider app as a gateway to drive{' '}
            <b>user acquisition</b> for Earnd.
          </Text>
        </Content>
        <Image src="/images/work/web-integration-2.jpg" alt="integration" />
        <Content title="Who’s aimed at">
          <Heading variant="small">On-demand pay</Heading>
          <Text>
            <b>Earnd app</b> is a financial service built for employers and employees alike. It
            allows employers to give employees control over their finanances and access their earned
            pay anytime throughout the month.
          </Text>
        </Content>
        <Content title="How I helped">
          <Heading variant="small">Start with WHY</Heading>
          <Text>
            My role was to asses both the Earnd native app and the Payroll provider app, and to
            design a web app that met the challenge of achieving parity with the native app and
            driving user aquisition for Earnd.
          </Text>
        </Content>
        <Content title="UX Process">
          <Heading variant="small">Mapping the “as-is” User Journey</Heading>
          <Text mb="4">
            Kicking off the project with a discovery session to map the “as-is” journey, helped the
            both Earnd and client teams understand how the native registration flow translates into
            a web interface, as well to identify possible user pain points, and API integration
            opportunities.
          </Text>
          <Text>
            This step helped us build fast, user test and iterate, ensuring better collaboration and
            visibility.
          </Text>
        </Content>
        <Image mb="16" src="/images/work/web-integration-3.jpg" alt="integration" />
        <Image src="/images/work/web-integration-4.jpg" alt="Original registration flow" />
        <Text mb="16" variant="caption">
          Original registration flow
        </Text>
        <Content title="Optimise the registration flow">
          <Heading variant="small">Evaluating journey mapping results</Heading>
          <Text mb="4">
            According to the mapping session data, we realized we can optimise the registration flow
            by introducing backend APIs to parse the customer data from the Payroll provider flow to
            Earnd, thus eliminating redundant screens.
          </Text>
          <Text>
            I iterated on the improved onboarding experience and conducted{' '}
            <b>10 usability testing sessions, 45 mins / participant.</b>
          </Text>
        </Content>
        <Image src="/images/work/web-integration-5.jpg" alt="Optimised registration flow" />
        <Text mb="16" variant="caption">
          Optimised registration flow
        </Text>
        <Content title="Evaluating usability testing">
          <Heading variant="small">Test results</Heading>
          <Text mb="4">The preliminary user testing data showed that:</Text>
          <Text>
            A. <b>4/5</b> users perceived Earnd tile as an <b>ad</b>, and they would most likely
            ignore the tile
            <br />
            B. <b>5/5</b> users expect Earnd would already have their bank account data as it’s a
            functionality provided via the Payroll provider app.
            <br />
            C. <b>5/5</b> users don’t understand this is an IDV security check, text is not clear.
          </Text>
        </Content>
        <Image mb="4" src="/images/work/web-integration-6.jpg" alt="Evaluating usability testing" />
        <Image src="/images/work/web-integration-5.jpg" alt="Optimised registration flow" />
        <Text variant="caption">Optimised registration flow</Text>
      </VStack>

      <VStack maxW="1000px" mx="auto" alignItems="flex-start" p={[4, 16]}>
        <Content title="Rebranding the app visual design">
          <Text mb="4">
            Earnd is a global app, hence its design had to be aligned across UK, US and AUS markets.
            This required a rebranding from visual perspective to ensure consistency across the
            product, raising customer awareness and make the brand easily recognizable.
          </Text>
          <Text>
            The design team worked closely with a branding team exploring possible visual design
            directions that would enable us to develop a muted colour palette evoking a trustworthy
            feeling, reliability and stability.
          </Text>
        </Content>
        <Image
          mb="16"
          src="/images/work/web-integration-7.jpg"
          alt="Rebranding the app visual design"
        />
        <Content title="Retrospective">
          <Heading variant="small">Noteworthy insights</Heading>
          <Text mb="4">
            As eSecurity is part of a complex apps ecosystem, it’s important to understand how its
            implementation affects other areas across product.
          </Text>
          <Text>
            The client needed a fast and reliable onboarding process, while the Legal team had the
            goal of security compliance. I achieved both by relying heavily on design principles:
            one action per screen, recognizable icons and clear naming conventions.
          </Text>
          <Text>
            On the technical side, API & backend implementation created the versatility required to
            process the customer data, while obeying the PSD2 directive.
          </Text>
        </Content>
        <Divider py="8" />
        <NextProject title="Design system" url="/work/design-system" />
      </VStack>
    </>
  )
}
