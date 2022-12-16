import './App.css';
import Home from "./Files/HomePage/homePage";
import Navbar from "./Files/commonObj/navbar";
import AboutMe from "./Files/Aboutme/AboutMe";
import Projects from './Files/Projects/Projects';
import ContactMe from './Files/Contactme/Contactme';
import { ToastContainer  } from 'react-toastify';
import { HashRouter,Routes,Route} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <HashRouter>
    <header>
    <Navbar />
    </header>
    <main>
      <ToastContainer/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Aboutme" element={<AboutMe />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/ContactMe" element={<ContactMe />}/>
      </Routes>
    </main>
  </HashRouter>
  );
}

export default App;
