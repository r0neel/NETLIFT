import React, { useState, useEffect } from "react";
import Calender from "react-calendar";
import dayjs from "dayjs";
const CalenderComp = () => {
  const [date, setDate] = useState(new Date());
  const [dayjsDate, setDayjsDate] = useState(dayjs(date.toJSON()));
  // This just converts the date to a dayjs one for easier formatting
  useEffect(() => {
    setDayjsDate(dayjs(date.toJSON()));
    console.log(dayjsDate);
  }, [date]);

  return (
    <>
      <Calender onChange={setDate} value={date} />
      <p className="text-center">
        <span className="bold">Selected Date:</span>{" "}
        {dayjsDate.format("D MMM YYYY")}
      </p>
    </>
  );
};

export default CalenderComp;
