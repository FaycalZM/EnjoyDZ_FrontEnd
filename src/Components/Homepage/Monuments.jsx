import'../styles/monument.css'
import txt from '../ressources/monumentTxt.png'
import monument from '../ressources/Monuments/monument.png'
import textimgs from '../ressources/Monuments/texts.png'
import banner from '../ressources/Monuments/banner.png'
export default function Monuments() {
  return (
    <div className='monument'>
        <img className='txt center' src={txt} alt="monuments" />
        <img className='timgad' src={monument} alt="timgad monument.jpg"></img>
        <img className='texts' src={textimgs} alt="texts"></img>
        <img className='banner' src={banner} alt="banner"></img>
    </div>
  )
}
