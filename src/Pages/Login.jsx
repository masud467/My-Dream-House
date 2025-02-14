import { useContext, useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, logInWithGoogle, logInWithGithub } =
    useContext(AuthContext);
    const [error,setError] =useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const form = location?.state || '/'

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setError("")

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(form)
      })
      .catch((error) => {
        console.error(error);
        setError('invalid email and password')
        // setError(error.message.split("/")[1].split(")"))
      });
  };

  const handleGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(form)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithub = () => {
    logInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate(form)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>My Dream House | login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div>
                {
                  error && <p className="text-red-800 font-bold">{error}</p>
                }
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center pb-3">
              Do not have an account?{" "}
              <Link to="/register" className="text-blue-600 font-bold">
                Register
              </Link>
            </p>
            <div className="flex justify-around mb-4">
              <button onClick={handleGoogle} className="btn btn-primary btn-sm btn-outline">
                Google
              </button>
              <button onClick={handleGithub} className="btn btn-primary btn-sm btn-outline">
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
