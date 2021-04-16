import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddService from './Components/Admin/AddService/AddService';
import { createContext } from 'react';
import { useState } from 'react';
import Book from './Components/Admin/Book/Book';
import Review from './Components/Admin/Review/Review';



export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/addService'>
         <AddService></AddService>
        </Route>
        <Route  path='/book'>
        <Book></Book>
        </Route>
        <Route  path='/review'>
        <Review></Review>
        </Route>
      </Switch>

    </Router>
   </UserContext.Provider>
  );
}

export default App;
