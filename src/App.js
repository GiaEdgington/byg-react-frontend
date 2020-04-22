import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BookLanding from './pages/BookLanding';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <BookLanding />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
