import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const Box = styled.div`
  background-color: ${props => props.color};
  color: #070e55;
  padding: 40px;

  ${down('md')} {
    padding: 20px;
  }
`

export const Title = styled.h1`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 44px;
  align-items: center;
  margin-bottom: 40px;

  ${down('md')} {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 20px;
  }
`

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;

  ${down('md')} {
    font-size: 24px;
    line-height: 32px;
  }
`

export const Text = styled.p`
  font-style: normal;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.5px;
`
