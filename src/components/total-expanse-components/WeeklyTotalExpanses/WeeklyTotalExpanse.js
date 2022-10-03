import GeneralTotalExpanseCard from "../general-total-expanse-card-component/GeneralTotalExpanseCard";
import React from "react";
import axios from "axios";

function WeeklyTotalExpanse() {
  const [weeklyTotal, setWeeklyTotal] = React.useState(null);
  const url = "https://localhost:3001/weekly-total-expanse";
  React.useEffect(() => {
    axios.get(url).then((res) => {
      setWeeklyTotal(res.data.count);
    });
  }, []);
  return (
    <GeneralTotalExpanseCard
      cardTitle={"Weekly Total Expanse"}
      cardBody={weeklyTotal}
    />
  );
}

export default WeeklyTotalExpanse;
