import React from 'react'
import styled from 'styled-components'

export const Meny = () => {

  return (
    <MenySection>
      <BigScreen>
        <MenyHeader>Meny för 2023 kommer snart!</MenyHeader>
      </BigScreen>
      {/*<BigScreen>
        <MenyHeader>Insegling</MenyHeader>
        <EachEntry>
          <MenyEntry>Pommes med aioli</MenyEntry>
          <Price>69kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Vitlöksbröd</MenyEntry>
          <Price>75kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Nachos med salsa och aioli</MenyEntry>
          <Price>69kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Strandkantens räksmörgås</MenyEntry>
          <Price>liten 209kr / stor 269kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Caesarsallad</MenyEntry>
          <Price>kyckling 199kr / räkor 209kr</Price>
        </EachEntry>
        <MenyHeader>Förtöjning</MenyHeader>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Kaptens fisk &amp; skaldjurssoppa</MenyEntry>
            <MenyDetail>med vitlöksbröd, extra vitlöksbröd 15kr</MenyDetail>
          </WithDetail>
          <Price>189kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Högrevsburgare 200g</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>199kr / med ost 214kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Strimlad svensk ryggbiff</MenyEntry>
            <MenyDetail>med pommes, bearnaise och sallad</MenyDetail>
          </WithDetail>
          <Price>259kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Fish &amp; chips på torsk</MenyEntry>
            <MenyDetail>med remouladsås</MenyDetail>
          </WithDetail>
          <Price>199kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Halloumiburgare</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>199kr</Price>
        </EachEntry>
      </BigScreen>
      <BigScreen>
        <MenyHeader>Småttingarnas</MenyHeader>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Hamburgare 90g</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>99kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Grillkorv</MenyEntry>
            <MenyDetail>med pommes</MenyDetail>
          </WithDetail>
          <Price>99kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Liten fish &amp; chips på torsk</MenyEntry>
            <MenyDetail>med remouladsås</MenyDetail>
          </WithDetail>
          <Price>139kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Liten strimlad ryggbiff</MenyEntry>
            <MenyDetail>med pommes, bearnaise och sallad</MenyDetail>
          </WithDetail>
          <Price>169kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Amerikanska pannkakor</MenyEntry>
            <MenyDetail>med sylt och grädde</MenyDetail>
          </WithDetail>
          <Price>79kr</Price>
        </EachEntry>
        <MenyHeader>Efterdyning</MenyHeader>
        <EachEntry>
          <MenyEntry>Glass med chokladsås</MenyEntry>
          <Price>49kr</Price>
        </EachEntry>
        <EachEntry>
          <WithDetail>
            <MenyEntry>Chokladkaka</MenyEntry>
            <MenyDetail>med vispad grädde</MenyDetail>
          </WithDetail>
          <Price>105kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Äppelkaka med vaniljsås</MenyEntry>
          <Price>105kr</Price>
        </EachEntry>
      </BigScreen>*/}
      {/*<BigScreen>
        <MenyHeader>Dryck</MenyHeader>
        <DrinkHeader>Öl</DrinkHeader>
        <EachEntry>
          <MenyEntry>Fatöl</MenyEntry>
        </EachEntry>
        <DrinkEntry>
          <DrinkDetail>Norrlands Guld 0,4 l</DrinkDetail>
          <Price>60kr</Price>
        </DrinkEntry>
        <EachEntry>
          <MenyEntry>Flaska</MenyEntry>
        </EachEntry>
        <DrinkEntry>
          <DrinkDetail>Grebbestad Lager 0,5 l</DrinkDetail>
          <Price>75kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Grebbestad Koster 0,5 l</DrinkDetail>
          <Price>75kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Mariestad 0,5 l</DrinkDetail>
          <Price>75kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Carlsberg Hof 0,33 l</DrinkDetail>
          <Price>50kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Heineken 0,33 l</DrinkDetail>
          <Price>65kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Corona 0,33 l</DrinkDetail>
          <Price>65kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Samuel Adams 0,33 l</DrinkDetail>
          <Price>65kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Oppigårds IPA 0,33 l</DrinkDetail>
          <Price>75kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Lagunitas IPA 0,33 l</DrinkDetail>
          <Price>75kr</Price>
        </DrinkEntry>
        <EachEntry>
          <MenyDetail>Alkoholfri öl </MenyDetail>
          <Price>35kr</Price>
        </EachEntry>
        <DrinkHeader>Vin</DrinkHeader>
        <EachEntry>
          <MenyEntry>Rött vin</MenyEntry>
        </EachEntry>
        <DrinkEntry>
          <DrinkDetail>Husets - Spring Village<br/>Shiraz, Spanien</DrinkDetail>
          <Price>glas 79kr / halv 199kr / hel 299kr</Price>
        </DrinkEntry>
        <EachEntry>
          <DrinkDetail>P.Lex Reserva 2014<br/>Portugal</DrinkDetail>
          <Price>glas 79kr / flaska 399kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Vitt vin</MenyEntry>
        </EachEntry>
        <DrinkEntry>
          <DrinkDetail>Husets - Spring Village<br/>Chardonnay, Spanien</DrinkDetail>
          <Price>glas 79kr / halv 199kr / hel 299kr</Price>
        </DrinkEntry>
        <EachEntry>
          <DrinkDetail>P.Lex Pinot Grigio 2013<br/>Italien</DrinkDetail>
          <Price>glas 79kr / flaska 399kr</Price>
        </EachEntry>
        <EachEntry>
          <DrinkDetail>Chablis<br/>Frankrike</DrinkDetail>
          <Price>glas 119kr / flaska 99kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Rosé</MenyEntry>
        </EachEntry>
        <DrinkEntry>
          <DrinkDetail>Santa Carolina</DrinkDetail>
          <Price>glas 79kr / flaska 299kr</Price>
        </DrinkEntry>
        <EachEntry>
          <DrinkDetail>Mel Alcantara</DrinkDetail>
          <Price>glas 99kr / flaska 399kr</Price>
        </EachEntry>
        <EachEntry>
          <MenyEntry>Mousserande</MenyEntry>
        </EachEntry>
        <DrinkEntry>
          <DrinkDetail>P.Lex Prosecco Brut<br/>Italien</DrinkDetail>
          <Price>glas 199kr / flaska 499kr</Price>
        </DrinkEntry>
        <EachEntry>
          <DrinkDetail>Xante Sparkling &amp; Pear</DrinkDetail>
          <Price>glas 99kr / flaska 399kr</Price>
        </EachEntry>
        <DrinkHeader>Cider / Alkoläsk</DrinkHeader>
        <DrinkEntry>
          <DrinkDetail>Briska 0,33 l </DrinkDetail>
          <Price>59kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Xider 0,33 l </DrinkDetail>
          <Price>59kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Smirnoff Ice 0,33 l </DrinkDetail>
          <Price>75kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Absolut mixt 0,33 l </DrinkDetail>
          <Price>75kr</Price>
        </DrinkEntry>
        <DrinkHeader>Läsk</DrinkHeader>
        <DrinkEntry>
          <DrinkDetail>Coca Cola, Coca Cola Light, Fanta, Sprite</DrinkDetail>
          <Price>liten 29kr / stor 34kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Festis</DrinkDetail>
          <Price>34kr</Price>
        </DrinkEntry>
        <DrinkHeader>Varma drycker</DrinkHeader>
          <DrinkEntry>
          <DrinkDetail>Kaffe / Te</DrinkDetail>
          <Price>25kr</Price>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Varm choklad med grädde</DrinkDetail>
          <Price>34kr</Price>
        </DrinkEntry>
        <DrinkHeader>Drinkar</DrinkHeader>
        <DrinkEntry>
          <DrinkDetail>Drinkar</DrinkDetail>
          <Price>4cl 109kr / 6cl 139kr</Price>
        </DrinkEntry>
        <EachEntry>
          <DrinkDetail>Irish Coffee</DrinkDetail>
          <Ingredients>Whiskey, kaffe, grädde</Ingredients>
        </EachEntry>
        <DrinkEntry>
          <DrinkDetail>Kaffe Karlsson</DrinkDetail>
          <Ingredients>Cointreau, Baileys, kaffe, grädde</Ingredients>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Lumumba</DrinkDetail>
          <Ingredients>Cognac, varm choklad, grädde</Ingredients>
        </DrinkEntry>
        <DrinkEntry>
          <DrinkDetail>Harley Davidson</DrinkDetail>
          <Ingredients>Whiskey, Baileys, kaffe, grädde</Ingredients>
        </DrinkEntry>
        <EachEntry>
          <DrinkDetail>Sprit</DrinkDetail>
          <Price> 1cl 25kr</Price>
        </EachEntry>
        <BackLink href="#top">Tillbaka ↑</BackLink>
      </BigScreen>*/}
    </MenySection>
  )
  
}


const MenySection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding: 12px 12px 0 0;
  background-color: rgba(100,100,130, 0.8);
  
  @media (min-width: 668px) {
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
  }
`
const BigScreen = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 45%;
    padding: 0 5% 3% 5%;
  }
  
`
const MenyHeader = styled.h2`
  color: white;
  font-family: 'Pattaya', sans-serif;
  font-weight: normal;
  font-size: 28px;
  text-align: center;
  padding-top: 24px;
  margin-block-start: 0;
  margin-block-end: 0;
`
/*const EachEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 12px 0 12px;
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

  @media (min-width: 668px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`
const MenyDetail = styled.p`
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 10px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
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

  @media (min-width: 668px) {
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    padding-top: 1px;
    font-size: 14px;
  }
`*/
/* const DrinkHeader = styled.h3`
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  padding-top: 4px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 20px;
    padding-top: 12px;
  }
  @media (min-width: 668px) {
    font-size: 20px;
  }
`
const DrinkEntry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
`
const DrinkDetail = styled.p`
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 10px;
  padding-top:4px;
  margin-block-start: 0;
  margin-block-end: 0;

  @media (min-width: 668px) {
    font-size: 12px;
  }
  @media (min-width: 668px) {
    font-size: 14px;
  }
`
const Ingredients = styled(DrinkDetail)`
  font-style: italic;
  display: flex;
  flex-direction: row;
`
const BackLink = styled.a`
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  font-size: 16px;
  padding: 24px 0 12px 0;
  margin-block-start: 0;
  margin-block-end: 0;
  text-decoration: none;
  text-align: end;
`*/