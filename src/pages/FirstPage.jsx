import React from 'react'
import styled from 'styled-components'
import AuroraBackgroundSetup from '../AuroraBackgroundSetup'

function FirstPage() {
    return (
      <>
        <AuroraBackgroundSetup bgImage={"/images/camping.jpg"} id="sectionOne">
          <Circle>
            <CircleImage />
          </Circle>
          <TextContainer>
            <h1>UzCamp</h1>
            <p>Book, Reserve, And Enjoy</p>
            <Line />
          </TextContainer>
          
        </AuroraBackgroundSetup>
      </>
    );
}

export default FirstPage

const Circle = styled.div `
  height: 180%;
  width: 10000%;
  background: transparent;
  animation: borderRadiusChange 1.5s ease-in-out forwards;
  transform: translateX(-2000px);
  animation-delay: 1s;
  overflow: hidden;
  border: 1px solid white;

  @keyframes borderRadiusChange {
    0% {
      transform: translateX(-2000px);
    } 25% {
      transform: translateX(-700px);
    } 100% {
      transform: translate(-300px, -180px);
      border-radius: 50%;
    }
  }

  @media (max-width: 1100px) {
    opacity: 0;
    display: none;
  }
`

const CircleImage = styled.div `
  animation: changeOpacity 1s ease-in-out forwards;
  animation-delay: 2.5s;
  height: 80%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  background-image: url("/images/camping.jpg");
  opacity: 0;

  @keyframes changeOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  height: 100%;
  transform: translateX(-170px);
  align-items: center;

  h1 {
    font-size: 100px;
    text-align: center;
  }
  p {
    font-size: 30px;
    width: 100%;
    margin-top: -50px;
    text-align: center;
  }

  @media (max-width: 1100px) {
    width: 100vw;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 25%;

    h1 {
      font-size: 70px;
    }
    p {
      font-size: 20px;
      margin-top: -30px;
    }
  }
`;

const Line = styled.div`
  width: 400px;
  height: 1px;
  background: white;
  transition: 0.8s ease-in-out;
  margin-top: -10px;

  @media (max-width: 1100px) {
    width: 200px;
    height: 1px;
  }
`;