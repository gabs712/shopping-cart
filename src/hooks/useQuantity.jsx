import { useState } from 'react'

export default function useQuantity() {
  const [quantity, setQuantity] = useState(0)
  const LIMIT = 99

  function increaseQuantity() {
    if (quantity < LIMIT) {
      setQuantity(quantity + 1)
    }
  }

  function decreaseQuantity() {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }

  return { quantity, increaseQuantity, decreaseQuantity }
}
