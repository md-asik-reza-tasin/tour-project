import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

export default function Signin() {
  
    const {logIn} = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
       
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        logIn(email, password)
        .then(r => {
            navigate('/')
            toast('LOG IN SUCCESSFULLY')
        })
        .catch()
    }

  return (
    <div>
      <div className="hero mt-16">
        <div className="hero-content border mt-10 w-[570px] h-[500px] rounded-md">
          <div className="card w-full">
            <h1 className="ml-10 font-display2 font-extrabold text-2xl">
              LOG IN
            </h1>
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-display2">
                    Username or Email
                  </span>
                </label>
                <input ref={emailRef} type="email" className="border-t mt-2 h-10" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-display2">Passowrd</span>
                </label>
                <input ref={passwordRef} type="password" className="border-t mt-2 h-10" />
              </div>
              <div className="flex justify-between">
                <p className="font-display2">
                  Remember me{" "}
                  <span>
                    <input type="checkbox" />
                  </span>
                </p>
                <p className="flex justify-end text-[#F9A51A] underline font-display2">
                  Forget password?
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="w-full h-[50px] bg-[#F9A51A] font-display2">
                  Login
                </button>
              </div>
            </form>
            <p className="font-display2 text-center">
              Don’t have an account?{" "}
              <Link to="/login/register" className="text-[#F9A51A] underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
