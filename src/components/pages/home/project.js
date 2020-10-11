import React from 'react'
import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'
import Arrow from '~icons/arrow-right.svg'

export const Project = ({ icon, color, title, year, type, children, link = '#' }) => (
  <Container color={color}>
    <IconContainer>{icon}</IconContainer>
    <ContentContainer>
      <Type>{type}</Type>
      <Title>{title}</Title>
      <Content>{children}</Content>
      <Link href={link}>
        See project <ArrowIcon />
      </Link>
    </ContentContainer>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 0px 80px;
  color: #070e55;

  :hover {
    transform: scale(1.02);
    transition: all 0.1s ease-in-out;
  }

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}

  ${down('lg')} {
    flex-direction: column;
  }

  ${down('md')} {
    flex-direction: column;
    padding: 40px 40px;
  }

  ${down('sm')} {
    padding: 0;
    margin-bottom: 40px;
  }
`

const IconContainer = styled.div`
  display: flex;
  width: 40%;
  overflow: hidden;

  ${down('lg')} {
    width: auto;
    justify-content: center;
  }

  ${down('md')} {
    padding: 20px;
  }

  ${down('sm')} {
    padding: 40px;

    svg {
      height: 80vw;
    }
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 50%;
  justify-content: center;

  ${down('lg')} {
    width: auto;
    margin-left: 0;
    padding-top: 0;
  }

  ${down('sm')} {
    color: white;
    background: #2f4858;
    padding-top: 10px;
  }
`

const Title = styled.h2`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.3rem;
  margin: 0;
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;

  ${down('sm')} {
    font-size: 1.6rem;
  }
`

const Type = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  letter-spacing: -0.03em;
  margin: 0;

  ${down('sm')} {
    font-size: 1rem;
  }
`
const Content = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.375rem;
  line-height: 1.75rem;
  margin: 0;

  ${down('sm')} {
    font-size: 20px;
    margin: 30px 0;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  color: #070e55;
  text-decoration: none;
  margin-top: 3.75rem;
  border: 1px solid #070e55;
  border-radius: 65px;
  padding: 10px 20px;
  width: 140px;

  & :hover {
    font-weight: bold;
    border: 2px solid #070e55;
  }

  ${down('lg')} {
    font-size: 28px;

    svg {
      height: 22px;
    }
  }

  ${down('md')} {
    width: 400px;
  }

  ${down('sm')} {
    color: #fff;
    font-size: 1.2rem;
    width: auto;
    border: 1px solid #fff;
    padding: 20px;
    width: 60%;

    & :hover {
      font-weight: bold;
      border: 2px solid #fff;
    }
  }
`

const ArrowIcon = styled(Arrow)`
  width: 1.1rem;

  ${down('sm')} {
    width: 28px;

    & path {
      fill: #fff;
    }
  }
`
