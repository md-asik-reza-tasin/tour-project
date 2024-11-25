import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header";

export default function Login() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div>
        <Header></Header>
      </div>

      {/* Form */}
      
      <Outlet></Outlet>
      
    </div>
  );
}
