import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [user, setUser] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  }, []);

  const logouthandler = () => {
    localStorage.clear();
    setUser("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="bg-[#e99ad5] fixed top-0 w-full z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-lg font-bold">
                Home
              </Link>
              <Link to="/profile" className="text-lg font-bold">
                Profile
              </Link>
              {authlogin && (
                <>
                  <Link to="/addbooks" className="text-lg font-bold">
                    AddBooks
                  </Link>
                  <Link to="/storeroom" className="text-lg font-bold">
                    StoreBook
                  </Link>
                  <Link to="/createresume" className="text-lg font-bold">
                    CreateResume
                  </Link>
                  <Link to="/resume" className="text-lg font-bold">
                    Resume
                  </Link>
                </>
              )}

              {authlogin && authsign ? (
                <Link
                  onClick={logouthandler}
                  to="/login"
                  className="text-lg font-bold"
                >
                  Log out ({user})
                </Link>
              ) : authlogin ? (
                <Link
                  onClick={logouthandler}
                  to="/login"
                  className="text-lg font-bold"
                >
                  Log out ({user})
                </Link>
              ) : authsign ? (
                <Link to="/login" className="text-lg font-bold">
                  Login
                </Link>
              ) : (
                <>
                  <Link to="/signup" className="text-lg font-bold">
                    Signup
                  </Link>
                  <Link to="/login" className="text-lg font-bold">
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-lg font-bold">
              Home
            </Link>
            <Link to="/profile" className="block text-lg font-bold">
              Profile
            </Link>
            {authlogin && (
              <>
                <Link to="/addbooks" className="block text-lg font-bold">
                  AddBooks
                </Link>
                <Link to="/storeroom" className="block text-lg font-bold">
                  StoreBook
                </Link>
                <Link to="/createresume" className="block text-lg font-bold">
                  CreateResume
                </Link>
                <Link to="/resume" className="block text-lg font-bold">
                  Resume
                </Link>
              </>
            )}

            {authlogin && authsign ? (
              <Link
                onClick={logouthandler}
                to="/login"
                className="block text-lg font-bold"
              >
                Log out ({user})
              </Link>
            ) : authlogin ? (
              <Link
                onClick={logouthandler}
                to="/login"
                className="block text-lg font-bold"
              >
                Log out ({user})
              </Link>
            ) : authsign ? (
              <Link to="/login" className="block text-lg font-bold">
                Login
              </Link>
            ) : (
              <>
                <Link to="/signup" className="block text-lg font-bold">
                  Signup
                </Link>
                <Link to="/login" className="block text-lg font-bold">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-16 flex-1">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Navbar;
