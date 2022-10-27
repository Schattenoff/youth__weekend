import About from "./components/About/About";
import Feedback from "./components/Feedback/Feedback";
import Header from "./components/Header/Header";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Schedule />
      <Feedback />
    </div>
  );
}

export default App;
