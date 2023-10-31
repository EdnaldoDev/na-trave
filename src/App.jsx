

import Home from './pages/Home'
import { Login } from './pages/Login'
import { RoutesPath } from './routes'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const queryClient= new QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoutesPath/>
      
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App
