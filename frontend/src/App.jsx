import { useState } from 'react'
import Nav from './components/Navbar'
import Footer from './components/Footer'
import Roomdetail from './pages/roomdetail'
import Mainpage from './pages/mainpage'
import Moreinfo from './pages/moredetailedroom'
import Experience from './pages/Experience'
import About from './pages/About'
import RoomNotAvailable from './components/notavalable'
function App() {
  const [page, setPage] = useState("home");

  return (
    <>
       <Nav setPage={setPage} page={page} />

      {page === "home" && <Mainpage setPage={setPage} />}
      

      {page === "hotels" && <Roomdetail setPage={setPage}/>}

      {page === "moreinfo" && <Moreinfo />}

      {page === "Experience" && <Experience/>}

      {page === "About" && <About/>}
       
       {page === "Notavalable" && <RoomNotAvailable message="No rooms match your selected filters." 
/>}

      <Footer />
    </>
  )
}

export default App;


