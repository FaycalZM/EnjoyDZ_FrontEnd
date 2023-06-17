import '../styles/beauty.css'
import title from '../ressources/beauty/title.png'
import img1 from '../ressources/beauty/img1.jpg'
import img2 from '../ressources/beauty/img2.jpg'
import img3 from '../ressources/beauty/img3.jpg'
import img4 from '../ressources/beauty/img4.jpg'
import img5 from '../ressources/beauty/img5.jpg'
import img6 from '../ressources/beauty/img6.jpg'

export default function Beauty() {
  return (
    <div className='beauty'>
        <img className = 'center' src={title} alt='title beauty'></img>
        <div className='images'>
              <img className='image' src={img1} alt={`Image1`} />
              <img className='image' src={img2} alt={`Image2`} />
              <img className='image' src={img3} alt={`Image3`} />
              <img className='image' src={img4} alt={`Image4`} />
              <img className='image' src={img5} alt={`Image5`} />
              <img className='image' src={img6} alt={`Image6`} />
        </div>
        
    </div>
  )
}
