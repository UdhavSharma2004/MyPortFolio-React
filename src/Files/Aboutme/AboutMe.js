export default function AboutMe(){
    return (
        <div className="text-white bg-gradient-to-r from-twgS to-twgE font-normal text-[30px] mt-[130px] text-center px-[100px]">
            <p>I am <span className="text-twblue">Udhav Sharma</span>, a Sophomore in Bachelor’s of Technology in Computer Science and Engineering at Giani Zail Singh Campus College of Engineering & Technology, Maharaja Ranjit Singh Punjab Technical University, Bathinda.</p>
            <br></br>
            <p>I have completed my <span className="text-twblue">12th</span> class from Lord Rama Public School, Bathinda with an aggregate of <span className="text-twblue">92.2%</span> Marks with Non-Medical Stream.</p>
            <br></br>
            <p>I started my Programming journey using C Language after learning that I switched to C++ in which I have covered Object Oriented Programming, Data Structures, and Algorithms which has helped me a lot in making a deep understanding of the language.</p>
            <br></br>
            <p>Now I aim to become Professional Engineer in my field with a proper understanding of  Core subjects and Technologies.</p>
            <br></br>
            <p>
            I am trying my best to have proper logic building by participating in Programming contests and also have better creative skills by diving into the ocean of web technologies.
            You can check my profiles on different platforms from the links given below.</p>
            <div className="profiles flex space-x-[100px] justify-center my-[30px]">
                <a href="https://www.codechef.com/users/udhavsharma04" target={'_blank'}>
                    <img src={require('./codechefLogo.jpeg')} className="w-[90px] rounded-[20px] hover:scale-95 hover:border-[5px] border-twblue"/>
                </a>
                <a href="https://codeforces.com/profile/UdhavSharma" target={'_blank'}>
                    <img src={require('./codeforcesLogo.jpg')} className="w-[90px] rounded-[20px] hover:scale-95 hover:border-[5px] border-twblue"/>
                </a>
                <a href="https://auth.geeksforgeeks.org/user/udhavsharma2004" target={'_blank'}>
                    <img src={require('./GeeksForGeeksLogo.jpg')} className="w-[90px] rounded-[20px] hover:scale-95 hover:border-[5px] border-twblue"/>
                </a>
                <a href="https://leetcode.com/udhavsharma2004/" target={'_blank'}>
                    <img src={require('./leetcodeLogo.jpg')} className="w-[90px] rounded-[20px] hover:scale-95 hover:border-[5px] border-twblue"/>
                </a>
                <a href="https://github.com/UdhavSharma2004" target={'_blank'}>
                    <img src={require('./githubImg.jpg')} className="w-[90px] rounded-[20px] hover:scale-95 hover:border-[5px] border-twblue"/>
                </a>
            </div>
        </div>
    );
}
 
