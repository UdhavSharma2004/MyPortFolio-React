export default function Home(){
  return (
    <div className="box flex text-white touch-pan-y bg-gradient-to-r from-twgS to-twgE mt-[5rem] font-normal text-[2rem] flex-wrap-reverse">
      <div className="leftcont w-auto text-center my-[20vh] ">
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
        <div className="logos flex space-x-[6vw] mt-[2.5rem] mx-[2rem]">
          <div className="homeIcons linkedIn hover:">
            <a href="https://www.linkedin.com/in/udhavsharma2004/" target={"_blank"} rel="noreferrer">
              <img
                className="w-[6rem] rounded-[1rem] hover:scale-95 hover:border-[0.25rem] border-[#37BCF6]"
                src={require("./linkedinlogo.jpg")}
                alt="logo"
              />
            </a>
          </div>
          <div className="homeIcons gitHub ">
            <a href="https://github.com/UdhavSharma2004" target={"_blank"} rel="noreferrer">
              <img
                className="w-[6rem] rounded-[1rem] hover:scale-95 hover:border-[0.25rem] border-[#37BCF6]"
                src={require("./githubImg.jpg")}
                alt="logo"
              />
            </a>
          </div>
          <div className="homeIcons instaGram ">
            <a href="https://www.instagram.com/udhavsharma04/" target={"_blank"} rel="noreferrer">
              <img
                className="w-[6rem] rounded-[1rem] hover:scale-95 hover:border-[0.25rem] border-[#37BCF6]"
                src={require("./instagramlogo.jpg")}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="rightcont flex flex-col justify-center items-center">
        <div className="profileImg ">
          <img
            className="PImage flex flex-col justify-center items-center rounded-[1rem] mt-[3.75rem] max-w-[24rem]"
            src={require("./NewProfileImg.jpg")}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};
