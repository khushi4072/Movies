import React, { useEffect, useState } from 'react';
import News from './News';
function Newsitem () {
    
  const  [movies,setmovies]= useState([])
    
    

     const show =async ()=>{
    // let url = await  "https://api.tvmaze.com/search/shows?q=all";
            let data = await fetch("https://api.tvmaze.com/search/shows?q=all");
            const parsetext = await data.json();
            console.log(parsetext)
            setmovies(parsetext)
            console.log(movies)
    } 
    useEffect(()=>{
    show();

},[])
    
           
       

 
        return (

            <div className="container my-4">
                {/* <div className="row"> */}
                    {movies.map((element) => {
                       return  <div className="col-md-4" key={element.score}>
                            <News name={element.name} description={element.language} imageurl={element.image? element.image : "https://images.moneycontrol.com/static-mcnews/2021/06/2021-06-09T205305Z_1_LYNXNPEH581AY_RTROPTP_4_INDIA-FRANKLINTEMPLETON-673x435.jpg"} newsurl={element.officialsite}></News>

                        </div>

                    })}
                   


                </div>



            // </div>

        );

    }


export default Newsitem;