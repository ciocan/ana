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

export const AboutContainer = styled.div`
  margin-bottom: 100px;
`

export const Avatar = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 240px;
  float: right;
  display: block;
  margin-left: 160px;
  margin-bottom: 40px;

  ${down('md')} {
    width: 120px;
    height: 120px;
    margin-left: 30px;
    margin-bottom: 30px;
  }
`

export const Title = styled.h1`
  font-family: Georgia;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ size }) => size || '2.25rem'};
  align-items: center;
  margin-bottom: 40px;
  color: ${({ color }) => color || '#fff'};

  ${down('md')} {
    font-size: 1.5rem;
    line-height: 42px;
  }
`

export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 32px;
`

export const Text = styled.p`
  font-style: normal;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-size: 1.125rem;
  letter-spacing: 0.5px;

  ${down('sm')} {
    font-size: 1rem;
  }
`

export const Chapter = styled.h3`
  font-size: 64px;
  line-height: 61px;
  margin-left: 120px;
  color: #c5cfd6;
  font-family: Georgia;

  ${down('md')} {
    font-size: 36px;
    line-height: 30px;
    margin-left: 0px;
  }
`

export const Process = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & ${Title} {
    font-family: 'Nunito Sans', sans-serif;
    text-transform: uppercase;
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

export const ImageContainer = styled.div`
  padding: 0 20px;
  margin-top: -20px;
`
