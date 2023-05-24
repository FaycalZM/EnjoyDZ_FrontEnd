import Beauty from "./Beauty";
import Monuments from "./Monuments";
import Navbar from "./Navbar";
import SearchBar from "./Searchbar";
import PageTail from "./Tail";
import Wilaya from "./Wilaya";



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Explore the beauty of Algeria</h1>
      <SearchBar></SearchBar>
      <button>Let's Go</button>
      <Wilaya></Wilaya>
      <Monuments></Monuments>
      <Beauty></Beauty>
      <PageTail></PageTail>
    </div>
  );
}

export default App;
