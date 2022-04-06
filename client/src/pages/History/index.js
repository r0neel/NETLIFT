import React from "react";
import { Title } from "../../components";
import CalenderComp from "../../components/Calender";

const History = () => (
  <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] flex flex-col">
    <Title text="History" />
    <div className=" flex-auto bg-nl-lightgrey">
      <CalenderComp />
    </div>
  </div>
);
export default History;
