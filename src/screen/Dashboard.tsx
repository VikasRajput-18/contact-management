import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAllWorldCases,
  fetchCasesWithDate,
  fetchCountryCases,
} from "../utils/product";

import LineChart from "../components/LineChart";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { isSidebarOpen } = useSelector((state: any) => state.contact);
  const {
    isError: isError1,
    isSuccess: isSuccess1,
    isLoading: isLoading1,
    data: data1,
    error: error1,
  } = useQuery(["worldCases"], fetchAllWorldCases, {
    staleTime: 6000,
  });
  const {
    isError: isError2,
    isSuccess: isSuccess2,
    isLoading: isLoading2,
    data: data2,
    error: error2,
  } = useQuery(["countryCases"], fetchCountryCases, {
    staleTime: 6000,
  });
  const {
    isError: isError3,
    isSuccess: isSuccess3,
    isLoading: isLoading3,
    data: data3,
    error: error3,
  } = useQuery(["casesWithDate"], fetchCasesWithDate, {
    staleTime: 6000,
  });

  return (
    <section
      className="px-8 flex z-40 contactList"
      style={{
        marginTop: "5rem",
        marginLeft: isSidebarOpen ? "300px" : 0,
      }}
    >
      <LineChart data={data1} />,
    </section>
  );
};

export default Dashboard;
