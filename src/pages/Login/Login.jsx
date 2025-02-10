import React from "react";
import { NavLink } from "react-router-dom";


const Login = () => {
  

  return (
    <div id="Login">
  
      <div>
        <div className="hero min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center pt-8 text-3xl text-accent">Login</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                   placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-[16px]">Login</button>
              </div>
            </form>
            <NavLink to="/singup">
              <a
                href="#SingUp"
                className="text-center text-[12px] block link link-hover"
              >
                <span className="text-accent pe-2">New to Doctors Portal?</span>
                <span className="text-secondary">Create new account</span>
              </a>

              <div className="grid grid-cols-3 py-5">
                <hr className=""></hr>
                <h1 className="text-center -mt-3">OR</h1>
                <hr></hr>
              </div>
              <div className="pb-5  text-center">
                <button className="btn btn-outline outline-slate-600 ">
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </NavLink>
          </div>
        </div>
      </div>{" "} 
    </div>
  );
};

export default Login;
