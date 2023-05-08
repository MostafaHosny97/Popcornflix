import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Movies() {

  const [movies, setMovies] = useState(null);
  const numbers = new Array(10).fill(1).map((element,index)=> index +1);
  const mediaType = 'movie';
  

  const [visible, setVisible] = useState(8);

  async function getMovies(page){
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cf4a1f832611fa30173f10337b20dba4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
      setMovies(data.results);
        console.log(data.results);
    } catch (error) {
      console.log('Error : ',error);
    }
  }

  useEffect(()=>{
    getMovies(1);
  },[])

  function showMore(){
    setVisible((nextValue)=> nextValue+4)
    }

  return <HelmetProvider>
    <Helmet>
      <title>Movies</title>
    </Helmet>
    
    {movies? <div className="container">
      <div className="row py-3 d-flex justify-content-center align-content-center ">
        {movies.slice(0,visible).map((movie,index)=> <div key={index} className="col-md-3 col-4 col-sm-4 gy-4 gx-5 ">
      <Link to={`/moviedetails/${movie.id}/${mediaType}`} className='text-decoration-none text-info'>
      <div className="movie position-relative ">
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className='w-100 ' alt={movie.title} />
        <h3 className='h5 text-center pt-2'> {movie.title.split(" ").slice(0,3).join(" ")}</h3> 
        <div className="vote position-absolute top-0 end-0 p-1 text-white fw-bolder">{movie.vote_average.toFixed(1)}</div> 
      </div>
      </Link>
    </div> )}      
      </div>

      {visible !== movies.length ? <div className='d-flex justify-content-center align-items-center'> <button onClick={showMore} className='btn btn-outline-info fw-bolder w-50 m-auto mt-4'>Show More</button></div>
    : ''}

    </div> : <LoadingScreen/>}

  {numbers? <nav aria-label="Page navigation example " className='my-5 d-flex justify-content-center align-items-center '>
  <ul class="pagination">
    {numbers.map((page,index)=> <> <li key={index} onClick={()=>getMovies(page)} class="page-item ">
      <Link class="page-link fw-bolder text-info" to={''}>{page}</Link>
    </li> </>)}
  </ul>
</nav> : <LoadingScreen/>}
  
  </HelmetProvider>
}
