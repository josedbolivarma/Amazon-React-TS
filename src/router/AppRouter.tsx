import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Register } from '../auth/pages';
import { DashboardRoutes } from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import logo from "../assets/Amazon-logo.png";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user: any)=>{
        if(user?.uid){
          setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false)
        }
        setChecking(false)
    })

  
 }, [setIsLoggedIn, setChecking]);

  
  if(checking) {
    return (
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(238,127,55)',
        background: 'linear-gradient(90deg, rgba(238,127,55,1) 0%, rgba(245,113,0,1) 48%, rgba(244,176,53,1) 87%, rgba(245,113,0,1) 100%)',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      }}>
        <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <img width='200px' height='100px' src={logo} alt='Loader'/>
        </div>
      </div>
    )
  }

  
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          } 
          />

          <Route path='/register' element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Register />
            </PublicRoutes>
          } 
          />

          <Route path='/*' element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoutes>
          }
          />
          
          </Routes>
    </BrowserRouter>
  )
}