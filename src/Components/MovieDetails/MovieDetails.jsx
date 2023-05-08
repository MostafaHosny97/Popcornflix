import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function MovieDetails() {

  const [details, setDetails] = useState({});

  const {id,mediaType} = useParams();

  async function getTrending(id,mediaType){
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=cf4a1f832611fa30173f10337b20dba4&language=en-US`)
      setDetails(data);
        console.log(data);
    } catch (error) {
      console.log('Error : ',error);
    }
  }
  

  useEffect(()=>{
    getTrending(id,mediaType);
  },[])



  return <HelmetProvider>
    <Helmet>
      <title>Popcornflix Details</title>
    </Helmet>

    <div className="container my-5 d-flex justify-content-center align-items-center">
      <div className="row g-3 ">

        <div className="col-md-3 m-auto col-8 col-sm-8 d-flex justify-content-center align-items-center">
        {details.poster_path? <img src={"https://image.tmdb.org/t/p/w500" + details.poster_path} className='w-100 ' alt={details.title} /> : <img src={"https://image.tmdb.org/t/p/w500" + details.profile_path} className='w-100 ' alt={details.title} /> }
        </div>

        <div className="col-md-9 px-5 col-10 col-sm-10 m-auto d-flex align-items-center justify-content-center my-3">
          <div className="item-text">
          <h2 className='h3 text-info my-2'>{details.title} {details.name}</h2>
          <p className='text-muted my-5'>{details.overview}{details.biography}</p>
          {details.vote_average?<h4 className='h6 text-muted'>Views Rate : <span className='text-info mx-2'>{details.vote_average}</span></h4>:''}
          {details.release_date? <h4 className='h6 text-muted'>Release Date : <span className='text-info mx-2'>{details.release_date}</span></h4>:''}
          {details.runtime? <h4 className='h6 text-muted'>Runtime : <span className='text-info mx-2'>{details.runtime} Minutes</span></h4>:''}
          {details.original_language?<h4 className='h6 text-muted'>Original Language : <span className='text-info mx-2'>{details.original_language}</span></h4>:'' }
          </div>
        </div>
      </div>
    </div>






    </HelmetProvider>
}
