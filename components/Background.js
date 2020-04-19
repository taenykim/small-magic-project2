import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const BackgroundContainer = styled.div`
  display: flex;
  padding-top: 32px;
  width: 100vw;
  background: #f5f6f7;
`

const FixedGithub = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  margin: 6px;

  & > img {
    filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(60%);
    cursor: pointer;
  }
`

const Background = ({ children }) => {
  return (
    <>
      <BackgroundContainer>
        <a href="https://github.com/taenykim/small-magic-project" target="_blank">
          <FixedGithub>
            <img src="./github.png" width="28" height="28" />
          </FixedGithub>
        </a>
        <Header></Header>
        {children}
      </BackgroundContainer>
    </>
  )
}

export default Background
