"use client";
import { setFnType, UserWithCompany } from "@/types/type";
import { useRouter } from "next/navigation";
import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AddJob } from "../../generated/prisma";

export const appContext = createContext<{
  user?: UserWithCompany | null;
  setUser?: (value: UserWithCompany | null) => void;
  userLoading?: boolean;
  setUserLoading?: setFnType;
}>({});

export default function AppContext({ children }: { children: ReactNode }) {

  // add company
  const [user, setUser] = useState<UserWithCompany | null>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);

  console.log("USER : ", user);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/api/currentUser`);
        // console.log("response of user : ", res);
        const data = await res.json();
        // console.log("data ; ", data);
        if (data.success) {
          setUser(data.data.user);
        }
        // console.log("current User message : ", data.message)
      } catch (error: any) {
        console.log("Error finding user : ", error.message);
      }
      setUserLoading(false);
    }
    getUser();
  }, []);

  return (
    <appContext.Provider
      value={{
        user,
        setUser,
        userLoading,
        setUserLoading,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export function useCustomHook() {
  return useContext(appContext);
}

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

// job filters
