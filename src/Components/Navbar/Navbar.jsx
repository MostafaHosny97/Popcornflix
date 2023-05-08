import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({userData,clearUserData}) {

  const navigate = useNavigate();

  function logOutUser(){
    clearUserData();
    navigate('/login');
  }

  return <>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to='/'><h3 className='text-info fw-bolder'>Popcornflix</h3></Link>
          <button className="navbar-toggler text-info " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            {userData ? <> <li className="nav-item">
                <Link className="nav-link active text-muted" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-muted" to='movies'>Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-muted" to='series'>Series</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-muted" to='people'>People</Link>
              </li> </> : ''}
              
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <li className="nav-item d-flex align-items-center">
              <Link target='_blank' to={'https://www.facebook.com/Mostafa.Hosny74'} className='text-decoration-none text-white'><i className='fab mx-2 fa-facebook'></i></Link>
              <Link target='_blank' to={'https://www.instagram.com/mostafahosny_/'} className='text-decoration-none text-white'><i className='fab mx-2 fa-instagram'></i></Link>
              <Link target='_blank' to={'https://www.twitter.com/MostafaHosny907'} className='text-decoration-none text-white'><i className='fab mx-2 fa-twitter'></i></Link>
              <Link target='_blank' to={'https://www.github.com/MostafaHosny97'} className='text-decoration-none text-white'><i className='fab mx-2 fa-github '></i></Link>
              </li>
              
              {userData ? <li className="nav-item">
                <span onClick={logOutUser}  className="nav-link " role="button" >Logout</span>
              </li> : <> <li className="nav-item">
                <Link className="nav-link " to='register'>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to='login'>Login</Link>
              </li> </> }
              
            </ul>
          </div>
        </div>
      </nav>


    </>
}
