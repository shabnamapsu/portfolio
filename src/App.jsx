
import Navbaar from './component/Navbaar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contect from './pages/Contect'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {
  return (
    <>
  
    <BrowserRouter>
      <Navbaar/>
    <Routes>
       <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/resume' element={<Resume/>}/>
        <Route path="/contact" element={<Contect />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App