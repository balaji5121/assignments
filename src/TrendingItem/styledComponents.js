import styled from "styled-components";

export const TredingItemLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 29vw;
  height: 34vh;
  background-color: #d9d9d9;
  border-radius: 5px;
  margin: 13px;

  @media screen and (max-width: 768px) {
    height: 30vh;
    width: 43.1%;
  }
`;

export const TredingItemImage = styled.img`
  width: 100%;
  height: 25vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media screen and (max-width: 768px) {
    height: 20vh;
    width: 100%;
  }
`;

export const TredingItemTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 650;
  padding-left: 5px;
  font-size: 13px;
  width: 100%;
  line-height: 140%;
  color: #000000;
`;

export const TredingItemRating = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  font-size: 12px;
  /* or 22px */
  color: #000000;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
