import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, RegisterPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/sign-up">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
