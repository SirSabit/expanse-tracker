import React from "react";
import axios from "axios";
import GeneralTotalExpanseCard from "../general-total-expanse-card-component/GeneralTotalExpanseCard";

function YearlyTotalExpanse() {
  var currentDate = new Date();
  const url = "https://localhost:3001/yearly-total-expanse";
  const [yearlyTotal, setYearlyTotal] = React.useState(null);
  var request = {
    year: currentDate.getFullYear(),
  };
  React.useEffect(() => {
    axios.post(url, request).then((res) => {
      console.log(res);
      setYearlyTotal(res.data.count);
      console.log(yearlyTotal);
    });
  });
  return (
    <GeneralTotalExpanseCard
      cardTitle={"Yearly Total Expanse"}
      cardBody={yearlyTotal}
    />
  );
}

export default YearlyTotalExpanse;
