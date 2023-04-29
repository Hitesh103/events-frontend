import React, { useContext } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { Link } from 'react-router-dom';
import "./navbar.css";
import authContext from '../../contaxt/authContext';

export default function Navbar() {
    const context = useContext(authContext);
    const {login, authToken} = context;
    console.log(authToken);


    const google_login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess })
    function handleGoogleLoginSuccess(tokenResponse) {
        const accesstoken = tokenResponse.access_token;
        login(accesstoken);
    }

    function logout()
    {
        localStorage.clear();
        window.location.replace('/');
        
    }
    

    return (
        <>
            <div className="navbar">
                <nav>
                    <Link to="/">
                        <img src='https://allevents.in/img/ae-logo-website.png' alt='logo' width='160px' className='img' />
                    </Link>
                    
                       { authToken ? <Link to="/eventcreate" ><h6 style={{marginTop:"3px"}} className='create-event'>Create Event</h6>
                        </Link> :  <h6 style={{marginTop:"3px"}} className='create-event'>Please Sign in to Create Event</h6>}
                            <button onClick={authToken ?logout :google_login}  className='btn-signin'>
                                {
                                    authToken ? <h6>Logout</h6> : <h6 className='signin'>Sign In</h6>
                                }
                            </button>
                </nav>
            </div>
            <div className="navbar-line"></div>
        </>
    )
}
