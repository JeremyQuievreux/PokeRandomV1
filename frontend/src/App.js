import './App.scss';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import UserPage from './components/UserPage/UserPage';
import CardsPage from './components/CardsPage.js/CardsPage';
import ModalCreate from './components/ModalCreate/ModalCreate';
import ModalLogin from './components/ModalLogin/ModalLogin';
import { useState } from 'react';

function App() {

  const [modalState, setModalState] = useState("");

  return (
    <div className="App">
     <Router>
     <Navbar setModalState={setModalState}/>
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
         {modalState === "create" && <ModalCreate setModalState={setModalState}/>}
         {modalState === "login" && <ModalLogin setModalState={setModalState}/>}
     </Router>
    </div>
  );
}

export default App;
