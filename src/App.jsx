import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CrudDashboard from './feature/admin/CrudDashboard'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './ui/ProtectedRoute'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  },
})
function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProtectedRoute>
          <CrudDashboard />
        </ProtectedRoute>
      </AuthProvider>
      <Toaster position="top-right" autoClose={3000} />
    </QueryClientProvider>
  )
}

export default App
