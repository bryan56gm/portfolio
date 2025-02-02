import { useEffect, useRef, useState } from 'react'

export default function useNavigation () {
  const [isChecked, setIsChecked] = useState(false)
  const navRef = useRef()

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsChecked(false)
    }
  }

  const handlerMenu = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isChecked])

  return [isChecked, handlerMenu, navRef]
}
