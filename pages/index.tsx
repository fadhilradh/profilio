import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const App = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/auth')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="flex"></div>
}

export default App
