import '../styles/contact.css'
import img from '../ressources/contact/image.png'
export default function Contact() {
  return (
    <div className='contact'>
        <img src={img}></img>
        <div className='form'>
            <input placeholder='Enter your name'></input>
            <input placeholder='Enter object'></input>
            <input placeholder='Example@name.com'></input>
            <input placeholder='Your message'></input>
            <button>Send message</button>
        </div>
    </div>
  )
}
