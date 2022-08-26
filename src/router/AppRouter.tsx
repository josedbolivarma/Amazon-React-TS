import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Header } from '../shared';
import { routes } from './routes';

export const AppRouter = () => {
  
  return (
    <BrowserRouter>
        <Header />
          <Routes>
          {
            routes.map(({ Component, path }: any ) => (
              <Route key={ path } path={ path } element={ <Component /> } />
            ))
          }
          </Routes>
        <Footer />
    </BrowserRouter>
  )
}