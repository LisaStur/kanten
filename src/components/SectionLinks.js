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

  @media (min-width: 668px) {
    justify-content: flex-end;
    margin: 0 2% 0 0;
  }

  @media (min-width: 1024px) {
    align-items: center;
    margin: 48px 2px 0 0;
  }
`
const StyledLink = styled(NavLink)`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  text-decoration: none;
  color: white;
  font-size: 16px;
  background: #d00115;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 1px black;
  margin: 1%;

  @media (min-width: 1024px) {
    margin: 2%
  }

  &:hover {
    box-shadow: 4px 4px 2px black;
  }

  &:active {
    box-shadow: 1px 1px 0 black;
  }
`