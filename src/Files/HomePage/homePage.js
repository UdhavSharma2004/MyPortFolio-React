export default function Home(){
  return (
    <div className="box flex text-white bg-gradient-to-r from-twgS to-twgE w-[95vw] mt-[80px] font-normal text-[50px] flex-wrap-reverse">
      <div className="ml-[100px] mt-[100px]">
        {/* name + connect-with-me + 3 icons*/}
        {/* Name */}
        <div className="myself">
          <p>
            Hey ! I’m <span className="text-twblue">Udhav Sharma</span>,
            <br></br>CSE Sophomore @<span className="text-twblue">GZSCCET</span>
          </p>
        </div>
        <div className="connection">
          <p>
            <br></br>Connect with me here -
          </p>
        </div>
        <div className="logos flex space-x-[75px] mt-[45px] mx-[30px]">
          <div className="homeIcons linkedIn hover:">
            <a href="https://www.linkedin.com/in/udhavsharma2004/" target={"_blank"}>
              <img
                className="w-[100px] rounded-[20px] hover:scale-95 hover:border-4 border-[#37BCF6]"
                src={require("./linkedinlogo.jpg")}
                alt="logo"
              />
            </a>
          </div>
          <div className="homeIcons gitHub ">
            <a href="https://github.com/UdhavSharma2004" target={"_blank"}>
              <img
                className="w-[100px] rounded-[20px] hover:scale-95 hover:border-4 border-[#37BCF6]"
                src={require("./githubImg.jpg")}
                alt="logo"
              />
            </a>
          </div>
          <div className="homeIcons instaGram ">
            <a href="https://www.instagram.com/udhavsharma04/" target={"_blank"}>
              <img
                className="w-[100px] rounded-[20px] hover:scale-95 hover:border-4 border-[#37BCF6]"
                src={require("./instagramlogo.jpg")}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="rightcont">
        <div className="profileImg  w-[45vw] flex justify-center">
          <img
            className="w-[412px] h-[550px] rounded-[20px] mt-[60px]"
            src={require("./ProfileImg.jpg")}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
