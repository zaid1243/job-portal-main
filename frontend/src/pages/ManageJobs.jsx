// import React from "react";
// import { manageJobsData } from "../assets/assets";
// import moment from "moment";

// const ManageJobs = () => {
//   return (
//     <div className="container p-4 max-w-5xl">
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm ">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
//               <th className="py-2 px-4 border-b text-left">Job Title</th>
//               <th className="py-2 px-4 border-b text-left max-sm:hidden">
//                 Date
//               </th>
//               <th className="py-2 px-4 border-b text-left max-sm:hidden">
//                 Location
//               </th>
//               <th className="py-2 px-4 border-b text-center">Applicants</th>
//               <th className="py-2 px-4 border-b text-left">Visible</th>
//             </tr>
//           </thead>
//         </table>
//         <tbody>
//           {manageJobsData.map((item, idx) => {
//             return (
//               <tr key={idx} className="text-gray-700 ">
//                 <td className="py-2 px-4 border-b max-sm:hidden">{idx + 1}</td>
//                 <td className="py-2 px-4 border-b ">{item.title}</td>
//                 <td className="py-2 px-4 border-b max-sm:hidden">
//                   {moment(item.date).format("ll")}
//                 </td>
//                 <td className="py-2 px-4 border-b max-sm:hidden">
//                   {item.location}
//                 </td>
//                 <td className="py-2 px-4 border-b text-center">
//                   {item.applicants}
//                 </td>
//                 <td className="py-2 px-4 border-b">
//                   <input type="checkbox" />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </div>
//     </div>
//   );
// };

// export default ManageJobs;

import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-2 px-4 border-b text-center">Applicants</th>
              <th className="py-2 px-4 border-b text-left">Visible</th>
            </tr>
          </thead>

          {/* ✅ tbody must be inside table */}
          <tbody>
            {manageJobsData.map((item, idx) => {
              return (
                <tr key={idx} className="text-gray-700">
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {idx + 1}
                  </td>
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {moment(item.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {item.location}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {item.applicants}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input type="checkbox" className="scale-125 ml-4" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end ">
        <button
          className="px-4 py-2 text-white bg-black rounded mt-4"
          onClick={() => navigate("/dashboard/add-job")}
        >
          Add Job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
