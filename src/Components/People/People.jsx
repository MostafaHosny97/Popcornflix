import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function People() {

    const [people, setPeople] = useState(null);
    const numbers = new Array(6).fill(1).map((element,index)=> index +1);
    const mediaType = 'person';

    const [visible, setVisible] = useState(8);

    async function getPeople(page){
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=cf4a1f832611fa30173f10337b20dba4&language=en-US&page=${page}`)
        setPeople(data.results);
        console.log(data.results);
    } catch (error) {
        console.log('Error : ',error);
    }
}

    useEffect(()=>{
    getPeople(1);
    },[])

    const showMore = () => {
        setVisible((nextValue)=> nextValue+4)
        }

    return <HelmetProvider>
    <Helmet>
        <title>Characters</title>
    </Helmet>
    
    {people? <div className="container">
    <div className="row py-3 d-flex justify-content-center align-content-center ">
        {people.slice(0,visible).map((people,index)=> <div key={index} className="col-md-3 col-4 col-sm-4 gy-4 gx-5 ">
    <Link to={`/moviedetails/${people.id}/${mediaType}`} className='text-decoration-none text-info'>
    <div className="movie position-relative ">
        {people.profile_path? <> <img src={"https://image.tmdb.org/t/p/w500" + people.profile_path} className='w-100 ' alt={people.name} />
        <h3 className='h5 text-center pt-2'> {people.name}</h3></> : <><img src={require('../../images/Photo-unavailable.webp')} className='w-100 my-4' alt="" />
        <h3 className='h5 text-center '> {people.name}</h3></> }
        
    </div>
    </Link>
    </div> )}
    </div>

    {visible !== people.length ? <div className='d-flex justify-content-center align-items-center'> <button onClick={showMore} className='btn btn-outline-info fw-bolder w-50 m-auto mt-4'>Show More</button></div>
    : ''}

    </div> : <LoadingScreen/>}

    {numbers? <nav aria-label="Page navigation example " className='my-5 d-flex justify-content-center align-items-center '>
        <ul class="pagination">
    {numbers.map((page,index)=> <> <li key={index} onClick={()=>getPeople(page)} class="page-item ">
        <Link class="page-link fw-bolder text-info" to={''}>{page}</Link>
    </li> </>)}
    </ul>
</nav> : <LoadingScreen/>}

    </HelmetProvider>
}
