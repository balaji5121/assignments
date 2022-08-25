import styled from "styled-components";

export const DetailedViewContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: whitesmoke;
  color: red;
`;

export const DetailedViewContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 25px;
`;

export const DetailedViewContainerRight = styled(DetailedViewContainerLeft)`
  background-size: cover;
  width: 40%;
  padding: 0px;
`;

export const DetailedViewTitle = styled.h1`
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 50px;
  display: flex;
  align-items: flex-end;
  color: #000000; /*%20Inside%20auto%20layout%20*/
`;

export const DetailedViewDesc = styled.p`
  font-family: "Helvetica Neue LT Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 152%; /* or 30px */
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7); /* Inside auto layout */
`;

export const DetailedViewImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const GoBackButton = styled.button`
  height: 25px;
  width: 85px;
  font-size: 15px;
  background-color: transparent;
  border-width: 0px;
  display: flex;
  align-items: center;
`;
