import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppContext from './contexts/AppContext';
import BookLanding from './pages/BookLanding';

function App() {
  return (
    <AppContext.Provider>
      <Router>
      <Switch>
        <Route path="/search">
          <BookLanding />
        </Route>
      </Switch>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
