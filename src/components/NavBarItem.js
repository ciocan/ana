import React from 'react'
import { get } from 'lodash'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'

export const NavItem = ({ text, path, isSelected, extra }) => (
  <ListItem extra={extra}>
    <Link href={path} as={path}>
      <A href={path} isSelected={isSelected} extra={extra}>
        {text}
      </A>
    </Link>
  </ListItem>
)
const ListItem = styled.li`
  margin-right: ${({ extra }) => (get(extra, 'isHome') ? 'auto' : 0)};
  margin-left: ${({ extra }) => (get(extra, 'isHome') ? 0 : '40px')};
`
const A = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;

  ${({ extra }) =>
    get(extra, 'isHome') &&
    css`
      font-family: 'Georgia', serif;
      font-weight: bold;
      font-size: 64px;

      ${down('sm')} {
        font-size: 36px;
      }
    `}

  font-weight: ${({ extra }) => (get(extra, 'isHome') ? 'bold' : 'normal')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};

  ${down('sm')} {
    text-align: center;
  }

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
