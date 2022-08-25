import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
  background-color: whitesmoke;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const InputForm = styled.input`
  width: 95%;
  height: 7vh;
  font-size: 13px;
`;

export const LabelElement = styled.button`
  font-size: 21px;
  padding: 2px;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  background-color: lightblue;
  border-width: 0px;
`;

export const Heading = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
`;

export const TrendingList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 95%;
    justify-content: flex-start;
  }
`;
