import { Link ,NavLink } from "react-router-dom";
// import useState from "react";

export default function Navbar(){
  let objID=document.getElementById("navb");
  let value="";
  if(objID!=null){
  value=objID.className;
  }
  let flag=true;
  function toggleShow() {
    if(flag){
    objID.className="hidden";
    flag=false;
  }
  else{
      objID.className=value;
      flag=true;
    }
  }
  return (
    <nav>
    <button onClick={toggleShow} className="fixed z-20 ml-[2.45rem] top-0 mt-[1.45rem] w-[100px] ml-[20px] rounded-[20px] active:scale-95 active:border-4 border-[#37BCF6]">
    <img src={require('./logoImg.jpg')} className="w-[100px] rounded-[20px] " alt="LogoImg"/>
    </button>
    <div id="navb" className="navbar text-white glasseffect fixed top-0 flex justify-end w-[98vw] mx-[10px] my-[10px] top-0 p-[10px] z-10 h-[120px]">
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