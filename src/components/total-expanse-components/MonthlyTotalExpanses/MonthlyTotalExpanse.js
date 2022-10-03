import React from "react";
import axios from "axios";
import GeneralTotalExpanseCard from "../general-total-expanse-card-component/GeneralTotalExpanseCard";

function MonthlyTotalExpanse() {
  const [monthlyTotal, setMonthlyTotal] = React.useState(null);
  const url = "https://localhost:3001/monthly-total-expanse";
  var currentDate = new Date();
  var request = {
    month: currentDate.getMonth() + 1,
  };
  React.useEffect(() => {
    axios.post(url, request).then((res) => {
      setMonthlyTotal(res.data.count);
    });
  }, []);
  return (
    <GeneralTotalExpanseCard
      cardTitle={"Monthly Total Expanse"}
      cardBody={monthlyTotal}
    />
  );
}

export default MonthlyTotalExpanse;
