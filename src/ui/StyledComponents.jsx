import styled from "styled-components";
import { getColorForLabel } from "./getColorForLabel";

// Layout wrapper
export const Layout = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 1200px; // Limit max width for large screens

  @media (max-width: 768px) {
    margin: 2% 5%; // Increase margin on smaller screens
    height: auto; // Adjust height for mobile view
  }
`;

// Header component
export const Header = styled.header`
  background-color: #add8e6;
  padding: 1rem 0.8rem; /* Slightly increased padding */
  border-bottom: 2px solid var(--color-grey-100); /* Slightly thicker border for definition */
  display: flex;
  /* gap: 2.4rem; */
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  max-width: 100%;

  .logo-text-container {
    display: flex;
    align-items: center;
    gap: 5rem; // Adjust gap between logo and text as needed
  }

  h2 {
    margin: 0;
    font-size: 1.25rem; /* Larger font size for the title */
    font-weight: bold; /* Bold font weight for emphasis */
    color: #000; /* Ensuring high contrast for readability */
  }

  a {
    color: #000; /* Default link color */
    text-decoration: none; /* No underline by default */
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline; /* Underline on hover for interaction feedback */
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    max-width: 90%;

    padding: 1rem; /* Adjusted padding for smaller screens */
  }
`;

// export const Header = styled.header`
//   /* background-color: var(--color-grey-0); */
//   background-color: #add8e6;
//   padding: 1rem 0.8rem;
//   border-bottom: 1px solid var(--color-grey-100);
//   display: flex;
//   gap: 2.4rem;
//   align-items: center;
//   justify-content: space-between; // Adjust for smaller screens
//   margin: 0 auto; // Center the header
//   max-width: 80%; // Adjust this value to make the header content area narrower

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//     max-width: 90%; // You might want a different max-width for smaller screens
//   }
// `;

// Main content area
export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between; // Use space-between to evenly distribute the space
  gap: 2.5%;
  padding: 1%;

  @media (max-width: 768px) {
    flex-direction: column; // Stack columns vertically on smaller screens
    gap: 20px; // Adjust gap for smaller screens
  }
`;

// Column component
export const Column = styled.div`
  flex: 1; // Make columns flexible
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  height: 85%;

  &:first-child {
    @media (max-width: 768px) {
      margin-bottom: 20px; // Add margin to the bottom of the first column on small screens
    }
  }

  @media (max-width: 768px) {
    width: 100%; // Full width on smaller screens
  }
`;

// Footer component
export const Footer = styled.footer`
  padding: 1rem 0;
  background-color: dark grey;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center; // Center content for all screens
  height: auto; // Adjust height for flexibility

  @media (max-width: 768px) {
    flex-direction: column; // Stack footer content vertically on small screens
    gap: 1rem;
  }
`;

// Styled table and other components remain unchanged, as they naturally adapt to their container's width
// Ensure to define `--color-grey-0`, `--color-grey-100`, and `--border-radius-md` in your :root CSS or provide actual values

export const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 1%.2;
  margin-top: 0; // Add margin for spacing between content
  margin-bottom: 10px;

  & .recharts-pie-label-text {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 1.2rem; // Reduce padding on smaller screens
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import styled from "styled-components";
// import { getColorForLabel } from "./getColorForLabel";

// // Layout wrapper
// export const Layout = styled.div`
//   margin: 0 5%;
//   display: flex;
//   flex-direction: column;
//   height: 90vh; // Set the height to 100% of the viewport height
//   width: 90vw;
// `;

// // Header component
// export const Header = styled.header`
//   background-color: var(--color-grey-0);
//   padding: 0 rem 0.8rem;
//   border-bottom: 1px solid var(--color-grey-100);

//   display: flex;
//   gap: 2.4rem;
//   align-items: center;
//   justify-content: flex-start;
// `;

// // Main content area
// export const MainContent = styled.div`
//   flex-grow: 1; // Allows this section to take up the remaining space
//   display: flex;
//   justify-content: flex-start;
//   gap: 2.5%; // Manually setting the gap between columns
//   padding: 0 0.5%;
// `;

// // Column component
// export const Column = styled.div`
//   width: 40%;
//   /* height: 90%; */
//   &:first-child {
//     width: 40%; // Reduce the width of the first column to make it narrower
//   }
//   padding: 10px;
//   border: 1px solid #ccc;
//   text-align: left; // Ensure content aligns to the left
//   // Other styling...
// `;

// // Footer component
// export const Footer = styled.footer`
//   height: 15%;
//   background-color: #f3f3f3;
//   // Other styling...
//   display: flex;
//   gap: 2.4rem;
//   align-items: center;
//   justify-content: flex-start;
// `;

// // Styled table
// export const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// // Styled table header
// export const StyledTh = styled.th`
//   text-align: left;
//   padding: 8px;
//   border: 1px solid #ccc;
//   background-color: #f4f4f4; // Optional: for styling
// `;

// // Styled table data cell
// export const StyledTd = styled.td`
//   text-align: left;
//   padding: 8px;
//   border: 1px solid #ccc;
// `;

// // Styled table row
// export const StyledTr = styled.tr`
//   background-color: ${(props) => getColorForLabel(props.label)};
//   color: #333333; // Dark text color for readability
// `;

// `;
// // export const StyledTr = styled.tr`;
// //   &:nth-child(even) {
// //     background-color: #f9f9f9; // Optional: for zebra striping
// //   }
// // `;

// export const ChartBox = styled.div`
//   /* Box */
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 2.4rem 3.2rem;
//   grid-column: 3 / span 2;

//   & > *:first-child {
//     margin-bottom: 1.6rem;
//   }

//   & .recharts-pie-label-text {
//     font-weight: 600;
//   }
// `;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import styled from "styled-components";

// export const Layout = styled.div`
//   margin: 0 5%;
//   display: flex;
//   justify-content: space-between;
// `;

// export const Column = styled.div`
//   width: 75%; // Each column takes almost half the width, considering 5% space in between
//   padding: 10px;
//   border: 1px solid #ccc; // Just for visualizing the columns, you can remove this
// `;

// function Home() {
//   return (
//     <Layout>
//       <Column>
//         {/* You can add more content or components here */}
//         <h2>Column 1</h2>
//       </Column>
//       <Column>
//         {/* Additional content for Column 2 */}
//         <h2>Column 2</h2>
//       </Column>
//     </Layout>
//   );
// }

// export default Home;
