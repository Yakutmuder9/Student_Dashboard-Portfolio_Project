import { useState } from "react";
import user from "../../app/assets/images/user.svg";
import login from "../../app/assets/images/login.svg";
import cool from "../../app/assets/images/cool.svg";
import un from "../../app/assets/images/un.png";
import { useParams, useNavigate } from "react-router-dom";

import "./login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Dashboard from "../../Dashboard/Dashboard";

const LoginPage = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [roller, setRoller] = useState(false);

  let navigate = useNavigate();
  let { username } = useParams();
  const handleSubmit = (values) => {
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
    };
    console.log(comment);
    setModalOpen(false);
  };

  function signUpRollerStyles(){
    // e.target.prventDefault()
    setRoller(!roller);
  }


  return (
    <div className="row shadow-lg rounded-circle vw-100 vh-100">
      <div className="col d-none d-xl-block">
        <div
          className={
            roller
              ? "rollerTransition roller d-flex justify-content-end"
              : "roller d-flex"
          }
          id="LoginRoller"
        >  <h1 className="newUser d-block position-absolute text-dark">Hellow world</h1>
        </div>

        <div
          className="position-absolute col container border text-center  d-flex flex-column justify-content-center align-items-center mt-5  px-5 w-50  "
          id="signUpPositioning"
        >
          <div className=" pt-5 text-center scroll-none ms-4 mb-3 " id="right-cont">
            <h1 className="text-dark bolder">Sign Up</h1>
            <form className="ms-5 ps-5">
              <div className="form-group d-flex text-start">
                <div>
                  <label for="signupFirsttname" className="text-dark">
                    First Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="signupFirsttname"
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                  />
                </div>
                <div className="ms-2 ">
                  <label for="signupLasttname" className="text-dark">
                    Last Name
                  </label>
                  <input
                    type="email"
                    className="form-control "
                    id="signupLasttname"
                    aria-describedby="emailHelp"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group  text-start">
                <label for="exampleInputEmail1" className="text-dark">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text ">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group text-start">
                <label for="exampleInputPassword1" className="text-dark">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <p className="text-dark text-start ps-2 ">
                {" "}
                Alrady user?{" "}
                <span role='button' onClick={signUpRollerStyles}className="text-primary" >
                  Login
                </span>
              </p>

              <div>
                <button
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                  type="submit"
                  className="btn btn-primary text-white w-100 py-2"
                >
                  Sing Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="signupImage">
          <img className="cool mt-5 pt-5 " src={cool} alt="" />
        </div>
      </div>

      <div
        className="col card container border text-center  d-flex flex-column justify-content-center align-items-center mb-5  px-5 w-50 "
        id="signupSide"
      >
        <div className="pb-5 pe-5 text-center  scroll-none  w-10" id="right-cont">
          <h1 className="text-dark bolder">Sign in</h1>
          <form className="">
            <div className="form-group  text-start">
              <label htmlFor="exampleInputEmail1" className="text-dark">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text ">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group text-start">
              <label htmlFor="exampleInputPassword1" className="text-dark">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <p className="text-dark text-start ps-2 ">
              New here?{" "}
              <span role="button" className="text-primary" onClick={signUpRollerStyles}>
                Sign Up
              </span>
            </p>
            <div className=" form-group form-check text-start mt-3 mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-dark text-sm-white ps-2"
                id="checkboxLabel"
                for="exampleCheck1"
               
              >
                Remember me
              </label>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate("/dashboard");
                }}
                type="submit"
                className="btn btn-primary text-white w-100 py-2"
              >
                Login
              </button>
            </div>
            <h5 className="text-dark pt-2">Or</h5>
            <div>
              <button className="btn btn-primary mt-3  text-white w-100 py-2">
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
