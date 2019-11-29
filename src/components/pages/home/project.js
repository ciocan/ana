import React from 'react'
import styled, { css } from 'styled-components'
// import { down } from 'styled-breakpoints'
import Arrow from '~icons/arrow-right.svg'

export const Project = ({ icon, color, title, year, type, children, link = '#' }) => (
  <Container color={color}>
    <IconContainer>{icon}</IconContainer>
    <ContentContainer>
      <Year>{year}</Year>
      <Title>{title}</Title>
      <Type>{type}</Type>
      <Content>{children}</Content>
      <Link href={link}>
        See Process <ArrowIcon />
      </Link>
    </ContentContainer>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 40px 120px;
  color: #070e55;
  margin-bottom: 130px;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`

const IconContainer = styled.div`
  display: block;
`

const ContentContainer = styled.div`
  margin-left: 120px;
`

const Title = styled.h2`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 60px;
`
const Year = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`
const Type = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 45px;
  letter-spacing: -0.03em;
`
const Content = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: -0.03em;
`

const Link = styled.a`
  display: flex;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  letter-spacing: 0.16em;
  text-transform: capitalize;
  color: #070e55;
  text-decoration: none;
`

const ArrowIcon = styled(Arrow)`
  margin-left: 40px;
`
