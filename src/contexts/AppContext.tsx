"use client";
import { jobData } from "@/constants/data";
import { useRouter } from "next/navigation";
import React, { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import {User, Company, AddJob} from '../../generated/prisma'

type UWC = User & {company : Company}

export const appContext = createContext<{
  user?: User & { company : Company } | null, 
  setUser? : (value : UWC | null) => void, 
  jobDataArray? : AddJob[] | null,
  setJobDataArray? : (value : AddJob[] | null) => void, 

}> ({});

export default function AppContext({ children } : {children : ReactNode}) {
  const [jobDataArray, setJobDataArray] = useState<AddJob[] | null>([]);
  const [searchedInput, setSearchedInput] = useState<string>("");
  const [savedJobs, setSavedjobs] = useState([]);
  const [jobDetailsArray, setJobdetailsArray] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");

  // useEffect(() => {
  //   async function fetchingData() {
  //     const url =
  //       `https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=${currPage}&num_pages=1&country=us&date_posted=all`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "6e366ceeecmshac5bba3b5049f5cp17e200jsn8b2a801be038",
  //         "x-rapidapi-host": "jsearch.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       const resultsArray = result.data;
  //       console.log("resultsArray : ", resultsArray);
  //       setJobDataArray([]);
  //       setJobDataArray(resultsArray);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchingData();
  // }, [currPage]);

  // useEffect(() => {
  //   async function fetchingData() {
  //     setIsLoading(true); // laoding start
  //     const url =
  //       `https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all`;
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "91fcd6a6d4mshd496a62b1d6b349p14bcfejsn1659c14bfedc",
  //         "x-rapidapi-host": "jsearch.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       const resultsArray = result.data;
  //       setJobDataArray(resultsArray);
  //       // console.log("results : ", resultsArray);
  //     } catch (error) {
  //       console.error("error message : ", error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchingData();
  // }, []);

  // useEffect(() => setJobDataArray(jobData), []);

  // useEffect(() => {
  //   const savedInlocal =
  //     JSON.parse(localStorage.getItem("savedJobsInLocal")) || [];
  //   setSavedjobs(savedInlocal);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("savedJobsInLocal", JSON.stringify(savedJobs));
  // }, [savedJobs]);

  // function saveJobsFn(job) {
  //   console.log("job in fn ; ", job);

  //   const existingJob =
  //     savedJobs.length != 0
  //       ? savedJobs?.find((j) => j?.job_id === job.job_id)
  //       : undefined;
  //   if (!existingJob) {
  //     setSavedjobs([...savedJobs, job]);
  //   } else alert("Job already saved!");
  // }
  // console.log("savedJobs : ", savedJobs);

  // function removeJobsFn(job : AddJob) {
  //   const filteredJobs = savedJobs.filter((j) => j.job_id !== job.job_id);
  //   setSavedjobs(filteredJobs);
  // }

  // job form
  const [isAddJobFormOpen, setIsAddJobFormOpen] = useState(false);

  // job filters
  const [employmentType, setEmploymentType] = useState<string>("Full-time");
  const [jobType, setJobType] = useState<string>("Remote");
  const [salary, setSalary] = useState<number>(1000);
  const [currPage, setCurrPage] = useState<number>(1);

  async function fetchJobFilterData() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/jobSearch/?employmentType=${employmentType}&jobType=${jobType}&salary=${salary}&page=${currPage}`
      );
      // console.log("res ", res);
      const data = await res.json();
      // console.log("data ", data);
      setJobDataArray(data.dataArray);
      // console.log("Data Array after filtering ", data.dataArray);
    } catch (error : any) {
      console.log("Error fetching data", error.message);
    }
  }

  useEffect(() => {
    fetchJobFilterData();
  }, [currPage]);

  const router = useRouter();
  function handleJobFilterForm(e : FormEvent) {
    e.preventDefault();
    const url = `http://localhost:3000/jobSearch/?employmentType=${employmentType}&jobType=${jobType}&salary=${salary}&page=1`;
    router.push(url);
    fetchJobFilterData();
  }

  // add company
  // const [isAddJobFormOpen, setIsAddJobFormOpen] = useState(false);

  // logged in user 
    const [user, setUser] = useState<UWC | null>(null);

    console.log("USER : ", user)
  
    useEffect(() => {
      async function getUser() {
        try {
          const res = await fetch("http://localhost:3000/api/currentUser");
          // console.log("response of user : ", res);
          const data = await res.json();
          // console.log("data ; ", data); 
          if(data.success){
            setUser(data.data.user);
          }
          // console.log("current User message : ", data.message)
        } catch(error : any) {
            console.log("Error finding user : ", error.message)
        }
      }
      getUser();
    }, []);

  return (
    <appContext.Provider
      value={{
        jobDataArray,
        setJobDataArray,
        searchedInput,
        setSearchedInput,
        // savedJobs,
        // setSavedjobs,
        // saveJobsFn,
        // removeJobsFn,
        jobDetailsArray,
        setJobdetailsArray,
        isLoading,
        setIsLoading,
        formError,
        setFormError,
        currPage,
        setCurrPage,
        isAddJobFormOpen,
        setIsAddJobFormOpen,
        employmentType,
        setEmploymentType,
        jobType,
        setJobType,
        salary,
        setSalary,
        handleJobFilterForm, 
        user, 
        setUser,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export function useCustomHook() {
  return useContext(appContext);
}
