import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const Headline = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 7vmin;
  line-height: 0.9em;
  letter-spacing: 0.04em;
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
  /* border: 1px solid red; */

  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  ${down('md')} {
    padding: 40px;
    width: 100%;
    /* border: 1px solid green; */
  }

  ${down('sm')} {
    padding: 20px;
    width: 100%;
  }
`
