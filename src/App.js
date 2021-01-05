import logo from './assets/imgs/logo.svg';
import GetGame from './components/GetGame'
import './App.css';
import './assets/scss/App.scss'
import './assets/scss/Footer.scss'
import './assets/scss/Header.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <GetGame url="games"/>      
    </div>
  );
}

export default App;
