import { useState } from 'react'

export default function useFirstLoad() {
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  function disableFirstLoad() {
    if (isFirstLoad) {
      setIsFirstLoad(false)
    }
  }

  return { isFirstLoad, disableFirstLoad }
}
