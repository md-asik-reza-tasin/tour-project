import { Outlet, useLocation } from "react-router-dom";
import cover from "../assets/cover.png";
import Header from "../Components/Header";

export default function Home() {
  
  const location = useLocation()
  console.log(location);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60">
          
          
          {/* CONTENT */}
          <Header></Header>
          <Outlet></Outlet>
        
        
        </div>
      </div>
    </div>
  );
}
