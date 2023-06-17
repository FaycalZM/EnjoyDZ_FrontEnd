import logo from '../ressources/Logo.png'
import '../styles/signup.css'
import fb from '../ressources/login/fb.png'
import google from '../ressources/login/google.png'
import linkedin from '../ressources/login/linkedin.png'
import { RiMailFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { RiUserFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'


function Signup(){

    return (
        <div className="signup">
            <a href='/'><img className='logo' src={logo} alt="logo" /></a>
            <div className='login-left'>
                <h1>Create an account</h1>
                <h3>or use your social networks for registration</h3>
                <div className='logo-ctn'>
                    <a href='#'><img src={fb} alt='fb.png'></img></a>
                    <a href='#'><img src={google} alt='google.png'></img></a>      
                    <a href='#'><img src={linkedin} alt='linkedin.png'></img></a>
                </div>
                <div className='form'>
                    <div>
                         <label htmlFor="name">
                            <RiUserFill className="icon" />
                        </label>
                        <input className='txt-input' type='name' placeholder='Enter your name'></input>
                    </div>
                    <div>
                         <label htmlFor="email">
                            <RiMailFill className="icon" />
                        </label>
                        <input className='txt-input' type='email' placeholder='Email'></input>
                    </div>
                    <div>
                         <label htmlFor="email">
                            <RiLockPasswordFill className="icon" />
                        </label>
                        <input className='txt-input' type='password' placeholder='Password'></input>
                    </div>
                    <div className='terms'>
                        <input className='checkbox' type='checkbox'></input>
                        <h5>I have read the <a href='#'>terms & conditions</a></h5>
                    </div>
                </div>

                <button>Register</button>
                <h4>Copyrights Aurateck@2023 <span style={{marginLeft: '25px'}}> All rights reserved </span></h4>
            </div>
            <div className='login-right'>
                <h1>Welcome back!</h1>
                <h2>To keep connected with us please login with your personal info</h2>
                <Link to='/login'><button>Sign in</button></Link>
            </div>
        </div>
    )   
}

export default Signup 