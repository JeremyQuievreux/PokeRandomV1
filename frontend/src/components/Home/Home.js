import './Home.scss';
import axios from 'axios';

function Home({user, hardRefresh}) {

    function addPokemon() {

        axios.post('http://localhost:5000/cards/random',{
            userId : user.userId
        })
          .then(function (response) {
            console.log(response.data.token);
            /* localStorage.removeItem('@tokenmern'); */
            localStorage.setItem('@tokenmern', response.data.token);
            hardRefresh();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
   
    return(
        <div className="home-page">
            <h2>Home Page</h2>
            <button onClick={()=>addPokemon()}>Add Random Pokemon</button> 
        </div>
    )
}

export default Home;