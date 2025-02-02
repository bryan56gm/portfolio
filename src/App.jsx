// React Router DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// React Helmet Async
import { HelmetProvider } from 'react-helmet-async'
// Normalize
import './styles/normalize.css'
// Global Styled Componets
import { GlobalStyles } from './styles/base/Global.styled'
// Components
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NoFound from './pages/NoFound'
// Language Context
import { LanguageProvider } from './contexts/LanguageContext'

const App = () => {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router>
        <LanguageProvider>
          <Header />
          <Navigation />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NoFound />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  )
}

export default App
