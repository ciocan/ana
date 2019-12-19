import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 160px;

  ${down('md')} {
    grid-template-columns: 1fr;
    grid-gap: 0;
    margin-bottom: 120px;
  }
`

export const Title = styled.h1`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 2.25rem;
  align-items: center;
  margin-bottom: 40px;

  ${down('md')} {
    font-size: 1.375rem;
    line-height: 42px;
  }
`

export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 32px;
`

export const Text = styled.p`
  font-style: normal;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: 1.25rem;
  letter-spacing: 0.5px;

  ${down('sm')} {
    font-size: 1rem;
  }
`

export const Chapter = styled.h3`
  font-size: 64px;
  line-height: 61px;
  margin-left: 120px;

  ${down('md')} {
    font-size: 36px;
    line-height: 30px;
    margin-left: 0px;
  }
`

export const Process = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & ${Title} {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 2rem;
    margin-bottom: 0;

    ${down('md')} {
      font-size: 2.5rem;
    }

    ${down('sm')} {
      font-size: 2rem;
    }
  }

  & svg {
    width: 100%;
    margin-top: -40px;

    ${down('md')} {
      margin-top: 0px;
    }

    ${down('sm')} {
      height: 80vw;
    }
  }
`
