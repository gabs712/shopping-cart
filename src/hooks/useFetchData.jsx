import { useEffect, useState } from 'react'

export default function useFetchData(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const loading = data === null

  useEffect(() => {
    let ignore = false
    async function fetchData() {
      try {
        const res = await fetch(url)
        if (ignore) return
        if (!res.ok) throw new Error('Server error')

        setData(await res.json())
      } catch (error) {
        setError(error)
      }
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [url])

  return { data, error, loading }
}
