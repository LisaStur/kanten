import React from 'react' 
import styled from 'styled-components'

export const StartPage = () => {

  return (
    <StartPageSection>
      <StartPageHeader>Välkommen!</StartPageHeader>
      <StartPageText>Vi erbjuder mat och dryck på en fantastisk utomhusveranda på bryggan eller inomhus i vår mysiga sjöbod 
        med fantastiska möbler från xxxx....
        Passa på att handla presenter till dig själv och andra i vår välfyllda butik.
      </StartPageText>
    </StartPageSection>
  )
}

const StartPageSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
`
const StartPageHeader = styled.h1`
  color: white;
  font-size: 32px;
  margin: 4% 0 0 4%;
`
const StartPageText = styled.p`
  color: white;
  font-size: 18px;
  margin: 4%;
`