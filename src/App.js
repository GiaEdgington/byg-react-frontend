import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useAppContext, { providerPropTypes } from './hooks/useAppContext';
import AppContext from './contexts/AppContext';
import BookLanding from './pages/BookLanding';
import BookList from './pages/BookList';
import SignIn from './auth/Login';
import SignUp from './auth/SignUp';


function App() {
  const appContextValue = useAppContext();
  return (
    <AppContext.Provider value={appContextValue}>
      <Router>
      <Switch>
        <Route path="/search">
          <BookLanding />
        </Route>
        <Route path="/booklist">
          <BookList />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
    </AppContext.Provider>
  );
}

AppContext.Provider.propTypes = providerPropTypes;

export default App;
