import { useEffect, useState } from 'react'

const useGlitch = () => {
  const [glitchText, setGlitchText] = useState('404')

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'

      if (Math.random() > 0.8) {
        setGlitchText('404'.split('').map(char =>
          Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char
        ).join(''))
      } else {
        setGlitchText('404')
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return { glitchText }
}

export default useGlitch
