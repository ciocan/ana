import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'

function FullscreenImage({ src, className }) {
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullscreen = useCallback(() => setFullscreen(!fullscreen), [fullscreen])

  return (
    <Container fullscreen={fullscreen} onClick={toggleFullscreen} className={className}>
      <Img src={src} />
    </Container>
  )
}

export default FullscreenImage

const Container = styled.div`
  z-index: 10;

  ${({ fullscreen }) =>
    fullscreen &&
    css`
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.85);
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    `}
`

const Img = styled.img`
  position: relative;
  width: 100%;
  cursor: pointer;
`
