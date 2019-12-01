import React from 'react'
import styled from 'styled-components'
import { Email } from 'styled-icons/material/Email'

const EmailStyled = styled(Email)`
  color: white;
  width: 28px;
`

export const navigationPages = [
  {
    text: 'A.',
    path: '/',
    extra: { gridArea: 'logo', isHome: true, justifySelf: 'left' },
  },
  // {
  //   text: 'Work',
  //   path: '/work',
  //   extra: { gridArea: 'work', justifySelf: 'right' },
  // },
  {
    text: 'About',
    path: '/about',
    extra: { gridArea: 'about', justifySelf: 'right' },
  },
  {
    text: 'Contact',
    path: '#contact',
    extra: { icon: <EmailStyled />, gridArea: 'contact', justifySelf: 'right' },
  },
]
