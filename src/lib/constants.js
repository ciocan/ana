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
    name: 'Home page',
    path: '/',
    extra: { gridArea: 'logo', isHome: true, justifySelf: 'left' },
  },
  {
    text: 'Work',
    name: 'Work portfolio',
    path: '/#work',
    extra: { gridArea: 'work', justifySelf: 'right' },
  },
  {
    text: 'About',
    name: 'About me',
    path: '/about',
    extra: { gridArea: 'about', justifySelf: 'right' },
  },
  {
    text: 'Contact',
    name: 'Contact details',
    path: '#contact',
    extra: { icon: <EmailStyled />, gridArea: 'contact', justifySelf: 'right' },
  },
]
