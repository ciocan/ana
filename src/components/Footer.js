import React from 'react'
import styled from 'styled-components'
import { down, up } from 'styled-breakpoints'

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
            <a href="mailto:hello@anastate.com" target="_blank">Contact me</a>
        </Text>
      </ContactContainer>

      <BottomContainer>
        <Copy>&copy; Ana State 2019</Copy>
        <Links>
          <a
            href="https://www.linkedin.com/in/anastate/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Linkedin Profile"
          >
            Linkedin
          </a>

          <a href="mailto:hello@anastate.com" target="_blank">Email</a>
          <a
            href="Senior_Product Designer_Resume_Ana_State.pdf"
            target="_blank"
            aria-label="PDF Resume"
          >
          Resume
          </a>
        </Links>
        </BottomContainer>
    </Container>
  </a>
)

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
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
    margin: 40px 40px;
  }

  a {
    border: 1px solid white;
    color: white;
    text-decoration: none;
    padding: 22px 55px;
    border-radius: 65px;
  }

  a:hover {
    font-weight: bold;
    border: 2px solid white;
  }
`

const BottomContainer = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
  min-width: 100%;
  box-sizing: border-box;
  margin-top: 100px;

  ${up('md')} {
    padding: 0 140px;
  }

  ${down('sm')} {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
  }

  a:after {
    content: "";
    display: inline-block;
    margin: 0 15px;
    margin-bottom: 2px;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: #C6C6CC;
  }

  a:last-child:after {
    content: none;
  }

  ${down('sm')} {
    margin-bottom: 40px;
  }
`

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  background: white;
  color: white;
  background-color: #2f4858;
  padding: 20px;
  padding-bottom: 40px;
  padding-top: 140px;

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

const Copy = styled.p`
  ${down('sm')} {
    font-size: 0.8rem;
  }
`
