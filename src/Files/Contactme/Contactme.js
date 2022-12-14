export default function ContactMe(){
    return (
        <div className="text-white bg-gradient-to-r flex from-twgS to-twgE mt-[150px]">
            <div className="contactmehere w-[50%] p-[20px]">
                <p className="text-twblue text-[50px] font-black text-center">Contact Me Here</p>
                <p className="text-[30px] my-[20px] px-[10px]"><span className="text-twblue text-[30px]">Location </span>- Bathinda, Punjab</p>
                <p className="text-[30px] my-[20px] px-[10px]"><span className="text-twblue text-[30px]">Email </span>- udhavsharma2004@gmail.com</p>
                <p className="text-[30px] my-[20px] px-[10px]"><span className="text-twblue text-[30px]">Education </span>- Giani Zail Singh Campus College of Engineering & Technology, Bathinda.</p>
                <div className="contactprofiles mt-[30px] ml-[60px] flex space-x-[50px]">
                    <a href="https://www.linkedin.com/in/udhavsharma2004/" target={'_blank'}><img src={require('./linkedinlogo.jpg')} className="w-[60px] rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                    <a href="https://github.com/UdhavSharma2004" target={'_blank'}><img src={require('./githubImg.jpg')} className="w-[60px] rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                    <a href="https://www.instagram.com/udhavsharma04/" target={'_blank'}><img src={require('./instagramlogo.jpg')} className="w-[60px] rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                    <a href="" target={'_blank'}><img src={require('./GMAILLogo.jpeg')} className="w-[60px] rounded-[15px] hover:scale-95 hover:border-twblue hover:border-[5px]"/></a>
                </div>
            </div>
            <div className="conatctform w-[50%] flex flex-wrap p-[40px] text-twblue">
            <input type="text" className=" bg-transparent border-[3px] border-white rounded-[30px] h-[75px] w-[47%] m-2 placeholder-twblue p-2" name="name" placeholder="YOUR NAME"/>
            <input type="text" className=" bg-transparent border-[3px] border-white rounded-[30px] h-[75px] w-[47%] m-2 placeholder-twblue p-2" name="emailId" placeholder="YOUR EMAIL ID"/>
            <input type="text" className=" bg-transparent border-[3px] border-white rounded-[30px]  w-[100%] h-[75px] m-2 placeholder-twblue p-2" name="subject" placeholder="ENTER SUBJECT OF MESSAGE"/>
            <textarea className=" bg-transparent border-[3px] border-white rounded-[30px]  w-[100%] h-[200px] m-2 placeholder-twblue p-2" name="message" placeholder="ENTER MESSAGE"/>
            <input type="submit" className=" bg-transparent border-[3px] border-white rounded-[10px]  w-[75px] h-[50px] my-[20px] mx-[40%] active:bg-twblue active:text-white duration-[100ms] delay-100" value="SEND"/>
            </div>
        </div>
    );
};