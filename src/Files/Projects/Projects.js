export default function Projects(){
    const projects=[
        {
            "key":"0",
            "description":"New Project Under Process",
            "imgSrc":"/Project_img.jpeg",
            "deployLink":"https://github.com/UdhavSharma2004?tab=repositories"
        },
        {
            "key":"1",
            "description":"Random quote generator",
            "imgSrc":"/quoteGenerator.jpg",
            "deployLink":"https://udhavsharma2004.github.io/Random_quote_generator/"
        },
        {
            "key":"2",
            "description":"Stopwatch using JS",
            "imgSrc":"/stopwatch.jpg",
            "deployLink":"https://udhavsharma2004.github.io/stop_watch_JS/"
        },
        {
            "key":"3",
            "description":"Clock using JS",
            "imgSrc":"/clockImage.jpg",
            "deployLink":"https://udhavsharma2004.github.io/Clock_using_JS/"
        },
        {
            "key":"4",
            "description":"Calculator using JS",
            "imgSrc":"/calculator.jpg",
            "deployLink":"https://udhavsharma2004.github.io/Calculator_JS/"
        },
        {
            "key":"5",
            "description":"Task Organizer using JS",
            "imgSrc":"/taskOrganizer.jpg",
            "deployLink":"https://udhavsharma2004.github.io/task_organizer/"
        },
        {
            "key":"6",
            "description":"ReactJs-JSON Server CRUD app",
            "imgSrc":"/crudapp.jpg",
            "deployLink":"https://github.com/UdhavSharma2004/CRUDApp_1"
        },
        {
            "key":"7",
            "description":"Instagram Clone HTML-CSS",
            "imgSrc":"/imstagram.jpg",
            "deployLink":"https://udhavsharma2004.github.io/Instagram_clone/"
        },
        {
            "key":"8",
            "description":"Taj Hotels Clone HTML-CSS",
            "imgSrc":"/Tajhotels.jpg",
            "deployLink":"https://udhavsharma2004.github.io/clone_taj_hotels_2/"
        },
        {
            "key":"9",
            "description":"ToDo (CRUD) App using React JS",
            "imgSrc":"/crudapp.jpg",
            "deployLink":"https://udhavsharma2004.github.io/React-ToDoLists/"
        },
        {
            "key":"10",
            "description":"React-color-challenge",
            "imgSrc":"/crudapp.jpg",
            "deployLink":"https://udhavsharma2004.github.io/React-color-Challenge/"
        },
        {
            "key":"11",
            "description":"Sudoku Solver HTML-CSS-JS, also OSC",
            "imgSrc":"/sudoku.jpg",
            "deployLink":"https://onehtmlpagechallenge.com/entries/UdhavSudoku.html"
        }
    ]
    let total=projects.length;
    const list=[];
    for(let i=total-1;i>=0;i--){
        let words=projects[i].description;
        let dlink=projects[i].deployLink;
        let imgPath=projects[i].imgSrc;
        list.push(<div className="obj w-[22.5rem] h-[17rem] m-1 border-[0.25rem] border-white rounded-[1rem]">
            <div className="image m-[1rem] w-[17rem]">
                <a href={dlink} target="_blank" rel="noreferrer" className="relative bottom-2"><img src={process.env.PUBLIC_URL + '/images/' + imgPath} className="rounded-[1rem]" alt="AltImage-Project" /></a>
        </div>
        <div className="proid flex">
        <p className="descrip w-[17rem] h-[3rem] overflow-auto"><span className='text-twblue'>Description</span> - {words}</p>
        <a href={dlink} target="_blank" rel="noreferrer" className="relative bottom-2"><img src={require('./deployment-Link.png')} className="w-[3rem] hover:scale-95 hover:border-[1px] hover:border-twblue hover:rounded-[30%]" alt="DepolyImg"/></a>
        </div>
        
    </div>);
        
    }
    return (
        <div className="mainBox touch-pan-y flex text-white px-[1rem] bg-gradient-to-r flex-wrap from-twgS to-twgE mt-[8.75rem]">
            {list}
        </div>
    );
};