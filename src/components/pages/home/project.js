import React from 'react'
import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'
import Arrow from '~icons/arrow-right.svg'

export const Project = ({ icon, color, title, year, type, children, link = '#' }) => (
  <Container color={color}>
    <IconContainer>{icon}</IconContainer>
    <ContentContainer>
      <Title>{title}</Title>
      <Type>
        <b>{year}</b> | {type}
      </Type>
      <Content>{children}</Content>
      <Link href={link}>
        See Process <ArrowIcon />
      </Link>
    </ContentContainer>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 40px 80px;
  color: #070e55;
  margin-bottom: 130px;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}

  ${down('lg')} {
    flex-direction: column;
  }

  ${down('md')} {
    padding: 40px 40px;
  }

  ${down('sm')} {
    padding: 0;
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

  ${down('lg')} {
    width: auto;
    margin-left: 0;
  }

  ${down('sm')} {
    color: white;
    background: #2f4858;
  }
`

const Title = styled.h2`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;

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
  font-size: 24px;

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
  letter-spacing: 0.16em;
  text-transform: capitalize;
  color: #070e55;
  text-decoration: none;
  margin-top: auto;
  border: 1px solid #070e55;
  padding: 10px 20px;
  width: 220px;

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
  width: 2rem;

  ${down('sm')} {
    width: 28px;

    & path {
      fill: #fff;
    }
  }
`
