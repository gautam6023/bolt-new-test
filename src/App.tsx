import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App