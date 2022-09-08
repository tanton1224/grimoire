import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Encyclopedia from './components/Encyclopedia/Encyclopedia';
import ProfileDeckDisplay from './components/ProfileDeckDisplay/ProfileDeckDisplay';
import ProfileCardsDisplay from './components/ProfileCardsDisplay/ProfileCardsDisplay';
import SplashPage from './components/SplashPage/SplashPage';
import Footer from './components/Footer/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/encyclopedia'>
          <Encyclopedia />
        </Route>
        <Route path='/profile/decks'>
          <ProfileDeckDisplay />
        </Route>
        <Route path='/profile/spellcards'>
          <ProfileCardsDisplay />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <h1>Error 404: Whatever you're looking for, it isn't here!</h1>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
