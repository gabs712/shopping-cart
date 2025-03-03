import { useEffect, useState } from 'react'
import { useImmer } from 'use-immer'

function getProcessedData(json) {
  const processed = []
  for (const item of json) {
    processed.push({
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: 0,
    })
  }
  return processed
}

export default function useFetchData(url) {
  const [data, updateData] = useImmer(null)
  const [error, setError] = useState(null)
  const loading = data === null

  useEffect(() => {
    let ignore = false
    async function fetchData() {
      try {
        const res = await fetch(url)
        if (ignore) return
        if (!res.ok) throw new Error('Server error')

        updateData(getProcessedData(await res.json()))
      } catch (error) {
        setError(error)
      }
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [url, updateData])

  function increaseQuantity(id) {
    for (const [i, item] of data.entries()) {
      if (item.id !== id) continue
      if (item.quantity >= 99) return

      updateData((draft) => {
        draft[i].quantity += 1
      })
    }
  }

  function decreaseQuantity(id) {
    for (const [i, item] of data.entries()) {
      if (item.id !== id) continue
      if (item.quantity <= 0) return

      updateData((draft) => {
        draft[i].quantity -= 1
      })
    }
  }

  function clearAllQuantities() {
    for (const [i] of data.entries()) {
      updateData((draft) => {
        draft[i].quantity = 0
      })
    }
  }

  return {
    data,
    error,
    loading,
    increaseQuantity,
    decreaseQuantity,
    clearAllQuantities,
  }
}
