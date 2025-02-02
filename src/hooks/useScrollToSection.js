import { useCallback, useRef, useState } from 'react'

export default function useScrollToSection () {
  const dynamicContentRef = useRef(null)
  const [selectedComponent, setSelectedComponent] = useState(null)

  const scrollToSection = useCallback((section) => {
    setSelectedComponent(section)
    setTimeout(() => {
      dynamicContentRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }, [])

  return { dynamicContentRef, selectedComponent, scrollToSection }
}
