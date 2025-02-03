import './App.css';
import HomePage from './ui/About';
import Header from './ui/Header';
import Home from './ui/Home';
import ItemList from './ui/ProductList';
import Footer from './ui/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <HomePage />
      <ItemList />
      <Footer/>
    </div>
  );
}

export default App;
