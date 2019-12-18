import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import Arrow from '~icons/arrow-right.svg'

export const Content = styled.div`
  position: relative;
  padding: 1rem 0;
  max-width: 1040px;
  padding: 40px;
  padding-bottom: 0.5rem;
  margin: 0;
  box-sizing: border-box;

  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  ${down('md')} {
    padding: 40px;
    width: 100%;
  }

  ${down('sm')} {
    padding: 20px;
    width: 100%;
  }
`

export const NextProject = ({ to }) => (
  <Link href={to}>
    <LinkTest>See next project</LinkTest>
    <ArrowIcon />
  </Link>
)

const Link = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  border: 1px solid white;
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
  width: 360px;
  margin: 0 auto;
  margin-top: 100px;

  & :hover {
    border: 2px solid white;
    font-weight: bold;
  }

  ${down('sm')} {
    width: auto;
    font-size: 1.2rem;
    padding: 10px;
    margin-top: 40px;
  }
`

const LinkTest = styled.span``

const ArrowIcon = styled(Arrow)`
  right: 30px;
  width: 45px;

  margin-left: 30px;
  & path {
    fill: #fff;
  }

  ${down('sm')} {
    width: 35px;
  }
`
