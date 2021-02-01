import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Fb } from './components/Fb'
import { StartPage } from './components/StartPage'
import { SectionLinks } from './components/SectionLinks'

export const Home = () =>{

  return (
    <BrowserRouter>
    <HomeSection  >
      <Header />
      <SectionLinks />
      <ScreenSize>
      <Switch>
        <Route path='/'>
          <StartPage />
          <FbSection>
            <Fb />
          </FbSection>
        </Route>
      </Switch>
      </ScreenSize>
    </HomeSection>
    </BrowserRouter>
  )
} 

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
`
const ScreenSize = styled.section`
display: flex;
flex-direction: column;

@media (min-width: 668px) {
  flex-direction: row;
}
`
const FbSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 668px) {
    align-items: flex-end;
    padding-right: 2%;
    margin-top: 32px;
  }
`