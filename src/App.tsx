import { Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components'
import { Home, CharacterDetails } from './pages'

function App() {
  return (
    <div className='App'>
      <Header />
      <Container className='container'>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/character/:id' element={<CharacterDetails />} />
          <Route path='*' element={<h1>Page not found ☹️</h1>} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
