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
  return colors[label] || "#FFFFFF";
};
