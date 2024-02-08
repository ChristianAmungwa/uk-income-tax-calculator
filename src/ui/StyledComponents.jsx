import styled from "styled-components";
import { getColorForLabel } from "./getColorForLabel";

export const Layout = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  width: 100vw;
  max-width: 1200px;

  min-height: 100vh;

  @media (max-width: 768px) {
    margin: 2% 5%;
    height: auto;
  }
`;

export const Header = styled.header`
  background-color: #add8e6;
  padding: 1rem 0.8rem;
  border-bottom: 2px solid var(--color-grey-100);
  display: flex;

  align-items: center;
  /* justify-content: start; */
  margin: 0 auto;
  max-width: 100%;

  justify-content: space-between;
  padding: 1rem;

  .logo-text-container {
    display: flex;
    align-items: center;
    gap: 5rem;
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: bold;
    color: #000;
  }

  a {
    color: #000;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    max-width: 90%;

    padding: 1rem;
  }
`;

export const MainContent = styled.div`
  /* flex-grow: 1;
  display: flex;
  justify-content: space-between;
  gap: 2.5%;
  padding: 1%; */

  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    /* gap: 20px; */

    align-items: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  height: 85%;
  height: fit-content;

  &:first-child {
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  padding: 1rem;
  background-color: dark grey;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// export const Footer = styled.footer`
//   padding: 1rem 0;
//   background-color: dark grey;
//   display: flex;
//   gap: 2.4rem;
//   align-items: center;
//   justify-content: center;
//   height: auto;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

export const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  /* padding: 1%.2; */
  margin-top: 0;
  margin-bottom: 10px;

  padding: 1rem;

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    /* padding: 1.2rem; */

    padding: 1rem;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTh = styled.th`
  text-align: left;
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
`;

export const StyledTd = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #ccc;
`;

export const StyledTr = styled.tr`
  background-color: ${(props) => getColorForLabel(props.label)};
  color: #333;
`;
