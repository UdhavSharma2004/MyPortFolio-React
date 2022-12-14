import './App.css';
import Home from "./Files/HomePage/homePage";
import Navbar from "./Files/commonObj/navbar";
import AboutMe from "./Files/Aboutme/AboutMe";
import Projects from './Files/Projects/Projects';
import ContactMe from './Files/Contactme/Contactme';
import { BrowserRouter,Routes,Route,Link, useParams} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <header>
    <Navbar />
    </header>
    <main>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="MyPortFolio-React/" element={<Home />}/>
        <Route path="MyPortFolio-React/Home" element={<Home />}/>
        <Route path="MyPortFolio-React/Aboutme" element={<AboutMe />}/>
        <Route path="MyPortFolio-React/Projects" element={<Projects />}/>
        <Route path="MyPortFolio-React/ContactMe" element={<ContactMe />}/>
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
