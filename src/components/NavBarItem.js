import React from 'react'
import { get } from 'lodash'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { down } from 'styled-breakpoints'

export const NavItem = ({ text, path, isSelected, extra }) => (
  <ListItem extra={extra}>
    <Link href={path} as={path}>
      <A href={path} isSelected={isSelected} extra={extra}>
        {extra && extra.icon}
        <span>{text}</span>
      </A>
    </Link>
  </ListItem>
)
const ListItem = styled.li`
  margin-right: ${({ extra }) => (get(extra, 'isHome') ? 'auto' : 0)};
  margin-left: ${({ extra }) => (get(extra, 'isHome') ? 0 : '40px')};
`
const A = styled.a`
  display: flex;
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
        display: inline-block;
        font-size: 36px;
      }
    `}

  ${({ extra }) =>
    get(extra, 'icon') &&
    css`
      & svg {
        display: none;
      }

      ${down('sm')} {
        & span {
          display: none;
        }

        & svg {
          display: block;
        }
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
