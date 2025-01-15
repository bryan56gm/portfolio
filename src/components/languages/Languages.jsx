import React, { useContext } from 'react'
// Styled Componets
import { LanguageBox, LanguageCurrent, LanguageFlag, LanguageArrow, LanguageText, LanguageList, LanguageItem, LanguageItemText } from './Languages.styled'
// Context
import { LanguageContext } from '../../contexts/LanguageContext'

const Languages = () => {
  const { selectedLanguage, changeLanguage, languageData: { language } } = useContext(LanguageContext)

  const handleLanguageItemClick = (language) => {
    changeLanguage(language)
  }

  return (
    <LanguageBox>
      <LanguageCurrent>
        <LanguageFlag src={`/assets/icons/flag-${selectedLanguage}.svg`} alt={`Icon flag ${selectedLanguage}`} />
        <LanguageText>{selectedLanguage === 'es' ? language?.es : language?.en}</LanguageText>
        <LanguageArrow src='/assets/icons/arrow-down.svg' alt='Icon arrow down' />
      </LanguageCurrent>

      <LanguageList>
        <LanguageItem onClick={() => handleLanguageItemClick('es')}>
          <LanguageFlag src='/assets/icons/flag-es.svg' alt='Icon flag es' />
          <LanguageItemText>{language?.es}</LanguageItemText>
        </LanguageItem>
        <LanguageItem onClick={() => handleLanguageItemClick('en')}>
          <LanguageFlag src='/assets/icons/flag-en.svg' alt='Icon flag en' />
          <LanguageItemText>{language?.en}</LanguageItemText>
        </LanguageItem>
      </LanguageList>
    </LanguageBox>
  )
}

export default Languages
