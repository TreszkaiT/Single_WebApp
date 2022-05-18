import './assets/styles/main.scss';

import HambContextProvider from './components/context/hamburgerContext';
import Sidebar from './components/sidebar';

import MainPanel from './components/mainPanel';
import Header from './components/partials/header';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Users from './pages/users';
import NewUsers from './pages/newUser'
import ModifyUsers from './pages/modifyUser'
function App() {
  return (

    <BrowserRouter>
      <div className='wrapper'>
        <HambContextProvider>
          <Sidebar />
          <MainPanel>
            <Header />
            <Switch>
              <Route exact path="/">
                <Users />
              </Route>
              <Route path="/new-user">
                <NewUsers />
              </Route>
              <Route path="/modify-user">
                <ModifyUsers />
              </Route>
            </Switch>
          </MainPanel>
        </HambContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
