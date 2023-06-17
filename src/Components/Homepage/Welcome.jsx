import Beauty from "./Beauty.jsx";
import Monuments from "./Monuments.jsx";
import Navbar from "./Navbar.jsx";
import SearchBar from "./Searchbar.jsx";
import PageTail from "./Tail.jsx";
import Wilaya from "./Wilaya.jsx";
import '../styles/welcome.css'
import letsgo from '../ressources/btn.png'
import Contact from "./Contact.jsx";


function App() {
  return (
    <div className="welcome">
      <div className="welcome1">
        <Navbar></Navbar>
        <h1 className="explore">Explore the beauty <br/>of Algeria</h1>
        <SearchBar></SearchBar>
        <img className="letsgo" src={letsgo} alt="lets go"></img>
      </div>
      <Wilaya></Wilaya>
      <Monuments></Monuments>
      <Beauty></Beauty>
      <Contact/>
      <PageTail></PageTail>
    </div>
  );
}

export default App;
