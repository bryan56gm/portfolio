import { useContext } from 'react'
// Components
import NoMatch from '../components/noMatch/NoMatch'
// React Helmet
import { Helmet } from 'react-helmet-async'
// Language Context
import { LanguageContext } from '../contexts/LanguageContext'

const NoFound = () => {
  const { languageData: { title } } = useContext(LanguageContext)

  return (
    <>
      <Helmet>
        <title>{title?.notFound}</title>
      </Helmet>

      <NoMatch />
    </>
  )
}

export default NoFound
