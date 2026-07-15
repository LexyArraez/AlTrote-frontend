import { auth } from './firebase'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  console.log('Firebase auth inicializado:', auth)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="p-8 text-center">AlTrote 🏠</div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App