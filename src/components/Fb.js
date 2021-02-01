import React from 'react'
import styled from 'styled-components'

export const Fb = () => {

  return (
    <FacebookSection>
      <div class="fb-page" 
      data-href="https://www.facebook.com/strandkantenrestaurang" 
      data-tabs="timeline" 
      data-width="340" 
      data-height="500" 
      data-small-header="true" 
      data-adapt-container-width="true" 
      data-hide-cover="true" 
      data-show-facepile="false">
        <blockquote cite="https://www.facebook.com/strandkantenrestaurang" class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/strandkantenrestaurang">Restaurang strandkanten Nord-Koster</a>
        </blockquote>
      </div>
    </FacebookSection>
  )
}

const FacebookSection = styled.div`
  display: flex;
  flex-direction: coulmn;
  justify-content: center;
  width: 100%;
`
