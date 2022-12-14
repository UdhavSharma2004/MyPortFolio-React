import { Link ,NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <nav>
    <div className="navbar text-white  glasseffect fixed flex justify-end w-[98vw] mx-[10px] my-[10px] top-0 p-[10px] z-10 h-[120px]">
      <a href="#" className="fixed left-0">
        <img src={require('./logoImg.jpg')} className="w-[100px] ml-[20px] rounded-[20px] hover:scale-95 hover:border-4 border-[#37BCF6]"/>
      </a>
      <div className="links flex relative space-x-[80px] mt-[25px]  text-[20px] font-black">
        <Link to="/MyPortFolio-React/Home">
          <span className="hover:text-twblue hover:transition-all">Home</span>
        </Link>
        <NavLink to="/MyPortFolio-React/Aboutme">
          <span className="hover:text-twblue hover:transition-all">
            About Me
          </span>
          </NavLink>
          <NavLink to="/MyPortFolio-React/Projects">
          <span className="hover:text-twblue hover:transition-all">
            Projects
          </span>
          </NavLink>
          <NavLink to="/MyPortFolio-React/ContactMe">
          <span className="hover:text-twblue hover:transition-all">
            Contact Me
          </span>
          </NavLink>
      </div>
    </div>
    </nav>
  );
};