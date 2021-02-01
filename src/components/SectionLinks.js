import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SectionLinks = () => {

  return (
    <LinkContainer>
      <StyledLink to={'/'}>Hem</StyledLink>
      <StyledLink to={'/menue'}>Meny</StyledLink>
      <StyledLink to={'/contact'}>Kontakt</StyledLink>
    </LinkContainer>
  )
}

const LinkContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const StyledLink = styled(NavLink)`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  text-decoration: none;
  color: white;
  font-size: 20px;
  background: #d00115;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 1px black;
`