import './assets/styles/main.scss';

import HambContextProvider from './components/context/hamburgerContext';
import Sidebar from './components/sidebar';

import MainPanel from './components/mainPanel';
import Header from './components/partials/header';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Users from './pages/users'
function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div className='wrapper'>
            <HambContextProvider>
              <Sidebar />
              <MainPanel>
                <Header />
                <Users />
              </MainPanel>
            </HambContextProvider>
          </div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
