import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import TopPicks from "./components/TopPicks";

function App() {
 
  return <h2>

    <Navbar/>
    <Featured/>
    <Delivery/>
    <TopPicks/>
    <Meals/>
    <Categories/>
    <NewsLetter/>
    <Footer/>
  </h2>;
}

export default App;
