import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import Arrow from '~icons/arrow-down.svg'

export const HomeContainer = styled.div`
  max-width: 1400px;
  padding: 40px;

  ${down('sm')} {
    padding: 20px;
  }
`

export const Description = styled.p`
  font-size: 3vmax;
  letter-spacing: 0.1em;
`

export const Explore = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 40px;
  padding: 40px;
  border: 2px solid white;

  ${down('sm')} {
    display: flex;
    padding: 20px;
    justify-content: space-between;
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
  margin-top: 120px;

  ${down('sm')} {
    margin-top: 100px;
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
    font-size: 22px;
    line-height: 24px;
  }
`

export const Image = styled.img`
  width: 360px;
  height: 632px;
`
