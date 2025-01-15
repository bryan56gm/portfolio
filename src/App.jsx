import React from 'react'
// React Router DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
    <>
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
    </>
  )
}

export default App
