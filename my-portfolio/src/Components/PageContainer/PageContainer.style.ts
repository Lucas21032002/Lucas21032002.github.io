import styled from "styled-components";
import { Button, Flex } from "antd";

export const ButtonSocial = styled(Button)`
  display: flex;
  gap: 10px;
  font-size: 18px;
  align-items: center;
  min-width: 150px;
  background-color: #d8523d;
`;

export const FlexAbout = styled(Flex)`
  display: flex;
  flex-direction: column;
  margin-top: -60px;
  gap: 20px;
  width: 70%;
  padding: 20px;
  border-radius: 10px;
  color: #f0f0f0;
  font-size: 16px;
  font-weight: bold;
`;

export const FlexPresentation = styled(Flex)`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 20px;
  border-radius: 10px;
  color: #f0f0f0;
  margin: 0 auto;
  margin-top: -140px;
  h1 {
    font-size: 56px;
  }

  h3 {
    margin-top: -35px;
    font-size: 24px;
    color: #5eead4;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const FlexNavigation = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  ul li {
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    width: 20%;
    cursor: pointer;
    text-align: center;
  }

  ul li a {
    color: white;
    text-decoration: none;
    font-size: 30px;
    border-radius: 8px;
    text-align: center;
  }
`;

export const FlexSocial = styled(Flex)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  //border: 1px solid #f0f0f0;
  //background-color: #f0f0f0;
  margin: 0 auto;
  margin-top: 20px;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    width: 100%;
    justify-content: center;
  }

  ul li {
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    width: 20%;
    cursor: pointer;
    text-align: center;
  }

  ul li a {
    color: white;
    text-decoration: none;
    font-size: 30px;
    border-radius: 8px;
    text-align: center;
  }
`;

//laranja das escritas #ea765e
//laranja opaco
