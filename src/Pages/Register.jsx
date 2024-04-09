import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const[error,setError] = useState("")

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        console.log(name,email,photo,password)

        if(password.length<6){
            setError('password must be at least 6 character')
            return
        }
        if(!/^(?=.*[A-Z]).+$/.test(password)){
          setError('Must have an Uppercase letter in the password')
          return
        }
        if(!/^(?=.*[a-z]).+$/.test(password)){
          setError('Must have an Lowercase letter in the password')
          return
        }
        setError("")

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            setError(error.message.split("/")[1].split(")"))
        })


    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder=" Your photoURL"
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
              {
                error && <small className="text-red-600">{error}</small>
              }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center pb-3">Already have an account? <Link to='/login' className="text-blue-600 font-bold">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
