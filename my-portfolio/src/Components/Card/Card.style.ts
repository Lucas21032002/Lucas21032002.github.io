import { Flex } from "antd";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  width: 70%;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
    color: white;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    width: 20%;
    border-radius: 20px;
    padding: 6px;
    color: #5eead4;
    font-weight: 600;
    text-align: center;
    background-color: #5eead40a;
  }

  &:hover {
    h3 {
      color: #5eead4;
    }

    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 10px;
    transition: all 0.3s;
    cursor: pointer;
  }
`;

export const HeaderCard = styled(Flex)`
  display: flex;
  width: 100%;
  border-radius: 10px;
  color: white;
  gap: 20px;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 600;
    color: #64748b;
  }

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: #e2e8f0;
  }
  }
`;

export const DescriptionCard = styled(Flex)`
  display: flex;
  align-items: center;
  font-weight: 600;
  flex-direction: column;
  font-size: 15px
  padding: 5px;
  border-radius: 10px;
  color: #f0f0f0;
`;
