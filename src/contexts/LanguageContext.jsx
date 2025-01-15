import React, { createContext, useState, useCallback, useEffect, useRef, useMemo } from 'react'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const previousLanguage = useRef('')
  const [isLoading, setIsLoading] = useState(false)
  const [languageData, setLanguageData] = useState({})

  // Obtener idioma inicial
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem('selected-language')
    return storedLanguage || (navigator.language.startsWith('es') ? 'es' : 'en')
  })

  const changeLanguage = useCallback(async (language) => {
    if (previousLanguage.current === language) return
    previousLanguage.current = language

    try {
      setIsLoading(true)

      const requestJson = await fetch(`/assets/languages/${language}.json`)
      const texts = await requestJson.json()
      setLanguageData(texts)
      setSelectedLanguage(language)
      window.localStorage.setItem('selected-language', language)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    changeLanguage(selectedLanguage)
  }, [])

  const contextValue = useMemo(() => ({
    languageData,
    selectedLanguage,
    changeLanguage,
    isLoading
  }), [languageData])

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }
