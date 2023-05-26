import Beauty from "./Beauty.jsx";
import Monuments from "./Monuments.jsx";
import Navbar from "./Navbar.jsx";
import SearchBar from "./Searchbar.jsx";
import PageTail from "./Tail.jsx";
import Wilaya from "./Wilaya.jsx";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Explore the beauty of Algeria</h1>
      <SearchBar></SearchBar>
      <button>Lets Go</button>
      <Wilaya></Wilaya>
      <Monuments></Monuments>
      <Beauty></Beauty>
      <PageTail></PageTail>
    </div>
  );
}

export default App;
