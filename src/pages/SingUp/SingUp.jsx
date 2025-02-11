import React from 'react';
import { NavLink } from 'react-router-dom';

const SingUp = () => {
  const handleSubmite = (event) => {
    event.preventDefualt()
  }
    return (
      <div id='SingUp'>
        <div className="hero min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center pt-8 text-3xl text-slate-500 ">Create a new acount here--</h1>
            <form onClick={handleSubmite} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name='name'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-[16px]">Resister</button>
              </div>
            </form>
            <div>
              <NavLink
                to='/login'
                className="text-center text-lg block link link-hover"
              >
                <span className="text-accent pe-2">Already have an acount?</span>
                <span className="text-secondary">Login</span>
              </NavLink>

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
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingUp;