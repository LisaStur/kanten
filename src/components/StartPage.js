import React from 'react' 
import styled from 'styled-components'

export const StartPage = () => {

  return (
    <StartPageSection>
      <StartPageHeader>Välkommen!</StartPageHeader>
      <StartPageText>Restaurang Strandkanten på Nordkoster erbjuder mat och dryck i en fantastisk miljö med 
        utomhusservering på bryggan eller inomhus i den mysiga sjöboden.
        Passa på att handla presenter till dig själv och andra i den välfyllda butiken.
      </StartPageText>
      <StartPageSmallHeader>Öppettider:</StartPageSmallHeader>
      <StartPageText>
        För närvarande har vi vinterstängt. Vi håller tummarna för vaccinations- och Covid-läget och återkommer i vår!
      </StartPageText>
      <StartPageText></StartPageText>
    </StartPageSection>
  )
}

const StartPageSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 12px;
  background-color: rgba(100,100,130, 0.8);
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
`