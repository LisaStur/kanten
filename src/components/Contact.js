import React from 'react'
import styled from 'styled-components'

export const Contact = () => {

  return (
    <ContactSection>
      <ContactTextSection>
        <ContactHeader>Här hittar du oss!</ContactHeader>
        <ContactText>
          Kosteröarna ligger en mil väster om Strömstad. Det går reguljära båtturer hit från Strömstad med Västtrafik, Koster Marin.  
          Strandkanten ligger ett par hundra meter från Västra Bryggan. Tidtabell hittar du här: 
          <TimeTableLink href="http://www.kostermarin.se/">Koster Marins Tidtabell</TimeTableLink>
          <br /> Eller använd Västtrafiks reseplanerare med "från" Strömstad norra hamnen, Strömstad och "till" Koster Västra Bryggan, Strömstad här: 
          <TimeTableLink href="https://www.vasttrafik.se/">Västtrafiks reseplanerare</TimeTableLink>
          <br />Om du kommer med egen båt finns det en gästhamn bredvid Strandkanten att lägga till vid.
        </ContactText>
      </ContactTextSection>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 12px;
  background-color: rgba(100,100,130, 0.8);

  @media (min-width: 668px) {
    display: flex;
    flex-direction: row;
  }  
`
const ContactTextSection = styled.div`
  display: flex;
  flex-direction: column;
`
const ContactHeader = styled.h1`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 24px;
  margin: 4% 0 0 4%;
`
const ContactText = styled.p`
  color: white;
  font-size: 16px;
  margin-block-start: 0;
  margin: 2% 4%;
`
const TimeTableLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding-left: 4px;

  &:hover {
    background-color: rgba(80,80,100);
    transition: 0.4s;
  }
`