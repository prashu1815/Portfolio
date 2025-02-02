import './App.css'
import Layout from './components/Layout'
import { BrowserRouter, Routes ,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {

  return (
    <>
      <div className="App">

        <BrowserRouter>


        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Resume' element={<Resume/>}/>

        </Routes>
        
        
        
        
        
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
