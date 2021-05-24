import "./css/main.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <div id="about-image"></div>
        <article>
          <h1>The Leader in Interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
