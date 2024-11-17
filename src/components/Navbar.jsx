import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);
  const links = (
    <>
      <li>
        <NavLink>News</NavLink>
      </li>
      <li>
        <NavLink>Destination</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar ${
        ["/"].includes(location.pathname)
          ? "bg-transparent text-white"
          : "bg-base-100"
      }`}
    >
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Travel Guru
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-3">
          <div>
            {user && user.photoURL && (
              <div>
                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
              </div>
            )}
          </div>
          <div>
            {user && user.displayName ? (
              <div className="flex items-center gap-3">
                <h6 className="font-semibold">
                  {user.displayName || "default user"}
                </h6>
                <button
                  onClick={logOutUser}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/auth/login"} className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
