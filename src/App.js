import "./css/main.css";
import Header from "./components/Header";
import About from "./components/About";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
