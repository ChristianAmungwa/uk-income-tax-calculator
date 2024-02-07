export const getColorForLabel = (label) => {
  const colors = {
    "Gross Pay": "#f0f8ff", // AliceBlue
    "Tax Free Allowance": "#f5f5f5", // WhiteSmoke
    "Total taxable": "#e6e6fa", // Lavender
    // "Total Tax Due": "#FF5252", // MintCream
    "Total Tax Due": "#FFA726", // MintCream
    // "Total Tax Due": "#f5fffa", // MintCream
    "20% rate": "#f0fff0", // Honeydew
    "40% rate": "#fffaf0", // FloralWhite
    "45% rate": "#f0ffff", // Azure
    "National Insurance": "#4FC3F7", // LavenderBlush
    // "National Insurance": "#fff0f5", // LavenderBlush
    "Total Deductions": "#f5f5dc", // Beige
    "Net Wage": "#A5D6A7", // Ivory
    // "Net Wage": "#fffff0", // Ivory
  };
  return colors[label] || "#FFFFFF"; // default to white if label is not found
};

// export const getColorForLabel = (label) => {
//   const colors = {
//     "Gross Pay": "#FFD700", // gold
//     "Tax Free Allowance": "#ADFF2F", // greenyellow
//     "Total taxable": "#7FFFD4", // aquamarine
//     "Total Tax Due": "#00FFFF", // cyan
//     "20% rate": "#1E90FF", // dodgerblue
//     "40% rate": "#9932CC", // darkorchid
//     "45% rate": "#FF1493", // deeppink
//     "National Insurance": "#FF8C00", // darkorange
//     "Total Deductions": "#B22222", // firebrick
//     "Net Wage": "#20B2AA", // lightseagreen
//   };
//   return colors[label] || "#FFFFFF"; // default to white if label is not found
// };
