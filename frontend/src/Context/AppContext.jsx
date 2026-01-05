import React, { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);

  const value = {
    searchFilter,
    setSearchFilter,
    showRecruiterLogin,
    setShowRecruiterLogin,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
  };

  const fetchJobs = () => {
    setJobs(jobsData);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
