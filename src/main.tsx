import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './pages/main-page'
import TripProvider from './trip/components/trip-context'

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TripProvider>
        <MainPage />
      </TripProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
