export const rules = [
  {
    name: "Valuation Fee Paid",
    key: "isValuationFeePaid",
    validate: (data) => data.isValuationFeePaid === true,
  },
  {
    name: "UK Resident",
    key: "isUkResident",
    validate: (data) => data.isUkResident === true,
  },
  {
    name: "Risk Rating Medium",
    key: "riskRating",
    validate: (data) => data.riskRating === "Medium",
  },
  {
    name: "LTV Below 60%",
    key: "LTV",
    validate: (data) => {
      const loanRequiredAmt = parseFloat(
        data.mortgage.loanRequired.replace(/[£,]/g, "")
      );

      const purchasePrice = parseFloat(
        data.mortgage.purchasePrice.replace(/[£,]/g, "")
      );
      const LTV = (loanRequiredAmt / purchasePrice) * 100;
      return LTV < 60;
    },
  },
];
