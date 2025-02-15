import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { FaGithub } from "react-icons/fa";
import './App.css'

function App() {

  return (
    <>
    <NavBar/>
    <Outlet/>
    <footer>
      <div> <FaGithub /> <a href="https://github.com/Curtisdak" target='_blank'  title='click me'>Curtis Dakouri</a></div>
    </footer>
    </>
  )
}

export default App
