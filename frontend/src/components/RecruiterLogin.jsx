import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import AppContext from "../Context/AppContext";

const RecruiterLogin = () => {
  // context states
  const { setShowRecruiterLogin } = useContext(AppContext);

  // component states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("Login");
  const [image, setImage] = useState("");
  const [isTextDataSubmitted, setIsTextDataSumitted] = useState(false);

  // form submit handler

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state == "SignUp" && !isTextDataSubmitted) {
      setIsTextDataSumitted(true);
    }
  };

  // the auth page gets scrolled by bg to handle it we r adding effect on page first render

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      // console.log("component unmOunt"); //-----------------------********IMP*********-----------------------
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative p-10 rounded-xl bg-white text-slate-500 "
      >
        <h1 className="text-center text-2xl font-medium text-neutral-700">
          Recruiter {state}
        </h1>
        <p className="text-sm">WellCome Back Plz sign in to continue</p>
        {state === "SignUp" && isTextDataSubmitted ? (
          <>
            <div className="flex items-center gap-4 my-5">
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                  className="w-16 h-16 object-cover rounded-full"
                />
                <input
                  type="file"
                  hidden
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
              <p>
                Upload Company <br />
                Logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="flex items-center px-4 py-2 gap-2 border mt-5 rounded-full ">
                <img src={assets.person_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  type="text"
                  name=""
                  id=""
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="flex items-center px-4 py-2 gap-2 border mt-5 rounded-full ">
              <img src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm"
                type="text"
                name=""
                id=""
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center px-4 py-2 gap-2 border mt-5 rounded-full ">
              <img src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm"
                type="text"
                name=""
                id=""
                required
                placeholder="Password Icon"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </>
        )}
        {state == "Login" && (
          <p className="text-sm text-blue-600 my-3 cursor-pointer">
            Forget Password ?
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-full mt-5"
        >
          {state == "Login"
            ? "login"
            : isTextDataSubmitted
            ? "create account"
            : "Next"}
        </button>
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Dont Have an Account{" "}
            <span
              className="mt-5 text-center text-blue-500 cursor-pointer"
              onClick={() => setState("SignUp")}
            >
              Signup
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already Have an Account{" "}
            <span
              className="mt-5 text-center text-blue-500 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
        <img
          onClick={() => setShowRecruiterLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5"
          alt=""
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
