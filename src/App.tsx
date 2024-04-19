//import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
// import HomePage from './views/HomePage';
import PlansPage from './views/PlansPage';
import OtPage from './views/OtPage';
import OtsTablePage from './views/OtsTablePage';
import QuotePage from './views/QuotePage';
import Signup from './components/SingUp';
import { AuthContext } from './context/AuthContext';
import { Protected } from './components/Protected';
import SearchOtsPage from './views/SearchOtsPage';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <NextUIProvider navigate={navigate}>
        <NavBar></NavBar>
        <AuthContext>
          <div className="max-w-1280 mx-auto px-8 py-4">
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route
                path="/ot"
                element={
                  <Protected>
                    <OtPage />
                  </Protected>
                }
              />{' '}
              <Route
                path="/"
                element={
                  <Protected>
                    <OtsTablePage />
                  </Protected>
                }
              />
              <Route
                path="/quote"
                element={
                  <Protected>
                    <QuotePage />
                  </Protected>
                }
              />
              <Route
                path="/search"
                element={
                  <Protected>
                    <SearchOtsPage />
                  </Protected>
                }
              />
              <Route path="/singup" element={<Signup />} />
              <Route path="/planes" element={<PlansPage />} />
              {/* ... */}
            </Routes>
          </div>
        </AuthContext>
      </NextUIProvider>
    </>
  );
}

export default App;
