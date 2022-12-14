export default function Projects(){
    const width=430;
    const height=430;
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
        list.push(<div className="obj w-[360px] h-[360px] m-1 border-[5px] border-white rounded-[20px]">
        <div className="image h-[280px] w-[300px]">
            <img src={require('./Project_img.jpeg')} className="h-[215px] w-[370px] rounded-[20px] mx-[6%]"/>
        </div>
        <p className="descrip">{words}</p>
        <a href={dlink} target={"_blank"}><img src={require('./deployment-Link.png')} className="w-[50px] relative -top-[30px] left-[290px] bottom-0 hover:scale-95 hover:border-[1px] hover:border-twblue hover:rounded-[30%]"/></a>
    </div>);
        
    }
    return (
        <div className="mainBox flex text-white px-[20px] bg-gradient-to-r flex-wrap from-twgS to-twgE mt-[140px]">
            {list}
        </div>
    );
};