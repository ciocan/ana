import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const Headline = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 7vmin;
  line-height: 0.5em;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
`

export const Subhead = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 5vmin;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
`

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
