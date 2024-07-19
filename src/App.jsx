import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css";
import Listarticles from "./components/Admin/articles/Listarticles"
import Insertarticles from "./components/Admin/articles/Insertarticles"
import Editarticles from "./components/Admin/articles/Editarticles"
import Listcategories from "./components/Admin/categories/Listcategories"
import Insertcategories from "./components/Admin/categories/Insertcategories"
import Editcategories from "./components/Admin/categories/Editcategories"
import Listscategories from "./components/Admin/scategories/Listscategories"
import Insertscategories from "./components/Admin/scategories/Insertscategories"
import Editscategories from "./components/Admin/scategories/Editscategories"
import { useState } from "react";
import Menu from "./components/Menu";
import Listarticlescard from "./components/Client/Listarticlescard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Menu/>
      <Routes>
      <Route path="/" element={<Listarticlescard/>}/>

        <Route path="/articles/list" element={<Listarticles/>}/>
        <Route path="/articles/insert" element={<Insertarticles/>}/>
        <Route path="/articles/edit/:id" element={<Editarticles/>}/>


        <Route path="/categories/list" element={<Listcategories/>}/>
        <Route path="/categories/insert" element={<Insertcategories/>}/>
        <Route path="/categories/edit/:id" element={<Editcategories/>}/>

        <Route path="/scategories/list" element={<Listscategories/>}/>
        <Route path="/scategories/insert" element={<Insertscategories/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategories/>}/>

      </Routes>
    </Router>
     
    </>
  )
}

export default App
