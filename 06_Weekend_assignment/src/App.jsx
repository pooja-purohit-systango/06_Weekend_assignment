import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login_page from './pages/Login_page';
import User_list from './pages/Dashboard/User_list'
import User_details from './pages/Dashboard/User_details';
import Layout from './pages/Layout';
import ProtectedRoutes from './pages/ProtectedRoutes';
import './App.css';
import "tailwindcss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<Login_page />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="user_list" element={<User_list />} />
              <Route path="User_details/:id" element={<User_details />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
