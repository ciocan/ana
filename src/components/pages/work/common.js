import React from 'react'
import styled, { css } from 'styled-components'
import FullscreenImage from '~components/FullscreenImage'
import { up, down } from 'styled-breakpoints'

export const Intro = styled.div`
  background-color: ${props => props.color};
  color: #070e55;
  padding: 40px;
  position: relative;
  min-height: 440px;
  margin-bottom: 140px;

  ${down('md')} {
    padding: 40px;
    min-height: auto;
  }

  ${down('sm')} {
    padding: 20px;
    margin-bottom: 40px;
  }
`

export const Illustration = styled.div`
  width: 480px;
  height: 480px;
  margin-right: -100px;
  margin-top: 80px;
  float: right;

  ${down('md')} {
    display: none;
  }
`

export const Headline = styled.h1`
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

export const Title = styled.h2``

export const Text = styled.p`
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.5px;
  padding-bottom: 20px;
`

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-bottom: 100px;

  ${down('sm')} {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-bottom: 40px;
  }
`

export const Column = styled.div``

export const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 60px;
  padding: 40px;
  margin-bottom: 40px;

  & h4 {
    position: relative;
    font-weight: normal;
    top: 15px;
  }

  ${up('lg')} {
    & h1 {
      font-size: 36px;
    }
  }

  ${({ light }) =>
    light &&
    css`
      background-color: #f1f1e6;
      color: #070e55;
    `}

  ${down('sm')} {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 20px;
  }
`

export const No = styled.p`
  color: #787f8d;
  font-size: 36px;
  line-height: 56px;
  margin: 0;
`

export const Image = styled(FullscreenImage)`
  margin-bottom: 30px;
`

export const Foot = styled.div`
  color: #949aaa;
  font-style: italic;
  border-top: 1px solid #070e55;
  padding-top: 30px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  grid-gap: 40px;
  margin-bottom: 40px;

  ${({ right }) =>
    right &&
    css`
      grid-template-columns: 1fr 2fr;
      color: #070e55;
    `}

  ${down('sm')} {
    grid-template-columns: 1fr;
    grid-gap: 0px;

    & svg {
      display: none;
    }
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li {
    padding: 20px;
    margin-bottom: 40px;
    background-color: ${({ color }) => color};
  }
`

export const ListContainer = styled.div`
  margin-top: 100px;

  & h1 {
    font-size: 36px;
    text-align: ${({ right }) => (right ? 'right' : 'left')};
  }

  ${down('sm')} {
    margin-top: 80px;

    & h1 {
      font-size: 24px;
      text-align: left;
    }
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  ${down('sm')} {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`
