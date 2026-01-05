import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../Context/AppContext";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import kconvert from "k-convert";
import moment from "moment";
import JobsCard from "./JobsCard";
import Footer from "./Footer";
const ApplyJob = () => {
  const { id } = useParams();
  const { jobs } = useContext(AppContext);
  const [jobData, setJobData] = useState(null);
  const navigate = useNavigate();
  const fetchJobData = () => {
    const data = jobs.filter((i) => i._id == id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobData();
    }
  }, [id, jobs]);
  return jobData ? (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen py-10 container px-4 sxl:px-20 mx-auto ">
        <div className="bg-white text-black rounded-lg w-full ">
          <div className="flex justify-center md:justify-between  flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl ">
            <div className="flex flex-col md:flex-row items-center ">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border "
                src={jobData.companyId.image}
                alt=""
              />
              <div className="text-center md:text-left text-neutral-700 ">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  {jobData.title}
                </h1>
                <div className="max-sm:scale-75 flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2 ">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.companyId.name}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC:{kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center ">
              <button className="bg-blue-500  p-2.5 px-10 text-white rounded ">
                Apply Now
              </button>
              <p className="mt-1 text-gray-600 ">
                Posted {moment(jobData.data).fromNow()}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Job Description</h2>
              <div
                className="font-semibold my-2"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button className="bg-blue-500  p-2.5 px-10 text-white rounded ">
                Apply Now
              </button>
            </div>
            {/* right section */}
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8  space-y-5">
              <h3>More Jobs fro {jobData.companyId.name}</h3>
              {jobs
                .filter(
                  (job) =>
                    job._id !== jobData._id &&
                    job.companyId._id === jobData.companyId._id
                )
                .filter((job) => true)
                .slice(0, 4)
                .map((job, idx) => (
                  <JobsCard key={idx} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
