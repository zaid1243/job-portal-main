import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";
const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [salary, setSalary] = useState("");

  // refs
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  //
  useEffect(() => {
    // initiate wuill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form className="container p-4 flex flex-col items-start gap-3 w-full">
      <div className="w-full">
        <p className="mb-2">Title</p>
        <input
          className="outline-none px-3 py-2 w-full max-w-lg bg-neutral-100 rounded-md border-2 border-gray-300"
          type="text"
          placeholder="Type Here"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full max-w-lg">
        <p className="mb-2">Job Description</p>
        <div ref={editorRef}></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full  items-start md:items-center sm:gap-8">
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className="outline-none border w-full px-3 py-2 border-gray-300 rounded  bg-neutral-100"
            name=""
            onChange={(e) => setCategory(e.target.value)}
            id=""
          >
            {JobCategories.map((item, idx) => {
              return (
                <option value={item} key={idx}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Location</p>
          <select
            className="outline-none border w-full px-3 py-2 border-gray-300 rounded  bg-neutral-100"
            name=""
            onChange={(e) => setLocation(e.target.value)}
            id=""
          >
            {JobLocations.map((item, idx) => {
              return (
                <option value={item} key={idx}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p className="mb-2">Job Level</p>
          <select
            className="outline-none border w-full px-3 py-2 border-gray-300 rounded  bg-neutral-100"
            name=""
            onChange={(e) => setLevel(e.target.value)}
            id=""
          >
            <option value="Beginner Level">Beginner Level</option>
            <option value="Intermediate Level">Intermediate Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>
        </div>
      </div>
      <div className="mb-2">
        <p>Job Salary</p>
        <input
          type="Number"
          placeholder="2500"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="outline-none bg-neutral-100 rounded-md w-full sm:w-[120px] px-3 py-2  border  border-gray-300 p-1"
        />
        {console.log(salary)}
      </div>
      <button className="max-sm:px-3 px-5 py-2  bg-black text-white font-medium rounded">
        Add Job
      </button>
    </form>
  );
};

export default AddJob;
