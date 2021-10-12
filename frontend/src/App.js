import './App.scss';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import UserPage from './components/UserPage/UserPage';
import CardsPage from './components/CardsPage.js/CardsPage';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/userpage">
           <UserPage/> 
         </Route>
         <Route path="/shop">
           <CardsPage/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
