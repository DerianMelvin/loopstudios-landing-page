import "./css/main.css";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <section id="contents">
        <h1 id="contents-heading">Our Creations</h1>
        <button id="contents-button">
          <h4>See All</h4>
        </button>
        <ul id="contents-list">
          <li className="item">Deep Earth</li>
          <li className="item">Night Arcade</li>
          <li className="item">Soccer Team VR</li>
          <li className="item">The Grid</li>
          <li className="item">From Up Above VR</li>
          <li className="item">Pocket Borealis</li>
          <li className="item">The Curiosity</li>
          <li className="item">Make it Fisheye</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
