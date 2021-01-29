import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

export const Header = () => {

  return (
    <HeaderSection>
      <ImageContainer>
        <Image src={logo} alt='Strandkanten logo'/>
      </ImageContainer>
      <HeaderHeading>Strandkanten</HeaderHeading>
    </HeaderSection>

  )
}

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
`
const ImageContainer = styled.div`
  display: flex;
  padding: 5%;
`
const Image = styled.img`
  height: auto;
  width: 100%;
`
const HeaderHeading = styled.h1`
  display: none;
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
`