import { useContext } from "react";
import { GiDuffelBag } from "react-icons/gi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";

export default function Header() {
  const location = useLocation();
  const { userId } = useContext(AuthContext);
  console.log(location);


  const handleSignOut = () => {
    signOut(auth)
    .then()
    .catch()
  }

  return (
    <div className="flex items-center justify-between w-[1440px]  mx-auto mt-10 gap-14">
      {/* LOGO */}

      {location.pathname.endsWith("/") ? (
        <>
          <Link to="/">
            <div className="flex items-center gap-1 text-5xl">
              <GiDuffelBag className="text-white" />
              <p className="text-white font-display1 font-semibold">TRAVEL</p>
            </div>
          </Link>
        </>
      ) : (
        <Link to="/">
          <div className="flex items-center gap-1 text-5xl">
            <GiDuffelBag className="text-black" />
            <p className="text-black font-display1 font-semibold">TRAVEL</p>
          </div>
        </Link>
      )}

      {/* SEARCH BAR */}
      <div>
        {location.pathname.endsWith("/") && (
          <label className="border-none px-2 bg-[#FFFFFF] opacity-50 flex items-center gap-2">
            <input
              type="text"
              className="w-[350px] h-[44px]"
              placeholder="Search your destination"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        )}
      </div>

      {/* NAVBAR ROUTE */}
      {location.pathname.endsWith("/") ? (
        <>
          <div className="flex items-center justify-center text-white font-display2 gap-16">
            <NavLink> News </NavLink>
            <NavLink> Destination </NavLink>
            <NavLink> Blog </NavLink>
            <NavLink> Contact </NavLink>
            {userId ? (
              <>
                <Link
                  onClick={handleSignOut}
                  to="/login/login"
                  className="w-[104px] h-[44px] bg-[#F9A51A] rounded-md text-black text-center pt-2.5"
                >
                  {" "}
                  Sign Out{" "}
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login/login"
                  className="w-[104px] h-[44px] bg-[#F9A51A] rounded-md text-black text-center pt-2.5"
                >
                  {" "}
                  Log in{" "}
                </Link>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center text-black font-display2 gap-16">
            <NavLink> News </NavLink>
            <NavLink> Destination </NavLink>
            <NavLink> Blog </NavLink>
            <NavLink> Contact </NavLink>
            <Link
              to="/login"
              className="w-[104px] h-[44px] bg-[#F9A51A] rounded-md text-black text-center pt-2.5"
            >
              {" "}
              Login{" "}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
