import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="loopstudios logo" />
          <ul>
            <li id="about" className="link">About</li>
            <li id="careers" className="link">Careers</li>
            <li id="events" className="link">Events</li>
            <li id="products" className="link">Products</li>
            <li id="support" className="link">Support</li>
          </ul>
        </nav>

        <div id="hero-text">
          <h1>Immersive experiences that deliver</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
