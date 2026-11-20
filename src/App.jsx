import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import NotFound from './components/NotFound/NotFound'
import Layout from './components/Layout/Layout'

function App() {
  
  return(
   <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/Skills' element={<Skills />}/>
        <Route path='/Navbar' element={<Navbar />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />}/>
      </Route>
   </Routes>
  )
}


export default App
