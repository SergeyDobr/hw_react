import Header from "../Header";
import About from "../About";
import Histori from "../Histori";
import Galleri from "../Galleri";
import Contact from "../Contact";
import Other from "../Other";
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
   return (
      <BrowserRouter>
         <div className="App">
            <Header />
            <Routes>
               <Route path="/" element={<About />} />
               <Route path="/Histori" element={<Histori />} />
               <Route path="/Galleri" element={<Galleri />} />
               <Route path="/Contact" element={<Contact />} />
               <Route path="/Other/*" element={<Other />} />
            </Routes>
         </div> 
      </BrowserRouter>
   );
}

export default App;