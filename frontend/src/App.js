import './App.scss';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import UserPage from './components/UserPage/UserPage';
import CardsPage from './components/CardsPage/CardsPage';
import ModalCreate from './components/ModalCreate/ModalCreate';
import ModalLogin from './components/ModalLogin/ModalLogin';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [modalState, setModalState] = useState("closed");
  const [user, setUser] = useState(null);

  let isLog = user !== null;
  
  const closeModal = () => setModalState("closed");
  const openLoginModal = () => setModalState("login");
  const openCreateModal = () => setModalState("create");

  const Login = {
    isLog, openLoginModal, openCreateModal, closeModal
  };

  function hardRefresh() {
    let localToken = localStorage.getItem("@tokenmern");
    if (localToken === null) {
      return setUser(null)
    }
    axios.get("http://localhost:5000/user/info", { headers: { authorization: `Bearer ${localToken}`} })
      .then((response) => {
        setUser(response.data);
      })
      .catch(err => console.log(err))
  }

   useEffect(() => {
    hardRefresh();
  },[])



  /* let localToken = localStorage.getItem("@tokenmern");
  axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${localToken}`} }) */;

  return (
    <div className="App">
     <Router>
     <Navbar Login={Login} />
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/userpage">
           <UserPage user={user} hardRefresh={hardRefresh}/> 
         </Route>
         <Route path="/shop">
           <CardsPage user={user} hardRefresh={hardRefresh}/>
         </Route>
       </Switch>
         <Footer/>
         {modalState === "create" && <ModalCreate Login={Login} setModalState={setModalState}  />}
         {modalState === "login" && <ModalLogin Login={Login} setModalState={setModalState}/>}
     </Router>
    </div>
  );
}

export default App;
