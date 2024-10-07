import React, { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const HomePage = React.lazy(() => import('./pages/HomePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'))

const Layout = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <Navbar />
    <div className="flex-grow flex items-center justify-center p-4">
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  </div>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
])