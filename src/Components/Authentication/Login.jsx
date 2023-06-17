import logo from '../ressources/Logo.png'
import '../styles/login.css'
import fb from '../ressources/login/fb.png'
import google from '../ressources/login/google.png'
import linkedin from '../ressources/login/linkedin.png'
import { RiMailFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'

function Login(){

    return (
        <div className="login">
            <a href='/'><img className='logo' src={logo} alt="logo" /></a>
            <div className='login-left'>
                <h1>Login to your account</h1>
                <h3>or connect using your social networks</h3>
                <div className='logo-ctn'>
                    <a href='#'><img src={fb} alt='fb.png'></img></a>
                    <a href='#'><img src={google} alt='google.png'></img></a>      
                    <a href='#'><img src={linkedin} alt='linkedin.png'></img></a>
                </div>
                <div className='form'>
                    <div>
                         <label htmlFor="email">
                            <RiMailFill className="icon" />
                        </label>
                        <input type='email' placeholder='Email'></input>
                    </div>
                    <div>
                         <label htmlFor="email">
                            <RiLockPasswordFill className="icon" />
                        </label>
                        <input type='password' placeholder='Password'></input>
                    </div>
                    <a href='#'>forgot my password</a>
                </div>
                <button>Sign in</button>
                <h4>Copyrights Aurateck@2023 <span style={{marginLeft: '25px'}}> All rights reserved </span></h4>
            </div>
            <div className='login-right'>
                <h1>New here?</h1>
                <h2>Sign up and discover a great amount of new opportunities</h2>
                <Link to = '/signup'><button>Sign up</button></Link>
            </div>
        </div>
    )   
}

export default Login