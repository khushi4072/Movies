function News(props) {
        // let {title,description,imageurl,newsurl}=props;

        return(

            <>
           <div className="card" style={{width: "18rem" }}>
  <img src={props.imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}..</h5>
    <p className="card-text">{props.description}..</p>
    {/* <p className="card-text"><small className='text-muted'>By {author} on{date}</small></p> */}

    <a href={props.newsurl} target="_blank" className="btn btn-primary">Read More </a>
  </div>
 
</div>

            </>
        );
    }
    
   
    export default News;