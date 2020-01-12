import { withRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'
import * as gtag from '~lib/gtag'
import { NavItem } from './NavBarItem'

function _NavBar({ children, items, router }) {
  useEffect(() => {
    gtag.pageview(router.pathname)
  })
  // TODO fix menu highlight

  return (
    <Nav>
      <List>
        {items.map(item => (
          <NavItem
            {...item}
            isSelected={
              (router.pathname.includes(item.path) && !item.extra.isHome) ||
              (item.extra.isHome && router.pathname === '/')
            }
            key={item.path}
          />
        ))}
      </List>
      {children}
    </Nav>
  )
}

export const NavBar = withRouter(_NavBar)

const Nav = styled.nav`
  display: flex;
  position: fixed;
  background: #2f4858;
  z-index: 10;
  right: 0;
  left: 0;

  ${down('sm')} {
    height: 80px;
    margin-bottom: 60px;
  }
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  padding: 20px 40px;
  justify-content: flex-end;

  ${down('sm')} {
    padding: 20px;
    align-items: center;
  }
`
