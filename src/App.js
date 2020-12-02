import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aboutpage from './Week2-Components/DataRequests-Components/FilmRequest/Aboutpage';
import CreateAccount from './Week2-Components/DataRequests-Components/FilmRequest/CreateAccount';
import LoginPage from './Week2-Components/DataRequests-Components/FilmRequest/LoginPage';
import Navbar from './Week2-Components/DataRequests-Components/FilmRequest/Navbar';
import FilmRequest from './Week2-Components/DataRequests-Components/FilmRequest/FilmRequest';


function App() {
return (
  
<Router>
        <Navbar />
        <Switch>
          <div>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/about" exact component={Aboutpage}/>
            <Route path ="/createAccount" component={CreateAccount}/>
            <Route path ="/finddetails" component={FilmRequest}/>

          </div>
        </Switch>
      </Router>    
    );
}

export default App;
