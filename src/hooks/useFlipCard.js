import { useState } from 'react'

export default function useFlipCard () {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlipClick = () => {
    setIsFlipped(!isFlipped)
  }

  return { isFlipped, handleFlipClick }
}
