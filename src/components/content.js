import styled from 'styled-components'
import { down } from 'styled-breakpoints'

export const Headline = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 74px;
  display: flex;
  align-items: center;

  ${down('lg')} {
    font-size: 64px;
  }

  ${down('md')} {
    font-size: 42px;
  }

  ${down('sm')} {
    font-size: 36px;
  }
`

export const Subhead = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  display: flex;
  align-items: center;

  ${down('lg')} {
    font-size: 48px;
  }

  ${down('md')} {
    font-size: 36px;
  }

  ${down('sm')} {
    font-size: 28px;
  }
`

export const Content = styled.div`
  padding: 1rem 0;
  width: 75%;
  padding-bottom: 0.5rem;
  margin: 0;
  box-sizing: border-box;

  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  ${down('lg')} {
    width: 80%;
  }

  ${down('sm')} {
    padding: 1rem 2rem;
    font-size: 0.9rem;
    width: 100%;

    ${({ padding }) => padding && `padding: ${padding}`};
    ${({ margin }) => margin && `margin: ${margin}`};
  }
`
