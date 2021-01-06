import logo from './assets/imgs/logo.svg';
import GetData from './components/GetData'
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
      <GetData url="posts"/>      
    </div>
  );
}

export default App;
