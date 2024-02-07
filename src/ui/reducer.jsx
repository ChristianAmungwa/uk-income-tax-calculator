/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import { summaryData } from "./summaryData";

export const initialState = {
  summaryData: summaryData,
};

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_VALUES":
      let totalPercent = 0;
      let totalYearly = 0;
      let totalMonthly = 0;
      let totalWeekly = 0;

      const updatedSummaryData = state.summaryData.map((item) => {
        const value = action.payload; // The input value representing annual income
        let percent = 0;
        let yearMonWeek = 0;

        const calculateGrossPay = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          percent = (value / value) * 100;
          yearMonWeek = value;

          return { percent, yearMonWeek };
        };

        if (item.label === "Gross Pay") {
          percent = calculateGrossPay(value).percent;
          yearMonWeek = calculateGrossPay(value).yearMonWeek;
        }

        const calculateTaxFreeAllowance = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          if (value <= 12570) {
            percent = 100; // Full allowance
            yearMonWeek = 12570;
          } else if (value > 12570 && value <= 100000) {
            // Calculate the percentage of income that is covered by the tax-free allowance
            percent = Math.round((12570 / value) * 100);
            yearMonWeek = Math.round(12570);
          } else if (value > 100000 && value <= 125140) {
            // For every £2 earned over £100,000, the allowance is reduced by £1
            let reduction = (value - 100000) / 2;
            let adjustedAllowance = Math.max(0, 12570 - reduction);
            percent = Math.round((adjustedAllowance / value) * 100);
            yearMonWeek = Math.round(adjustedAllowance);
          } else if (value > 125140) {
            // No tax-free allowance at all for incomes over £125,140
            percent = 0;
          }
          return { percent, yearMonWeek };
        };
        if (item.label === "Tax Free Allowance") {
          percent = calculateTaxFreeAllowance(value).percent;
          yearMonWeek = calculateTaxFreeAllowance(value).yearMonWeek;
        }

        if (item.label === "Total taxable") {
          percent =
            calculateGrossPay(value).percent -
            calculateTaxFreeAllowance(value).percent;
          yearMonWeek =
            calculateGrossPay(value).yearMonWeek -
            calculateTaxFreeAllowance(value).yearMonWeek;
        }

        if (item.label === "Total taxable") {
          percent =
            value < 12570
              ? 0
              : calculateGrossPay(value).percent -
                calculateTaxFreeAllowance(value).percent;
          yearMonWeek =
            value < 12570
              ? 0
              : calculateGrossPay(value).yearMonWeek -
                calculateTaxFreeAllowance(value).yearMonWeek;
        }

        const calculateT20Rate = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          if (value <= 12570) {
            percent = 0;
          } else if (value > 12570 && value <= 50270) {
            percent = Math.round((((value - 12571) * 0.2) / value) * 100);
            yearMonWeek = Math.round((value - 12571) * 0.2);
          } else if (value > 50270) {
            percent = Math.round((((50270 - 12571) * 0.2) / value) * 100);
            yearMonWeek = Math.round((50270 - 12571) * 0.2);
          }

          return { percent, yearMonWeek };
        };

        if (item.label === "20% rate") {
          percent = calculateT20Rate(value).percent;
          yearMonWeek = calculateT20Rate(value).yearMonWeek;
        }

        const calculateT40Rate = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          if (value < 50271) {
            // When value is less than 50271, both percent and yearMonWeek remain 0.
          } else if (value >= 50271 && value <= 125140) {
            percent =
              value <= 100000
                ? Math.round((((value - 50271) * 0.4) / value) * 100)
                : Math.round(
                    (((value - 50271 + (value - 100000) / 2) * 0.4) / value) *
                      100
                  );

            yearMonWeek =
              value <= 100000
                ? Math.round((value - 50271) * 0.4)
                : Math.round((value - 50271 + (value - 100000) / 2) * 0.4);
          } else if (value > 125140) {
            percent = Math.round(
              (((125140 - 50271 + 12570) * 0.4) / value) * 100
            );
            yearMonWeek = Math.round((125140 - 50271 + 12570) * 0.4);
          }

          // Return an object containing both percent and yearMonWeek
          return { percent, yearMonWeek };
        };

        if (item.label === "40% rate") {
          percent = calculateT40Rate(value).percent;
          yearMonWeek = calculateT40Rate(value).yearMonWeek;
        }

        const calculateT45Rate = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          if (value < 125140) {
            percent = 0;
          } else if (value >= 125140) {
            percent = Math.round((((value - 125140) * 0.45) / value) * 100);
            yearMonWeek = Math.round((value - 125140) * 0.45);
          }
          return { percent, yearMonWeek };
        };

        if (item.label === "45% rate") {
          percent = calculateT45Rate(value).percent;
          yearMonWeek = calculateT45Rate(value).yearMonWeek;
        }

        const calculateNationalInsurance = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          if (value < 12584) {
            percent = 0;
            yearMonWeek = 0;
          } else if (value >= 12584 && value <= 50284) {
            percent = (((value - 12584) * 0.1) / value) * 100;
            yearMonWeek = (value - 12584) * 0.1;
          } else if (value > 50284) {
            percent =
              (((50284 - 12584) * 0.1 + (value - 50284) * 0.02) / value) * 100;
            yearMonWeek = (50284 - 12584) * 0.1 + (value - 50284) * 0.02;
          }

          return { percent, yearMonWeek };
        };

        if (item.label === "National Insurance") {
          percent = parseFloat(
            calculateNationalInsurance(Math.floor(value)).percent.toFixed(2)
          );

          yearMonWeek = parseFloat(
            calculateNationalInsurance(Math.floor(value)).yearMonWeek.toFixed(2)
          );
        }

        const calculateTotalTaxDue = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          percent =
            calculateT20Rate(value).percent +
            calculateT40Rate(value).percent +
            calculateT45Rate(value).percent;
          yearMonWeek =
            calculateT20Rate(value).yearMonWeek +
            calculateT40Rate(value).yearMonWeek +
            calculateT45Rate(value).yearMonWeek;

          return { percent, yearMonWeek };
        };

        if (item.label === "Total Tax Due") {
          percent = calculateTotalTaxDue(value).percent;
          yearMonWeek = calculateTotalTaxDue(value).yearMonWeek;
        }

        const calculateTotalDeductions = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          percent =
            calculateTotalTaxDue(value).percent +
            calculateNationalInsurance(value).percent;

          yearMonWeek =
            calculateTotalTaxDue(value).yearMonWeek +
            calculateNationalInsurance(value).yearMonWeek;

          return { percent, yearMonWeek };
        };

        if (item.label === "Total Deductions") {
          percent = parseFloat(
            calculateTotalDeductions(value).percent.toFixed(2)
          );
          yearMonWeek = parseFloat(
            calculateTotalDeductions(value).yearMonWeek.toFixed(2)
          );
        }

        const calculateNetWage = (value) => {
          let percent = 0;
          let yearMonWeek = 0;

          percent =
            calculateGrossPay(value).percent -
            calculateTotalDeductions(value).percent;

          yearMonWeek =
            calculateGrossPay(value).yearMonWeek -
            calculateTotalDeductions(value).yearMonWeek;

          return { percent, yearMonWeek };
        };

        if (item.label === "Net Wage") {
          percent = parseFloat(calculateNetWage(value).percent.toFixed(2));
          yearMonWeek = parseFloat(
            calculateNetWage(value).yearMonWeek.toFixed(2)
          );
        }

        if (
          [
            "Gross Pay",
            "Tax Free Allowance",
            "Total taxable",
            "Total Tax Due",
            "20% rate",
            "40% rate",
            "45% rate",
            "National Insurance",
            "Total Deductions",
            "Net Wage",
          ].includes(item.label)
        ) {
          totalPercent += percent;
          totalYearly += yearMonWeek;
          totalMonthly += Math.round(yearMonWeek / 12);
          totalWeekly += Math.round(yearMonWeek / 52);

          return {
            ...item,
            percent: `${percent}%`,
            yearly: `£${yearMonWeek}`,
            monthly: `£${Math.round(yearMonWeek / 12)}`,
            weekly: `£${Math.round(yearMonWeek / 52)}`,
          };
        }

        return item;
      });

      return { ...state, summaryData: updatedSummaryData };
    case "Reset":
      // Return to initial state
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}
