import '../styles/wilaya.css'
import wilayatext from '../ressources/txt1.png'
import dz from '../ressources/dz.svg'
import baloon1 from '../ressources/baloon.png'
import baloon2 from '../ressources/baloon2.png'
import baloon3 from '../ressources/baloon3.png'
function Wilaya(){
    return(
        <div className="wilaya">
            <img className='wlytxt center' src={wilayatext} alt='pick a wilaya'></img>
            <img className='center dzimg' src={dz} alt="algeria.svg"></img>
            <img className='baloon' src={baloon1} alt='baloon'></img>
            <img className='baloon2' src={baloon2} alt='baloon2'></img>
            <img className='baloon3' src={baloon3} alt='baloon3'></img>
            <p className='p1'>Explorez les vestiges antiques qui témoignent de la grandeur des civilisations qui ont façonné ces terres depuis des millénaires. Des cités romaines bien conservées, comme Tipaza et Timgad, aux impressionnantes ruines de Djémila et de Ghardaïa, chaque site archéologique est un véritable trésor à découvrir.</p>
            <p className='p2'>Que vous soyez un voyageur curieux, un passionné dhistoire ou simplement à la recherche de nouvelles expériences, lAlgérie est une destination qui ne manquera pas de vous émerveiller. Nous sommes ravis de vous accompagner dans cette aventure exceptionnelle et de vous aider à planifier votre voyage à travers notre site.</p>
        </div>
    )
}

export default Wilaya