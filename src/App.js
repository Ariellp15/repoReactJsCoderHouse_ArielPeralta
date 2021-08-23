import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <div>
        <Header title='Enjoy your favorite Harry Potter characters' subtitle='Find each character in this exciting story and discover their main characteristics' />
        <NavBar />
        <h4>Your favorite Harry Potter characters</h4>
        <ItemListContainer />  
        <Footer/>
        </div> 
      </header>
    </div>
  );
};

export default App;
