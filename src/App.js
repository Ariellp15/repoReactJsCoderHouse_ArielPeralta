import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';

function App() {
  return (
    <Router>
    <div>
      <header>
        <div>
        <Header title='Enjoy your favorite Rick and Morty characters' subtitle='Find each character in this exciting story and discover their main characteristics' />
        <Navigation/>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} /> 
        <Route path='/about' exact component={About} />
        <Route path='/detail/:id' component={CharacterDetail} />
 
        </Switch>
        <Footer/>
        </div> 
      </header>
    </div>
    </Router>
  );
};

export default App;
