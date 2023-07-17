export default function AboutMe() {
    return (
        <div className="text-white touch-pan-y bg-gradient-to-r from-twgS to-twgE font-normal text-[2rem] mt-[8rem] text-center px-[6vw]">
            <p>I am <span className="text-twblue">Udhav Sharma</span>, a pre-senior in Bachelor’s of Technology in Computer Science and Engineering at Giani Zail Singh Campus College of Engineering & Technology, Maharaja Ranjit Singh Punjab Technical University, Bathinda.</p>
            <br></br>
            <p>I have completed my <span className="text-twblue">12th</span> class from Lord Rama Public School, Bathinda with an aggregate of <span className="text-twblue">92.2%</span> Marks with Non-Medical Stream.</p>
            <br></br>
            <p>I started my Programming journey using C Language after learning that I switched to C++ in which I have covered Object Oriented Programming, Data Structures, and Algorithms which has helped me a lot in making a deep understanding of the language.</p>
            <br></br>
            <p>Now I aim to become Professional Engineer in my field with a proper understanding of  Core subjects and Technologies.</p>
            <br></br>
            <p>I have also served as the <span className="text-twblue">GDSC Web Development Co Lead</span> for 2022-23 in my campus and tried to enhance the learning and coding culture in campus by conducting bootcamps and workshops</p>
            <br></br>
            <p>
                I am trying my best to have proper logic building by participating in Programming contests and also have better creative skills by diving into the ocean of web technologies and Java technologies.
                You can check my profiles on different platforms from the links given below.
            </p>
            <br></br>
            <p>I have worked as <span className="text-twblue">Web development intern at Potencia Academy</span> for 3 months and learnt a lot of practical knowledge about the tech industry</p>
            <br></br>
            <br></br>
            <p>I have also learnt Java development during training under author of <span className="text-twblue">"Real Java", Mr. Rajesh Bansal</span>, where i learnt the fundamental skills required for desktop software devlopment with help of JavaFx</p>
            <br></br>
            <div className="profiles flex space-l-[4rem] flex-wrap justify-center my-[2rem]">
                <a rel="noreferrer" href="https://auth.geeksforgeeks.org/user/udhavsharma2004" target={'_blank'}>
                    <img src={require('./GeeksForGeeksLogo.jpg')} className="w-[6rem] m-[1rem] rounded-[1rem] hover:scale-95 hover:border-[0.25rem] border-twblue" alt="AboutLogo" />
                </a>
                <a rel="noreferrer" href="https://leetcode.com/udhavsharma2004/" target={'_blank'}>
                    <img src={require('./leetcodeLogo.jpg')} className="w-[6rem] m-[1rem] rounded-[1rem] hover:scale-95 hover:border-[0.25rem] border-twblue" alt="AboutLogo" />
                </a>
                <a rel="noreferrer" href="https://github.com/UdhavSharma2004" target={'_blank'}>
                    <img src={require('./githubImg.jpg')} className="w-[6rem] m-[1rem] rounded-[1rem] hover:scale-95 hover:border-[0.25rem] border-twblue" alt="AboutLogo" />
                </a>
            </div>
        </div>
    );
}

