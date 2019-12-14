import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const Image = styled.img`
  width: 360px;
`

export const ImageContainer = styled.div`
  width: 480px;
  height: 480px;
  margin-right: -160px;
  margin-top: -20px;
  float: right;

  ${down('md')} {
    display: none;
  }
`
