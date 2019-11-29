import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import Arrow from '~icons/arrow-down.svg'

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  min-width: 200px;
  display: flex;

  ${down('lg')} {
    display: none;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div`
  width: 860px;
  margin-right: 40px;

  ${down('lg')} {
    margin-right: 0;
  }
`

export const Description = styled.p`
  font-size: 48px;
  line-height: 74px;
  color: #ffffff;

  ${down('lg')} {
    font-size: 36px;
    line-height: 54px;
  }

  ${down('sm')} {
    font-size: 28px;
    line-height: 42px;
  }
`

export const B = styled.span`
  font-weight: bold;
`

export const Explore = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 40px;
  padding: 40px;
  border: 2px solid white;

  ${down('sm')} {
    padding: 20px;
  }
`

export const ExploreText = styled.span`
  letter-spacing: 0.16em;
  text-transform: capitalize;
  font-size: 36px;
  margin-right: 20px;

  ${down('sm')} {
    font-size: 18px;
  }
`

export const ArrowIcon = styled(Arrow)`
  ${down('sm')} {
    width: 24px;
    height: 24px;
  }
`

export const Projects = styled.div`
  margin-top: 360px;

  ${down('sm')} {
    margin-top: 80px;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 42px;
  line-height: 40px;
  display: flex;
  align-items: center;
  letter-spacing: 0.16em;
  text-transform: capitalize;
  margin-bottom: 80px;

  ${down('sm')} {
    font-size: 24px;
    line-height: 24px;
  }
`
