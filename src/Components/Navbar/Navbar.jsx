import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import profile from '../../assets/user.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
      <li><NavLink to="/contact">Contact Us</NavLink></li>
      {user && <li><NavLink to="/update-profile">Update Profile</NavLink></li>}
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">
          My Dream <br />
          House
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">

        {
          

          user? 
          <div className="flex items-center">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                  <img src={user?.photoURL|| profile}/>
             </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-ghost btn-sm">{user?.displayName|| ""}</button>
              </li>
              <li>
                <button className="btn btn-ghost btn-sm">{user.email}</button>
              </li>
            </ul>
            </div>
            <div>
            <button onClick={handleLogOut} className="btn btn-ghost btn-sm">LogOut</button>
            </div>
          </div>
            
            :
            <Link to='/login'>
            <button className="btn btn-ghost btn-sm">Login</button>
            </Link>
        }


        {/* {user? (
          <div>
            {user.email}
            {user.photo}
            <button onClick={handleLogOut} className="btn ml-1">
              SignOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
