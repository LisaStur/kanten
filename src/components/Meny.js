import React from 'react'
import styled from 'styled-components'

export const Meny = () => {

  return (
    <MenySection>
      <MenyHeader>Insegling</MenyHeader>
      <EachEntry>
        <MenyEntry>Fyrvaktarns skagentoast</MenyEntry>
        <Price>Liten 119kr / Stor 175kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Kosterrökt makrill</MenyEntry>
          <MenyDetail>Serveras med potatissallad</MenyDetail>
        </WithDetail>
        <Price>Liten 119kr / Stor 175kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Gratinerade kosterkräftor</MenyEntry>
        <Price>Liten 199kr / Stor 299kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Vitlöksbröd</MenyEntry>
        <Price>55kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Pommes med aioli</MenyEntry>
        <Price>55kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Nachos</MenyEntry>
        <Price>55kr</Price>
      </EachEntry>
      <MenyHeader>Förtöjning</MenyHeader>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Strandö special</MenyEntry>
          <MenyDetail>Burfångade havskräftor med tillbehör</MenyDetail>
        </WithDetail>
        <Price>Dagspris</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Strandkantens räksmörgås</MenyEntry>
        <Price>Liten 159kr / Stor 199kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Krämig fisk &amp; skaldjurssoppa</MenyEntry>
          <MenyDetail>Serveras med vitlöksbröd, extra vitlöksbröd 15kr</MenyDetail>
        </WithDetail>
        <Price>149kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Högrevsburgare 200g</MenyEntry>
          <MenyDetail>Serveras med pommes</MenyDetail>
        </WithDetail>
        <Price>155kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Strimlad svensk ryggbiff</MenyEntry>
          <MenyDetail>Serveras med pommes, bearnaise &amp; sallad</MenyDetail>
        </WithDetail>
        <Price>155kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Kosterrökt lax</MenyEntry>
          <MenyDetail>Serveras med hjortronsås</MenyDetail>
        </WithDetail>
        <Price>199kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Fish &amp; chips på torsk</MenyEntry>
          <MenyDetail>Serveras med remouladesås</MenyDetail>
        </WithDetail>
        <Price>159kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Lotsens bakpotatis</MenyEntry>
          <MenyDetail>Serveras med skagenröra</MenyDetail>
        </WithDetail>
        <Price>149kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Caesarsallad</MenyEntry>
        <Price>Kyckling 159kr / Räkor 175kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Vegetarisk rödbetsburgare</MenyEntry>
          <MenyDetail>Serveras med pommes</MenyDetail>
        </WithDetail>
        <Price>155kr</Price>
      </EachEntry>
      <MenyHeader>Småttingarnas</MenyHeader>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Grillkorv eller hamburgare</MenyEntry>
          <MenyDetail>Serveras med pommes</MenyDetail>
        </WithDetail>
        <Price>75kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Småttingarnas strimlad svensk ryggbiff</MenyEntry>
          <MenyDetail>Serveras med pommes, bearnaise &amp; sallad</MenyDetail>
        </WithDetail>
        <Price>119kr</Price>
      </EachEntry>
      <EachEntry>
        <WithDetail>
          <MenyEntry>Amerikanska pannkakor</MenyEntry>
          <MenyDetail>Serveras med sylt &amp; grädde</MenyDetail>
        </WithDetail>
        <Price>119kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Småttingarnas glass med chokladsås</MenyEntry>
        <Price>29kr</Price>
      </EachEntry>
      <MenyHeader>Efterdyning</MenyHeader>
      <EachEntry>
        <MenyEntry>Äppelkaka med vaniljsås</MenyEntry>
        <Price>99kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Glass med chokladsås</MenyEntry>
        <Price>49kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Pralin</MenyEntry>
        <Price>29kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Chokladkaka</MenyEntry>
        <Price>99kr</Price>
      </EachEntry>
      <EachEntry>
        <MenyEntry>Cheescake med hallonsorbet</MenyEntry>
        <Price>109kr</Price>
      </EachEntry>
    </MenySection>

  )

}


const MenySection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 12px;
  background-color: rgba(100,100,130, 0.6);
`
const MenyHeader = styled.h2`
  color: white;
  font-family: 'Pattaya', sans-serif;
  font-weight: normal;
  font-size: 28px;
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 0;
`
const EachEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 12px; 
`
const WithDetail = styled.div`
  display: flex;
  flex-direction: column;
`
const MenyEntry = styled.p`
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;
`
const MenyDetail = styled.p`
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 10px;
  margin-block-start: 0;
  margin-block-end: 0;
`
const Price = styled.p`
color: white;
font-family: 'Lexend Deca', sans-serif;
font-weight: normal;
font-size: 10px;
padding-top: 4px;
text-align: end;
margin-block-start: 0;
margin-block-end: 0;
`