import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleRegister = (e) => {
    e.preventDefault();

    createUser(emailRef.current.value, passwordRef.current.value)
      .then((r) => {
        console.log(r.user);
        toast.success("ACCOUNT CREATED!!");
        e.target.reset();
        navigate('/login/login')
      })
      .catch();
  };

  return (
    <div>
      <div className="hero mt-10">
        <div className="hero-content border mt-10 w-[700px] h-[750px] rounded-md">
          <div className="card w-full">
            <h1 className="ml-10 font-display2 font-extrabold text-2xl">
              Create an account
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-display2">First Name</span>
                </label>
                <input
                  ref={firstNameRef}
                  type="text"
                  className="border-t mt-2 h-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-display2">Last Name</span>
                </label>
                <input
                  ref={lastNameRef}
                  type="text"
                  className="border-t mt-2 h-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-display2">
                    Username or Email
                  </span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  className="border-t mt-2 h-10"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-display2">Passowrd</span>
                </label>
                <input
                  ref={passwordRef}
                  type="password"
                  className="border-t mt-2 h-10"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-display2">
                    Confirm Password
                  </span>
                </label>
                <input
                  ref={confirmPasswordRef}
                  type="text"
                  className="border-t mt-2 h-10"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="w-full h-[50px] bg-[#F9A51A] font-display2">
                  Register
                </button>
              </div>
            </form>
            <p className="font-display2 text-center">
              Already have an account?{" "}
              <Link to="/login/login" className="text-[#F9A51A] underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
