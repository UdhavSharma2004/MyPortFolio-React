import { Link ,NavLink,useLocation} from "react-router-dom";
import React, { useEffect, useRef} from 'react'
export default function Navbar(){
  let arr=["/Home","/Aboutme","/Projects","/ContactMe"];
  const btnRef = useRef();
  const navRef = useRef();
  function toggleShow(){
    console.log(document.getElementById("navb").classList)
    document.getElementById("navb").classList.toggle("invisible");
    console.log(document.getElementById("navb").className);
  }
  let loc=useLocation().pathname;
  // console.log(loc);
  const variable=document.getElementById(loc);
  // console.log(loc);
  for(let i=0;i<4;i++){
    if(document.getElementById(arr[i])!==null){
      document.getElementById(arr[i]).classList.remove("text-twblue");
    }
  }
  if(loc==="/"){
    if(document.getElementById("/Home")!==null){
      document.getElementById("/Home").classList.add("text-twblue");
    }
  }
  else{
  if(variable!==null){
  // console.log(variable.classList);
  variable.classList.add("text-twblue");
  }
}
  useEffect(() => {
    function handler(event) {
      if(!navRef.current?.contains(event.target)&&!btnRef.current?.contains(event.target)) {
        if(!document.getElementById("navb").classList.contains("invisible")){
          document.getElementById("navb").classList.add("invisible");
          console.log("this is the time to turn off");
          }
        }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
}, [])

  return (
    <nav>
    <button onClick={toggleShow} id="toggleBtn" className="fixed z-20 ml-[2.45rem] top-0 mt-[1.45rem] w-[6rem] rounded-[1rem] active:scale-95 active:border-4 border-[#37BCF6]">
    <img ref={btnRef} src={require('./logoImg.jpg')} id="toggleImg" className="w-[100px] rounded-[20px] animate-pulse drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]" alt="LogoImg"/>
    </button>
    <div id="navb" ref={navRef} className="navbar box text-white glasseffect fixed flex justify-end w-[98vw] mx-[10px] my-[10px] top-0 p-[10px] z-10 h-[120px] invisible">
      <div id="navbarLinks" className="links flex relative NavSideBar:space-x-[80px] mt-[25px] text-[20px] font-black">
        <Link to="/Home" className="linkObj">
          <span id="/Home" className=" hover:text-twblue hover:transition-all">Home</span>
        </Link>
        <NavLink to="/Aboutme" className="linkObj">
          <span id="/Aboutme" className=" hover:text-twblue hover:transition-all">
            About Me
          </span>
          </NavLink>
          <NavLink to="/Projects" className="linkObj">
          <span id="/Projects" className=" hover:text-twblue hover:transition-all"> 
            Projects
          </span>
          </NavLink>
          <NavLink to="/ContactMe" className="linkObj">
          <span id="/ContactMe" className=" hover:text-twblue hover:transition-all">
            Contact Me
          </span>
          </NavLink>
      </div>
    </div>
    </nav>
  );
};
