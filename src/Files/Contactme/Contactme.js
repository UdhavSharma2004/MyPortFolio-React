import EmailJS from "./EmailJsWork";
export default function ContactMe(){
    return (
        // touch-pan-y
        <div className="text-white  bg-gradient-to-r flex flex-wrap from-twgS to-twgE mt-[150px]">
            <div className="contactmehere flex flex-wrap p-[1rem]">
                <p className="text-twblue text-[3rem] ml-[4vw] font-black text-center">Contact Me Here</p>
                <p className="text-[1.5rem] my-[2rem] pl-[2vw]"><span className="text-twblue">Location </span>- Bathinda, Punjab</p>
                <p className="text-[1.5rem] my-[2rem] pl-[2vw]"><span className="text-twblue">Email </span>- udhavsharma2004@gmail.com</p>
                <p className="text-[1.5rem] my-[2rem] pl-[2vw]"><span className="text-twblue">Education </span>- Giani Zail Singh Campus College of Engineering & Technology, Bathinda.</p>
                <div className="contactprofiles ml-[5vw] mt-[2rem] flex space-x-[5vw]">
                    <a href="https://www.linkedin.com/in/udhavsharma2004/" target={'_blank'} className="w-[3.5rem]"><img src={require('./linkedinlogo.jpg')} className=" rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                    <a href="https://github.com/UdhavSharma2004" target={'_blank'} className="w-[3.5rem]"><img src={require('./githubImg.jpg')} className=" rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                    <a href="https://www.instagram.com/udhavsharma04/" target={'_blank'} className="w-[3.5rem]"><img src={require('./instagramlogo.jpg')} className=" rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                    <a href="/MyPortFolio-React#/ContactMe" className="w-[3.5rem]"><img src={require('./GMAILLogo.jpeg')} className=" rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                </div>
            </div>
            <div className="contactform w-[50%] flex flex-wrap p-[40px] text-twblue">
            <EmailJS/>
            </div>
        </div>
    );
};