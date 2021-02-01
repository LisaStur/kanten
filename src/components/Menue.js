import React, { useState } from 'react'
import styled from 'styled-components'

export const Menue = () => {
  const [entre, setEntre] = useState(false)
  const [main, setMain] = useState(false)
  const [postre, setPostre] = useState(false)
  const [kids, setKids] = useState(false)
  const [drink, setDrink] = useState(false)

  return (
    <MenueSection>
      <MenueHeader onClick={() => setEntre(!entre)}>{!entre && <Head>Insegling ➜</Head>}{entre && <Head>Insegling</Head>}</MenueHeader>
      {entre && <Dish>Fyrvaktarns Skagentoast</Dish>}
      <MenueHeader onClick={() => setMain(!main)}>{!main && <Head>Förtöjning ➜</Head>}{main && <Head>Förtöjning</Head>}</MenueHeader>
      {main && <Dish>Strimlad Biff</Dish>}
      <MenueHeader onClick={() => setPostre(!postre)}>{!postre && <Head>Efterdyning ➜</Head>}{postre && <Head>Efterdyning</Head>}</MenueHeader>
      {postre && <Dish>Glass</Dish>}
      <MenueHeader onClick={() => setKids(!kids)}>{!kids && <Head>Småttingarnas ➜</Head>}{kids && <Head>Småttingarnas</Head>}</MenueHeader>
      {kids && <Dish>Köttbullar</Dish>}
      <MenueHeader onClick={() => setDrink(!drink)}>{!drink && <Head>Dryck ➜</Head>}{drink && <Head>Dryck</Head>}</MenueHeader>
      {drink && <Dish>Mariestad</Dish>}
    </MenueSection>
  )
}
const MenueSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(100,100,130, 0.6);
  margin: 3%;
  padding: 2%;
  width: 90%;
  `
const MenueHeader = styled.div`
  color: white;
  padding: 0 0 0 2%;
`
const Head = styled.h2`
  display: flex;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: white;
  margin-block-end: 0;
`
const Dish = styled.p`
  display: flex;
  color: white;
  margin-block-start: 0;
  margin-block-end: 0;
  padding 2%;
`