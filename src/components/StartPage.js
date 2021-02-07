import React from 'react' 
import styled from 'styled-components'
import masar from '../assets/masar.jpg'
import masar2 from '../assets/masar2.jpg'

export const StartPage = () => {

  return (
    <StartPageSection>
      <StartPageTextBox>
        <StartPageHeader>Välkommen!</StartPageHeader>
        <StartPageText>Restaurang Strandkanten på Nordkoster erbjuder mat och dryck i en fantastisk miljö med 
          utomhusservering på bryggan eller inomhus i den mysiga sjöboden.
          Passa på att handla presenter till dig själv och andra i den välfyllda butiken.
        </StartPageText>
        <StartPageTextBiggerScreen>Restaurang Strandkanten har öppet under sommarhalvåret och drivs av Maria Wogenius 
          med familj tillsammmans med kollegor från öarna. Säsongen startar vid påsk och sträcker sig till och med hummerfisket i oktober.
          Under högsäsong är det öppet alla dagar medan vi för- och eftersäsong håller öppet på helgerna.
        </StartPageTextBiggerScreen>
        <StartPageSmallHeader>Öppettider:</StartPageSmallHeader>
        <StartPageText>
          För närvarande har vi vinterstängt. Vi håller tummarna för vaccinations- och Covid-läget och återkommer i vår!
        </StartPageText>
      </StartPageTextBox>
      <PageImageContainer>
        <PageImage src={masar} alt='Strandkantens brygga'/>
        <PageImageSmall src={masar2} alt='Strandkantens brygga'/> 
      </PageImageContainer>
    </StartPageSection>
  )
}

const StartPageSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 12px;
  background-color: rgba(100,100,130, 0.8);

  @media (min-width: 668px) {
    display: flex;
    flex-direction: row;
  }  
`
const StartPageTextBox = styled.div`
  display: flex;
  flex-direction: column;
`
const StartPageHeader = styled.h1`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 24px;
  margin: 4% 0 0 4%;
`
const StartPageSmallHeader = styled.h2`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 18px;
  margin: 4% 0 0 4%;
`
const StartPageText = styled.p`
  color: white;
  font-size: 16px;
  margin-block-start: 0;
  margin: 2% 4%;

  @media (min-width: 1024px) {
    font-size: 18px;
  }  
`
const StartPageTextBiggerScreen = styled(StartPageText)`
  display: none;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
  }  
`
const PageImageContainer = styled.div`
  padding: 8px;
`
const PageImage = styled.img`
  display: none;  

  @media (min-width: 1024px) {
    display: flex;
    max-width: 100%;
    height: auto;
  }  
`
const PageImageSmall = styled.img`
  display: none;  

  @media (min-width: 668px) {
    display: flex;
    max-width: 100%;
    height: auto;
  }  
  @media (min-width: 1024px) {
    display: none;
  }  
`