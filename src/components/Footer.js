import React from 'react'
import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare'
import { FilePdf } from 'styled-icons/boxicons-solid/FilePdf'

export const Footer = () => (
  <a id="contact">
    <Container>
      <Title>
        Curious to see more projects?
        <br />
        Get in touch.
      </Title>
      <ContactContainer>
        <Text>
          <h1>Contact</h1>
          <h2>‭+44 7388 731 630‬</h2>
          <h2>
            <a href="mailto:hello@anastate.com">hello@anastate.com</a>
          </h2>
        </Text>
        <Text>
          <h1>Resume</h1>
          <Links>
            <a
              href="https://www.linkedin.com/in/anastate/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Linkedin Profile"
            >
              <LinkedinIcon />
            </a>
            <a
              href="Senior_Product Designer_Resume_Ana_State.pdf"
              target="_blank"
              aria-label="PDF Resume"
            >
              <PdfIcon />
            </a>
          </Links>
        </Text>
      </ContactContainer>
      <Copy>&copy; Ana State 2019</Copy>
    </Container>
  </a>
)

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 50px;
  margin-top: 30px;

  ${down('sm')} {
    margin-bottom: 30px;
  }
`

const Text = styled.div`
  ${up('sm')} {
    margin: 0 80px;
  }

  ${up('md')} {
    margin: 0 40px;
  }

  & h1 {
    font-size: 1.6rem;

    ${down('sm')} {
      font-size: 1.2rem;
    }
  }

  & h2 {
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1rem;

    ${down('sm')} {
      font-size: 1rem;
    }
  }
`

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  background: white;
  color: #2f4858;
  padding: 20px;
  flex-shrink: 0;
  padding-bottom: 40px;
  padding-top: 40px;

  ${down('sm')} {
    margin-top: 5rem;
    padding-bottom: 30px;
    padding-top: 20px;
  }
`

const Title = styled.h3`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 3rem;
  display: flex;
  align-items: center;
  text-align: center;

  ${down('md')} {
    font-size: 2rem;
    line-height: 3rem;
  }

  ${down('sm')} {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`

const LinkedinIcon = styled(LinkedinSquare)`
  width: 42px;
  color: #2f4858;
`

const PdfIcon = styled(FilePdf)`
  width: 42px;
  color: #2f4858;
`

const Copy = styled.p`
  ${down('sm')} {
    font-size: 0.8rem;
  }
`
