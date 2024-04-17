//import './App.css'
import {NextUIProvider} from '@nextui-org/react'
import { Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './views/HomePage'
import PlansPage from './views/PlansPage'
import OtPage from './views/OtPage'
import OtsTablePage from './views/OtsTablePage'
import QuotePage from './views/QuotePage'

function App() {
  const navigate = useNavigate();

  return (
    <>
    <NextUIProvider navigate={navigate}>
     
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ot" element={<OtPage />} />
        <Route path="/ots-table" element={<OtsTablePage />} />
        <Route path="/quote" element={<QuotePage />} />
        
        <Route path="/planes" element={<PlansPage />} />
        {/* ... */}
      </Routes>
    </NextUIProvider>
    </>
  )
}

export default App
