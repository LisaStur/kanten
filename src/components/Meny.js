import React from "react";
import styled from "styled-components";

export const Meny = () => {
  return (
    <MenySection>
      <BigScreen>
        <MenyHeader>Insegling</MenyHeader>
        <EachEntry>
          <MenyEntry>Pommes med aioli</MenyEntry>
          <Price>95kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Vitlöksbröd</MenyEntry>
          <Price>95kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Nachos med salsa och aioli</MenyEntry>
          <Price>95kr</Price>
        </EachEntry>
        <MenyHeader>Förtöjning</MenyHeader>
        <EachEntry>
          <MenyEntry>Strandkantens räksmörgås</MenyEntry>
          <Price>liten 259kr/stor 309kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Kaptens fisk och skaldjurssoppa</MenyEntry>
            <MenyDetail>med vitlöksbröd</MenyDetail>
            <MenyDetail>extra vitlöksbröd 20kr</MenyDetail>
          </WithDetail>
          <Price>239kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Hamburgare 200g</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>249kr/med ost 264kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Strimlad svensk ryggbiff</MenyEntry>
            <MenyDetail>med pommes och bearnaisesås</MenyDetail>
          </WithDetail>
          <Price>329kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Fish &amp; chips på torsk</MenyEntry>
            <MenyDetail>med remouladsås</MenyDetail>
          </WithDetail>
          <Price>259kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Halloumiburgare</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>249kr</Price>
        </EachEntry>
      </BigScreen>
      <BigScreen>
        <MenyHeader>Småttingarnas</MenyHeader>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Hamburgare 90g</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>129kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Liten fish &amp; chips på torsk</MenyEntry>
            <MenyDetail>med remouladsås</MenyDetail>
          </WithDetail>
          <Price>179kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Liten strimlad ryggbiff</MenyEntry>
            <MenyDetail>med pommes och bearnaisesås</MenyDetail>
          </WithDetail>
          <Price>219kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Amerikanska pannkakor</MenyEntry>
            <MenyDetail>med sylt och grädde</MenyDetail>
          </WithDetail>
          <Price>109kr</Price>
        </EachEntry>
        <MenyHeader>Efterdyning</MenyHeader>
        <EachEntry>
          <MenyEntry>Vaniljglass med chokladsås</MenyEntry>
          <Price>89kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Chokladkaka</MenyEntry>
            <MenyDetail>med vispad grädde</MenyDetail>
          </WithDetail>
          <Price>119kr</Price>
        </EachEntry>
      </BigScreen>
    </MenySection>
  );
};

const MenySection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding: 12px 12px 0 0;
  background-color: rgba(100, 100, 130, 0.8);

  @media (min-width: 668px) {
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
  }
`;
const BigScreen = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 45%;
    padding: 0 5% 3% 5%;
  }
`;
const MenyHeader = styled.h2`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  padding-top: 24px;
  margin-block-start: 0;
  margin-block-end: 0;
`;
const EachEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 12px 0 12px;
`;
const WithDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenyEntry = styled.p`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const MenyDetail = styled.p`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 10px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;
const Price = styled.p`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: normal;
  font-size: 10px;
  padding-top: 4px;
  text-align: end;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    padding-top: 1px;
    font-size: 14px;
  }
`;
