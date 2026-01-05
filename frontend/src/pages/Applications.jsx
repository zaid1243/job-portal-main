import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h3 className="text-xl font-semibold">Your Resume</h3>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                  Select Resume
                </p>
                <input
                  className=""
                  type="file"
                  onChange={(e) => setResume(e.target.files[0])}
                  id="resumeUpload"
                  accept="application/pdf"
                  hidden
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2 "
                onClick={() => setIsEdit(false)}
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                href=""
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="txt-xl font-bold mb-4"> Jobs Apllied</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="max-md:text-sm">
            <tr>
              <th className="py-3 px-4 border-b text-left">Company </th>
              <th className="py-3 px-4 border-b text-left">Job Title </th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody className="max-md:text-xs">
            {jobsApplied.map((job, idx) =>
              true ? (
                <tr>
                  <td className="py-3 px-4 flex items-center gap-3 border-b ">
                    <img src={job.logo} alt="" className="max-md:scale-85" />
                    {job.company}
                  </td>
                  <td className="py-2 px-4 border-b ">{job.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {job.location}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={
                        job.status == "Accepted"
                          ? "bg-green-100 px-2 py-1 rounded-md inline-block max-sm:w-15 max-md:text-sm max-sm:text-xs w-25 text-center"
                          : job.status === "Rejected"
                          ? "bg-red-100 px-2 py-1 rounded-md inline-block max-sm:w-15 max-md:text-sm max-sm:text-xs w-25 text-center"
                          : "bg-purple-100  px-2 py-1 rounded-md inline-block max-sm:w-15 max-md:text-sm  max-sm:text-xs w-25 text-center"
                      }
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
