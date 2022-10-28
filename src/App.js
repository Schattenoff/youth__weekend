import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Schedule from "./components/Schedule/Schedule";
import { ToastContainer } from 'react-toast';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Schedule />
      <Feedback />
      <Contact />
      <Footer />
      <ToastContainer position="bottom-right" delay={10000} />
    </div>
  );
}

export default App;
