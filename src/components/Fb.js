import React from 'react'
import styled from 'styled-components'

export const Fb = () => {

  return (
    <FbBox>
      <FbHeader>Följ oss på Facebook:</FbHeader>
      <div class="fb-page" 
        data-href="https://www.facebook.com/strandkantenrestaurang" 
        data-tabs="timeline" 
        data-width="340" 
        data-height="500" 
        data-small-header="true" 
        data-adapt-container-width="true" 
        data-hide-cover="false" 
        data-show-facepile="false">
        <blockquote cite="https://www.facebook.com/strandkantenrestaurang" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/strandkantenrestaurang">Restaurang strandkanten Nord-Koster</a>
        </blockquote>
      </div>
    </FbBox>
     
  )
}

const FbBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(100,100,130, 0.8);
  padding: 12px;
  margin: 12px;

  @media (min-width: 668px) {
    width: 340px;
    margin: 0 0 12px 0;
    height:100%;
  } 
`
const FbHeader = styled.h2`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 18px;
  margin: 4%;
`

