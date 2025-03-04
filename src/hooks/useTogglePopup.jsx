import { useEffect, useRef, useState } from 'react'

export default function useTogglePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const cartRef = useRef(null)

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (!cartRef.current?.contains(e.target)) {
        setIsOpen(false)
      }
    })
  }, [])

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  return { isOpen, cartRef, toggleOpen }
}
