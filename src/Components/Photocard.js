import React from "react";
import styled from "styled-components";

const PhotoCard = props => {
  return (
    <Container>
      <StyledHeader>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
      </StyledHeader>
      <StyledImage>
      <img src={props.url} alt="NASA Photo Of The Day" />
      </StyledImage>
      <StyledDescription>
        <h3>Description</h3>
        <p>{props.explanation}</p>
      </StyledDescription>
      <StyledFooter>
          <p>Copyright {props.copyright} 2020</p>
        </StyledFooter>
      </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`

const StyledHeader = styled.div`
  h1 {
    color: whitesmoke;
    background: lightskyblue;
    font-family: Courier New;
  }
  p {
    margin-right: 20px;
  }

  h2 {
    font-family: Courier New;
  }
`
const StyledImage = styled.div`
  width: 80%;
  margin: auto;
  height: 400px;
  background: peru;
  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDescription = styled.div`
  width: 80%;
  margin: auto;
  height: auto;
  padding: 10px 30px;
  h2 {
    text-align: center;
    color: #636363;
  }
  p {
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
    color: #333
  }
`
const StyledFooter = styled.footer`
  width: 100%;
  background: lightskyblue;
  min-height: 5px; 
  margin: 0;
  padding: 10px 30px;
`
export default PhotoCard;