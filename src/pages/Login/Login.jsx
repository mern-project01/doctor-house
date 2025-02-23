import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../components/AuthContext/UserContex";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/Firebase.init";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const { User, Err, setUser, setError, handleGoogle } = useContext(AuthContex);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        if (User.dislpayName) {
          alert(`New User Name is ${User?.dislpayName}`);
        }
      })
      .catch((err) => setError(err));

    console.log(User);
  };

  return (
    <div id="Login">
      <div>
        <div className="hero min-h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center pt-8 text-3xl text-accent">
              {User?.displayName || Err} Login
            </h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
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
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-xl link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-[16px]">Login</button>
              </div>
            </form>
            <div>
              <NavLink
                to="/singup"
                href="#SingUp"
                className="text-center text-lg block link link-hover"
              >
                <span className="text-accent pe-2">New to Doctors Portal?</span>
                <span className="text-secondary">Create new account</span>
              </NavLink>

              <div className="grid grid-cols-3 py-5">
                <hr className=""></hr>
                <h1 className="text-center -mt-3">OR</h1>
                <hr></hr>
              </div>
              <div className="pb-5  text-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline outline-slate-600 "
                >
                  CONTINUE WITH GOOGLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
