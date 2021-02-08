import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Fb } from './components/Fb'
import { StartPage } from './components/StartPage'
import { SectionLinks } from './components/SectionLinks'
import { Meny } from './components/Meny'
import { Contact } from './components/Contact'

export const Home = () =>{

  return (
    <BrowserRouter>
      <HomeSection >
        <BiggestScreen>
        <Header />
        <SectionLinks />
        </BiggestScreen>
        <ScreenSize>
          <Switch>
            <Route path='/' exact>
              <StartPage />
            </Route>
            <Route path='/menue'>
              <Meny />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>
          <FbSection>
            <Fb />
          </FbSection>
        </ScreenSize>
      </HomeSection>
    </BrowserRouter>
  )
} 

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
`
const BiggestScreen = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 2%;
  }
`
const ScreenSize = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    flex-direction: row;
    width: 100%;
  }
`
const FbSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 668px) {
    margin-right: 8px;
    margin-top: 12px;
  }
`