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
  font-size: 64px;
  line-height: 64px;
  align-items: center;
  margin-bottom: 40px;

  ${down('md')} {
    font-size: 36px;
    line-height: 42px;
  }
`

export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`

export const Text = styled.p`
  font-style: normal;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.5px;
`

export const Chapter = styled.h3`
  font-size: 72px;
  line-height: 61px;
  margin-left: 120px;

  ${down('md')} {
    font-size: 36px;
    line-height: 30px;
    margin-left: 0px;
  }
`

export const Process = styled.div`
  /* border: 1px solid red; */
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & ${Title} {
    font-size: 48px;

    ${down('md')} {
      font-size: 36px;
    }
  }

  & ${Subtitle} {
    font-size: 32px;

    ${down('md')} {
      font-size: 24px;
    }
  }

  & svg {
    width: 100%;

    ${down('sm')} {
      height: 80vw;
    }
  }
`
