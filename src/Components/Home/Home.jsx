import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import HomeItems from '../HomeItems/HomeItems';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Home() {

  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [people, setPeople] = useState([]);


  async function getTrending(mediaType,usestate){
    try {
      const {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=cf4a1f832611fa30173f10337b20dba4`)
        usestate(data.results);
        console.log(data.results);
    } catch (error) {
      console.log('Error : ',error);
    }
  }

  useEffect(()=>{
    getTrending('movie',setMovies);
    getTrending('tv',setSeries);
    getTrending('person',setPeople);
  },[])


  return <HelmetProvider>
    <Helmet>
    <title>Popcornflix</title>
    </Helmet>
    
    {(movies.length !== 0) ? <div className="container mb-3">
    <div className="row g-3 d-flex align-items-center justify-content-center">
      <div className="col-md-4">
      <div className="brdr w-25 my-3"></div>
        <h2 className='h3'>Trending <br />Movies <br />Right Now</h2>
        <p className='text-muted'>Most Watched Movies This Week</p>
      <div className="brdr w-75 mt-3"></div>
      </div>
      {movies.slice(0,15).map((item,index)=><HomeItems key={index} item={item}/>)}
    </div>

    <div className="row py-3 g-3 d-flex align-items-center justify-content-center">
      <div className="col-md-4">
      <div className="brdr w-25 my-3"></div>
        <h2 className='h3'>Trending <br />Series <br />Right Now</h2>
        <p className='text-muted'>Most Watched Series This Week</p>
      <div className="brdr w-75 mt-3"></div>
      </div>
      {series.slice(0,15).map((item,index)=><HomeItems key={index} item={item}/>)}
    </div>

    <div className="row py-3 g-3 d-flex align-items-center justify-content-center">
      <div className="col-md-4">
      <div className="brdr w-25 my-3"></div>
        <h2 className='h3'>Trending <br />People <br />Right Now</h2>
        <p className='text-muted'>Top Trending People This Week</p>
      <div className="brdr w-75 mt-3"></div>
      </div>
      {people.slice(0,15).map((item,index)=><HomeItems key={index} item={item}/>)}
    </div>

  </div> : <LoadingScreen/>}
    </HelmetProvider>
}
