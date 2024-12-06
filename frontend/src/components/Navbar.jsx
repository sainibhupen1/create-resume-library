import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const authsign = localStorage.getItem("learningsignup");
  const authlogin = localStorage.getItem("learninglogin");

  const users = async () => {
    const res = JSON.parse(authlogin);

    if (res) {
      setUser(res.users.name);
    }
  };

  useEffect(() => {
    users();
  });

  const logouthandler = () => {
    localStorage.clear();
  };
  return (
    <div>
      <div className="">
        <ul className="flex  p-5 bg-[#e99ad5] fixed w-screen">
          <Link to="/" className="mr-5 font-bold text-lg">
            Home
          </Link>
          <Link to="/profile" className="mr-5 font-bold text-lg">
            Profile
          </Link>
          {authlogin && (
            <>
              {" "}
              <Link to="/addbooks" className="mr-5 font-bold text-lg">
                AddBooks
              </Link>
              <Link to="/storeroom" className="mr-5 font-bold text-lg">
                StoreBook
              </Link>{" "}
              <Link to="/createresume" className="mr-5 font-bold text-lg">
                CreateResume
              </Link>{" "}
              <Link to="/resume" className="mr-80 font-bold text-lg">
                Resume
              </Link>{" "}
            </>
          )}

          {authlogin && authsign ? (
            <Link
              onClick={logouthandler}
              to="/login"
              className="mr-5 font-bold text-lg "
            >
              Log out ({user})
            </Link>
          ) : authlogin ? (
            <Link
              onClick={logouthandler}
              to="/login"
              className=" font-bold text-lg"
            >
              Log out ({user})
            </Link>
          ) : authsign ? (
            <>
              <Link to="/login" className="mr-5 font-bold text-lg">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className="mr-5 font-bold text-lg">
                Signup
              </Link>
              <Link to="/login" className="mr-5 font-bold text-lg">
                Login
              </Link>
            </>
          )}
        </ul>
      </div>

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Navbar;
