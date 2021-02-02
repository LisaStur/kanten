import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Fb } from './components/Fb'
import { StartPage } from './components/StartPage'
import { SectionLinks } from './components/SectionLinks'
import { Menue } from './components/Menue'

export const Home = () =>{

  return (
    <BrowserRouter>
      <HomeSection >
        <Header />
        <SectionLinks />
        <ScreenSize>
          <Switch>
            <Route path='/' exact>
              <StartPage />
            </Route>
            <Route path='/menue'>
              <Menue />
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
    margin-right: 2%;
    margin-top: 5%;
  }
`