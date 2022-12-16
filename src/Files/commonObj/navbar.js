import { Link ,NavLink } from "react-router-dom";
// import useState from "react";

export default function Navbar(){
  let flag=false;
  function toggleShow(){
    if(flag){
      document.getElementById("navb").className+=" hidden";
      flag=false;
    }
    else{
      let str=document.getElementById("navb").className;
      str=str.slice(0,str.length-7);
      document.getElementById("navb").className=str;
      flag=true;
    }
    console.log(document.getElementById("navb").className);
  }
  return (
    <nav>
    <button onClick={toggleShow} className="fixed z-20 ml-[2.45rem] top-0 mt-[1.45rem] w-[100px] ml-[20px] rounded-[20px] active:scale-95 active:border-4 border-[#37BCF6]">
    <img src={require('./logoImg.jpg')} className="w-[100px] rounded-[20px] animate-pulse drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]" alt="LogoImg"/>
    </button>
    <div id="navb" className="navbar text-white glasseffect fixed flex justify-end w-[98vw] mx-[10px] my-[10px] top-0 p-[10px] z-10 h-[120px] hidden">
      <div id="navbarLinks" className="links flex relative NavSideBar:space-x-[80px] mt-[25px] text-[20px] font-black">
        <Link to="/Home" className="linkObj">
          <span className=" hover:text-twblue hover:transition-all">Home</span>
        </Link>
        <NavLink to="/Aboutme" className="linkObj">
          <span className=" hover:text-twblue hover:transition-all">
            About Me
          </span>
          </NavLink>
          <NavLink to="/Projects" className="linkObj">
          <span className=" hover:text-twblue hover:transition-all">
            Projects
          </span>
          </NavLink>
          <NavLink to="/ContactMe" className="linkObj">
          <span className=" hover:text-twblue hover:transition-all">
            Contact Me
          </span>
          </NavLink>
      </div>
    </div>
    </nav>
  );
};