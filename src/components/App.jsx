import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Container/Container';
import AppBar from './Appbar/AppBar';
import { fetchUserFromServer } from 'redux/operations/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Loader } from './Loader';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const Form = lazy(() => import('./Form'));
const Register = lazy(() => import('./Register/Register'));
const LogIn = lazy(() => import('./LogIn/LogIn'));

function App() {
  const dispath = useDispatch();
  const fethCurrentUser = useSelector(state => state.auth.fethCurrentUser);

  useEffect(() => {
    dispath(fetchUserFromServer());
  }, [dispath]);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          {!fethCurrentUser && (
            <Routes>
              <Route path="/" element={<HomePage />}></Route>

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <Form />
                  </PrivateRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LogIn />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </Suspense>
      </Container>
    </>
  );
}

export default App;
