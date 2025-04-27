import { BrowserRouter, Route, Routes, useLocation, matchRoutes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useState } from 'react';
import Login from './pages/login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

const MyContext = createContext();

function AppWrapper() {
  const location = useLocation();

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin
  };

  const routes = [
    { path: "/" },
    { path: "/dashboard" },
    { path: "/login" },
    { path: "/signUp" }
  ];

  const matchedRoutes = matchRoutes(routes, location);

  const hideLayout = !matchedRoutes || ['/login', '/signUp'].includes(location.pathname);

  return (
    <MyContext.Provider value={values}>
      {
        !hideLayout && <Header />
      }
      <div className='main d-flex'>
        {
          !hideLayout && 
          <div className={`sidebarWrapper ${isToggleSidebar ? 'toggle' : ''}`}>
            <Sidebar />
          </div>
        }

        <div className={`content ${hideLayout ? 'full' : ''} ${isToggleSidebar ? 'toggle' : ''}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </MyContext.Provider>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
export {MyContext}