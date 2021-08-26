import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, RegisterPage, DashboardPage } from './pages';

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
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
