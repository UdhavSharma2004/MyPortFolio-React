import EmailJS from "./EmailJsWork";
export default function ContactMe(){
    return (
        // touch-pan-y
        <div className="text-white  bg-gradient-to-r flex flex-wrap from-twgS to-twgE mt-[150px]">
            <div className="contactmehere flex flex-wrap p-[1rem] w-[auto]">
                <p className="text-twblue text-[3rem] ml-[4vw] font-black text-center w-[100%]">Contact Me Here</p>
                <p className="text-[1.5rem] my-[2rem] text-center w-[100%]"><span className="text-twblue">Location </span>- Bathinda, Punjab</p>
                <p className="text-[1.5rem] my-[2rem] text-center w-[100%]"><span className="text-twblue">Email </span>- udhavsharma2004@gmail.com</p>
                <p className="text-[1.5rem] my-[2rem] text-center w-[100%]"><span className="text-twblue">Education </span>- Giani Zail Singh Campus College of Engineering & Technology, Bathinda.</p>
                <div className="contactprofiles ml-[5vw] mt-[2rem] flex space-x-[5vw]">
                    <a rel="noreferrer" href="https://www.linkedin.com/in/udhavsharma2004/" target={'_blank'} className="w-[3.5rem]"><img src={require('./linkedinlogo.jpg')} className=" rounded-[1rem] hover:scale-95 hover:border-twblue hover:border-[5px]" alt="profileLogo"/></a>
                    <a rel="noreferrer" href="https://github.com/UdhavSharma2004" target={'_blank'} className="w-[3.5rem]"><img src={require('./githubImg.jpg')} className=" rounded-[1rem] hover:scale-95 hover:border-twblue hover:border-[5px]" alt="profileLogo"/></a>
                    <a rel="noreferrer" href="https://www.instagram.com/udhavsharma04/" target={'_blank'} className="w-[3.5rem]"><img src={require('./instagramlogo.jpg')} className=" rounded-[1rem] hover:scale-95 hover:border-twblue hover:border-[5px]" alt="profileLogo"/></a>
                    <a rel="noreferrer" href="/MyPortFolio-React#/ContactMe" className="w-[3.5rem]"><img src={require('./GMAILLogo.jpeg')} className=" rounded-[1rem] hover:scale-95 hover:border-twblue hover:border-[5px]" alt="profileLogo"/></a>
                </div>
            </div>
            <div className="contactform w-[50%] flex flex-wrap p-[2.5rem] text-twblue">
            <EmailJS/>
            </div>
        </div>
    );
};