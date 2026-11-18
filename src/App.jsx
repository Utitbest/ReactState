import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import NotFound from './components/NotFound/NotFound'

function App() {
  
  return(
   <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Skills' element={<Skills />}/>
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='*' element={<NotFound />}/>
   </Routes>
  )
}


export default App
