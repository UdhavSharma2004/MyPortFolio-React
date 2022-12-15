export default function Projects(){
    const projects=[
        {
            "projId":"1",
            "description":"random words as a description",
            "imgSrc":"/src/Files/Projects/Project_img.jpeg",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "projId":"2",
            "description":"random words as a description",
            "imgSrc":"/src/Files/Projects/Project_img.jpeg",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "projId":"3",
            "description":"random words as a description",
            "imgSrc":"/src/Files/Projects/Project_img.jpeg",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "projId":"4",
            "description":"random words as a description",
            "imgSrc":"/src/Files/Projects/Project_img.jpeg",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "projId":"5",
            "description":"random words as a description",
            "imgSrc":"/src/Files/Projects/Project_img.jpeg",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "projId":"6",
            "description":"random words as a description",
            "imgSrc":"`/src/Files/Projects/Project_img.jpeg`",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "projId":"7",
            "description":"random words as a description",
            "imgSrc":"require('./Project_img.jpeg')",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "projId":"8",
            "description":"random wokjdfgbsdfrds as a description",
            "imgSrc":"require('./Project_img.jpeg')",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
    ]
    let total=projects.length;
    const list=[];
    for(let i=0;i<total;i++){
        let words=projects[i].description;
        let dlink=projects[i].deployLink;
        list.push(<div className="obj w-[22.5rem] h-[16rem] m-1 border-[0.25rem] border-white rounded-[1rem]">
        <div className="image m-[1rem] w-[17rem]">
            <img src={require('./Project_img.jpeg')} className="rounded-[1rem]"/>
        </div>
        <div className="proid flex">
        <p className="descrip w-[17rem] h-[2.5rem] overflow-auto"><span className='text-twblue'>Description</span> - {words}</p>
        <a href={dlink} target={"_blank"} className="relative bottom-2"><img src={require('./deployment-Link.png')} className="w-[3rem] hover:scale-95 hover:border-[1px] hover:border-twblue hover:rounded-[30%]"/></a>
        </div>
        
    </div>);
        
    }
    return (
        <div className="mainBox touch-pan-y flex text-white px-[20px] bg-gradient-to-r flex-wrap from-twgS to-twgE mt-[140px]">
            {list}
        </div>
    );
};